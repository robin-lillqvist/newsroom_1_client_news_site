import React from "react";
import { Header, Modal, Form, Button, Label } from "semantic-ui-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { useDispatch } from "react-redux";

const SubscriptionForm = props => {
  const dispatch = useDispatch();
  const submitPayment = async event => {
    event.preventDefault();
    let stripeResponse = await props.stripe.createToken();
    let token = stripeResponse.token.id;
    let paymentStatus = await axios.post("**/subscriptions", {
      stripeToken: token
    });
    if (paymentStatus.data.status === "paid")
      dispatch({
        type: "FLASH_MESSAGE",
        payload: { flashMessage: "Thank you for your business!" }
      });
  };
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
    <>  
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
        >
          Submit Payment
        </Button>
      </Form>
     
    <Button onClick={ () => props.dispatch({type: 'BACK_TO_ARTICLE'})}>
      Back to article
    </Button>
  </>
  );
};

export default injectStripe(SubscriptionForm);
