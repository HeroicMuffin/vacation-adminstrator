import React from "react";
import VacationCard from "../../vacationCard";
import AdminCard from "../../adminCards";
import CardContainer from "./CardsContainer";
import { invokeGetSortedData } from "../../../redux/actions";
import { connect } from "react-redux";

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  async componentDidMount() {
    this.props.getData();
  }

  public render() {
    const { data, isAdmin } = this.props.data
    return (
      <div>
        {data && (
          <CardContainer
            childComponent={isAdmin? AdminCard : VacationCard}
            data={data}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  data: state
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  getData: () => {
    dispatch(invokeGetSortedData());
  }
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
