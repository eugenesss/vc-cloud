import React, { Component } from "react";
import { connect } from "react-redux";

// form components
import FormInput from "Components/Form/FormInput";
import DateTimePicker from "Components/Form/Pickers/DateTimePicker";
import DatePicker from "Components/Form/Pickers/DatePicker";
import { Button, Switch, FormControlLabel } from "@material-ui/core";

// Actions
import { handleRegErrorForm } from "Ducks/session/register";

class NewEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      start: this.props.dayView
        ? new Date(this.props.dayView.start).setHours(12)
        : new Date(),
      end: this.props.dayView
        ? new Date(this.props.dayView.end).setHours(13)
        : new Date().setHours(new Date().getHours() + 1),
      title: "",
      allDay: false
    };
    this.editField = this.editField.bind(this);
    this.showDesc = this.showDesc.bind(this);
  }

  editField = (element, value) => {
    this.setState({ [element]: value });
  };

  showDesc() {
    this.setState({ showDesc: !this.state });
  }

  OnBlurValidation = () => {
    let state = { ...this.state.event };
    if (state.start == "" || state.end == "") {
      this.props.handleRegErrorForm(
        "Either you have set the start or end time set wrongly or you have not set a start and end time"
      );
      return false;
    }
    if (new Date(state.start) > new Date(state.end)) {
      this.props.handleRegErrorForm(
        "Your start date and time is later than your end date and time, please adjust the correct date and time"
      );
      return false;
    }
    if (state.title == "") {
      this.props.handleRegErrorForm(
        "Invalid title for your event, set a longer title to define your event"
      );
      return false;
    }
    return true;
  };

  ConfirmEvent = (eventableType, eventableId, formType) => {
    if (this.OnBlurValidation()) {
      let data = Object.assign({}, this.state);
      if (eventableId && eventableType)
        data = { ...data, eventableId, eventableType };
      this.props.addEvent(data, formType);
    }
  };

  render() {
    const { title, desc, start, end, allDay } = this.state;
    const { eventableType, eventableId, formType } = this.props;
    return (
      <form autoComplete="off">
        <div className="row pt-10 d-flex justify-content-center">
          <div className="col-6 ">
            {allDay ? (
              <DatePicker
                label="Start"
                value={start}
                target="start"
                handleChange={this.editField}
                required={!start}
              />
            ) : (
              <DateTimePicker
                label="Start"
                value={start}
                target="start"
                handleChange={this.editField}
                required={!start}
              />
            )}
            {allDay ? (
              <DatePicker
                label="End"
                value={end}
                target="end"
                handleChange={this.editField}
                required={!end}
              />
            ) : (
              <DateTimePicker
                label="End"
                value={end}
                target="end"
                handleChange={this.editField}
                required={!end}
              />
            )}
              <div className="col-md-10  text-muted">
          <FormControlLabel
            control={
              <Switch
                checked={allDay}
                onChange={() => this.editField("allDay", !allDay)}
                value="allDay"
                className="ml-10"
                disableRipple
              />
            }
            label="All day event"
            labelPlacement="start"
            className="mb-0 fs-14"
          />
        </div>
          </div>
        </div>
        {/* <div className="col-md-4 text-left text-muted">
          <FormControlLabel
            control={
              <Switch
                checked={allDay}
                onChange={() => this.editField("allDay", !allDay)}
                value="allDay"
                className="ml-10"
                disableRipple
              />
            }
            label="All day event"
            labelPlacement="start"
            className="mb-0 fs-14"
          />
        </div> */}
        <div className=" pl-25 pr-25">
        <FormInput
          label="Title"
          value={title}
          target="title"
          handleChange={this.editField}
          required={!title}
        />
        <FormInput
          label="Description"
          value={desc}
          target="desc"
          handleChange={this.editField}
          multiline
        />
        <div className="d-flex justify-content-end pb-10">
          <Button
            variant="contained"
            className="text-white btn-success"
            onClick={() =>
              this.ConfirmEvent(eventableType, eventableId, formType)
            }
          >
            Add
          </Button>
        </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ calendarState }) => {
  const { eventAdd } = calendarState;
  return { eventAdd };
};

export default connect(
  mapStateToProps,
  { handleRegErrorForm }
)(NewEventForm);
