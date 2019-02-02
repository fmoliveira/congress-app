import React, { PureComponent } from "react"
import { connect } from "react-redux"

import { RequestStatusType } from "../../reducers/requestStatus"
import { loadNewsFeed } from "./actions"
import {
  loadNewsFeedStatusSelector,
  newsFeedByMemberIdSelector
} from "./reducers"

import { FeedList } from "./FeedList"
import { SkeletonNews } from "./SkeletonNews"

interface IOwnProps {
  memberId: string
  feedUrl: string
}

interface IStateProps {
  feed: any[]
  status: RequestStatusType
}

interface IDispatchProps {
  loadNewsFeed: (memberId: string, feedUrl: string) => void
}

type Props = IOwnProps & IStateProps & IDispatchProps

class FeedReader extends PureComponent<Props> {
  public componentDidMount() {
    this.loadNewsFeed()
  }

  public render() {
    const { feed, status } = this.props

    return (
      <div>
        {status === RequestStatusType.Loading && <SkeletonNews />}
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

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(FeedReader)
