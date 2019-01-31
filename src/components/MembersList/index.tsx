import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { listMembers } from "./actions";
import { ListItem } from "./components";

interface IStateProps {
  members: any[];
}

interface IDispatchProps {
  listMembers: (session: number, chamber: string) => void;
}

type Props = IStateProps & IDispatchProps;

class MembersList extends PureComponent<Props> {
  public static defaultProps = {
    members: []
  };

  public componentDidMount() {
    this.props.listMembers(115, "senate");
  }

  public render() {
    const { members } = this.props;

    return (
      <div>
        {members.map((i: any) => (
          <ListItem key={i.id} {...i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any): IStateProps => ({
  members: state.membersListStore.members
});

const mapDispatchToProps: IDispatchProps = {
  listMembers
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MembersList);
