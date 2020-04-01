import React from "react";
import { Header, Modal, Form, Button, Label, Segment } from "semantic-ui-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const SubscriptionForm = props => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.userEmail)
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
  const submitPayment = async event => {
    event.preventDefault();
    let stripeResponse = await props.stripe.createToken();
    let token = stripeResponse.token.id;
    let paymentStatus = await axios.post("/subscriptions", {
      stripeToken: token,
      email: userEmail
    },
      { headers: headers }
    );
    if (paymentStatus.data.status === "paid")
    dispatch({
      type: "FLASH_MESSAGE",
      payload: { flashMessage: "Thank you for your business!", showArticlesList: true, showSubscription: false, premiumUser: true },
    });
  };

  return (
    <>
      <Segment raised compact>
        <Form id="payment-form">
          <Header textAlign="center" as='h2' dividing>
            Payment Form
        </Header>
          <Header textAlign="center" as='h5'>
            Step above the crowd, with our Premium Platinum Plan costing the low amount of 10,000SEK per year.
            </Header>
          <Header textAlign="center" as='h5'>
            This yearly subscription will allow you to access all the amazing ultra premium content in addition to the acceptable free content.
        </Header>
          <Segment raised compact>
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
          </Segment>
        </Form>
      </Segment>
    </>
  );
};

export default injectStripe(SubscriptionForm);
