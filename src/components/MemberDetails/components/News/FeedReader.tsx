import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { noop } from "lodash"

import { RequestStatusType } from "../../../../reducers/requestStatus"
import { loadNewsFeed } from "./actions"
import {
  loadNewsFeedStatusSelector,
  newsFeedByMemberIdSelector
} from "./reducers"
import { IFeedItem } from "./types"

import { FeedList, SkeletonNews } from "./components"

interface IOwnProps {
  memberId: string
  feedUrl: string
}

interface IStateProps {
  feed: IFeedItem[]
  status: RequestStatusType
}

interface IDispatchProps {
  loadNewsFeed: (memberId: string, feedUrl: string) => void
}

type Props = IOwnProps & IStateProps & IDispatchProps

class FeedReader extends PureComponent<Props> {
  public static defaultProps = {
    loadNewsFeed: noop
  }

  public componentDidMount() {
    this.loadNewsFeed()
  }

  public render() {
    const { feed, status } = this.props

    return (
      <div>
        {status === RequestStatusType.Loading && <SkeletonNews />}
        {status === RequestStatusType.Error && (
          <div>Failed to load news feed!</div>
        )}
        {status === RequestStatusType.Success && <FeedList feed={feed} />}
      </div>
    )
  }

  private loadNewsFeed() {
    const { memberId, feedUrl } = this.props

    if (feedUrl) {
      this.props.loadNewsFeed(memberId, feedUrl)
    }
  }
}

const mapStateToProps = (state: any, props: any) => ({
  feed: newsFeedByMemberIdSelector(state, props.memberId),
  status: loadNewsFeedStatusSelector(state)
})

const mapDispatchToProps = {
  loadNewsFeed
}

export { FeedReader as UnconnectedFeedReader }

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(FeedReader)
