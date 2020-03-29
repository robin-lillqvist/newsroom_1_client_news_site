import React from "react";
import { Header, Modal, Form, Button, Label } from "semantic-ui-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";

const SubscriptionForm = () => {
  return (
    <Modal trigger={<Button>Make Payment</Button>} closeIcon>
      <Header content="Subscription Form" />
      <Modal.Content>
        <Form id="subscription-form">
          <Label pointing="bottom">Please enter Card Number</Label>
          <CardNumberElement />

          <Label pointing="bottom">Please enter Expiration Date</Label>
          <CardExpiryElement />

          <Label pointing="bottom">Please enter CVC</Label>
          <CardCVCElement />

          <Button positive>Confirm Subscription</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default injectStripe(SubscriptionForm);
