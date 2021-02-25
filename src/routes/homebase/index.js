import React, { Component } from "react";
import { connect } from "react-redux";

// sub components
import Helmet from "Components/Helmet";

import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Widgets

import CalendarLayout from "Components/Widgets/Calendar/CalendarLayout";
import CrmSummary from "Components/Widgets/CrmSummary";
import UntouchedLeadsTable from "Components/Widgets/UntouchedLeadsTable";
import HomeCharts from './HomeCharts';
import { getAllEvents } from "Ducks/calendar";
import UpcomingEvents from './UpcomingEvents';
import Moment from "moment";

const numberOfDays = 6;

class Homebase extends Component {

  componentDidMount() {

    
  }

  

  render() {



    const { name } = this.props;
    return (
      <React.Fragment>
        <Helmet title="Homebase" />
        <PageTitleBar title={`Hello ${name},`} noBack />
        <CrmSummary />
        <div className="row">
        <div className="col-md-8">      
          <UpcomingEvents />
           </div>
          <div className="col-md-4">
            <CalendarLayout />
         
    
          </div>
         
        </div>
 
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ sessionState, calendarState }) => {
  const { authState } = sessionState;
  const { name } = authState.loggedInUser;
  const { myEvents } = calendarState;
  return { name, myEvents };
};

export default connect(mapStateToProps, {getAllEvents})(Homebase);
