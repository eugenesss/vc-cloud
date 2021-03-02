import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RctSectionLoader from "Components/RctSectionLoader";

// Material UI imports
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";

// Form Layout
import FormWrapper from "Components/Form/Layout/FormWrapper";
import CustomerFormLayout from "../Layout/CustomerFormLayout";

// Input Components
import FormInput from "Components/Form/FormInput";
import DatePickerInput from "Components/Form/Pickers/DatePicker";
import AddressFormInput from "Components/Form/Inputs/AddressFormInput";

// Actions
import { getCustomerFormFields } from "Ducks/crm/customer";

const nationalitySelect = [
  { name: "Singaporean", value: "Singaporean" },
  { name: "PR", value: "PR" },
  { name: "Foreigner", value: "Foreigner" }
];
const initialState = {
  customer: {
    userId: localStorage.getItem("user_id"),
    sourceId: "",
    baseContact: {
      firstName: "",
      lastName: "",      
      email: "",
      mobile: "",
      fax: "",
      phone: "",
      website: "",
      title: "",
      birthday: "",
      _address: { address_1: "", address_2: "", city: "", zip: "" }
    },
    subscribed: true
  }
};

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleContact = this.handleContact.bind(this);
    this.handleCust = this.handleCust.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleAgent = this.handleAgent.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSaveNew = this.onSaveNew.bind(this);
  }
  componentDidMount() {
    this.props.getCustomerFormFields();
    if (this.props.edit) {
      const { id, sourceId, baseContact, userId } = this.props.edit;
      this.setState({
        customer: {
          id,
          sourceId,
          baseContact,
          userId,
          subscribed: this.props.edit.subscribed
        }
      });
    }
  }

  handleContact(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        baseContact: {
          ...prevState.customer.baseContact,
          [field]: value
        }
      }
    }));
  }

  handleCust(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        [field]: value
      }
    }));
  }

  handleChecked = (evt) => {
    let cust = { ...this.state.customer};
    console.log("here");
    cust.subscribed = !cust.subscribed;
    this.setState({      
      customer: cust
    })
  }

  handleAddress(field, value) {
    this.setState(prevState => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        baseContact: {
          ...prevState.customer.baseContact,
          _address: {
            ...prevState.customer.baseContact._address,
            [field]: value
          }
        }
      }
    }));
  }

  handleAgent(field, value) {
    this.setState({
      ...this.state,
      customer: {
        ...this.state.customer,
        contactAgentInfo: {
          ...this.state.customer.contactAgentInfo,
          [field]: value
        }
      }
    });
  }

  onSubmit() {
    this.props.handleSubmit(this.state.customer, true, this.props.history);
  }

  onSaveNew() {
    this.props.handleSubmit(this.state.customer, false);
    this.setState(initialState);
  }

  checkDisabled() {
    return this.state.customer.baseContact.firstname != "";
  }

  render() {
    const { customer } = this.state;
    const { loading, fields } = this.props.customerForm;
    const { edit, title } = this.props;


    const formFields = {
      firstName: (
        <FormInput
          label="First Name"
          value={customer.baseContact.firstName}
          target="firstName"
          handleChange={this.handleContact}
        />
      ),
      lastName: (
        <FormInput
          label="Last Name"
          value={customer.baseContact.lastName}
          required={!customer.baseContact.lastName}
          target="lastName"
          handleChange={this.handleContact}
        />
      ),
      subscribed: (
        // label="Subscription"
        <FormControlLabel label="Subscription"
          control={
            <Checkbox
              // checked={true}
              checked={customer.subscribed}
              target="subscribed"
              onClick={this.handleChecked}
            />
          }
          
        />
      ),
      owner: !edit && (
        <FormInput
          label="Owner"
          value={customer.userId ? customer.userId : ""}
          required={!customer.userId}
          selectValues={fields.users}
          target="userId"
          handleChange={this.handleCust}
        />
      ),
      account: (
        <FormInput
          label="Related Account"
          selectValues={fields.accounts}
          value={customer.accountId ? customer.accountId : ""}
          target="accountId"
          handleChange={this.handleCust}
        />
      ),
      email: (
        <FormInput
          label="Email"
          value={customer.baseContact.email}
          target="email"
          handleChange={this.handleContact}
        />
      ),
      mobile: (
        <FormInput
          label="Mobile"
          value={customer.baseContact.mobile}
          target="mobile"
          handleChange={this.handleContact}
        />
      ),
      title: (
        <FormInput
          label="Job Title"
          value={customer.baseContact.title}
          target="title"
          handleChange={this.handleContact}
        />
      ),

      birthday: (
        <DatePickerInput
          label="Birthday"
          value={
            customer.baseContact.birthday ? customer.baseContact.birthday : null
          }
          target="birthday"
          handleChange={this.handleContact}
        />
      ),
      source: (
        <FormInput
          label="Source"
          value={customer.sourceId ? customer.sourceId : ""}
          selectValues={fields.leadSource}
          target="sourceId"
          handleChange={this.handleCust}
        />
      ),
      office: (
        <FormInput
          label="Office"
          value={customer.baseContact.phone}
          target="phone"
          handleChange={this.handleContact}
        />
      ),
      fax: (
        <FormInput
          label="Fax"
          value={customer.baseContact.fax}
          target="fax"
          handleChange={this.handleContact}
        />
      ),
      nationality: (
        <FormInput
          label="Nationality"
          value={customer.nationality}
          target="nationality"
          selectValues={nationalitySelect}
          handleChange={this.handleCust}
        />
      ),
      address: (
        <AddressFormInput
          handleChange={this.handleAddress}
          address_1={
            customer.baseContact._address
              ? customer.baseContact._address.address_1
              : ""
          }
          address_2={
            customer.baseContact._address
              ? customer.baseContact._address.address_2
              : ""
          }
          city={
            customer.baseContact._address
              ? customer.baseContact._address.city
              : ""
          }
          state={
            customer.baseContact._address
              ? customer.baseContact._address.state
              : ""
          }
          zip={
            customer.baseContact._address
              ? customer.baseContact._address.zip
              : ""
          }
        />
      ),
      description: (
        <FormInput
          multiline
          rows={4}
          label="Description"
          target="info"
          value={customer.baseContact.info}
          handleChange={this.handleContact}
        />
      )
    };

    return (
      <FormWrapper
        onSave={this.onSubmit}
        onSaveNew={this.onSaveNew}
        disabled={this.checkDisabled()}
        edit={edit}
        title={title}
      >
        {loading && <RctSectionLoader />}
        <hr />
        <form autoComplete="off">
          <CustomerFormLayout {...formFields} />
        </form>
      </FormWrapper>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { customerState } = crmState;
  const { customerForm } = customerState;
  return { customerForm };
};

export default withRouter(
  connect(mapStateToProps, {
    getCustomerFormFields
  })(CustomerForm)
);
