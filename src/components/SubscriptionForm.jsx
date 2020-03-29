import React from "react";
import { Header, Modal, Form, Button, Label } from "semantic-ui-react";
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from "react-stripe-elements";

const SubscriptionForm = props => {
  const submitPayment = async (event) => {
    event.preventDefault()
    let stripeResponse = await props.stripe.createToken()
    let token = stripeResponse.token.id
debugger
    let paymentStatus = await axios.post('**/subscriptions', { stripeToken: token})
    if (paymentStatus === 'paid')
  }
  return (
    // <Modal trigger={<Button>Make Payment</Button>} closeIcon>
    //   <Header content="Subscription Form" />
    //   <Modal.Content>
    //     <Form id="subscription-form">
    //       <Label pointing="bottom">Please enter Card Number</Label>
    //       <CardNumberElement id="cne"/>

    //       <Label pointing="bottom">Please enter Expiration Date</Label>
    //       <CardExpiryElement />

    //       <Label pointing="bottom">Please enter CVC</Label>
    //       <CardCVCElement />

    //       <Button positive
    //       onClick={(event) => submitPayment(event)}
    //       >Confirm Subscription</Button>
    //     </Form>
    //   </Modal.Content>
    // </Modal>


    <Form id="payment-form">
      <Header textAlign="center" level="4">
        Payment Form
      </Header>
      <label>Card number:</label>
      <CardNumberElement />
      <label>Expiry date:</label>
      <CardExpiryElement />
      <label>CVC:</label>
      <CardCVCElement />
      <Button
        margin="xsmall"
        onClick={event => {
          submitPayment(event);
        }}
      >Submit Payment</Button>
    </Form> 
  );
};

export default injectStripe(SubscriptionForm);
