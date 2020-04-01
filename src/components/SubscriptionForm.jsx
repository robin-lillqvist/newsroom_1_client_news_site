import React from "react";
import { Header, Modal, Form, Button, Label } from "semantic-ui-react";
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
    {headers: headers}
    );
    if (paymentStatus.data.status === "paid")
    debugger
      dispatch({
        type: "FLASH_MESSAGE",
        payload: { flashMessage: "Thank you for your business!", showArticlesList: true, showSubscription: false, premiumUser: true },
      });

  };

  return (
    <>
      <Form id="payment-form">
        <Header textAlign="center" level="4">
          Payment Form
        </Header>
        <Header textAlign="center" level="5">
          Step above the crowd, with our Premium Platinum Plan costing the low amount of 10,000SEK per year. 
          This yearly subscription will allow you to access all the amazing ultra premium content in addition to the acceptable free content.
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

      {/* <Button onClick={ () => dispatch({type: 'BACK_TO_ARTICLE'})}>
      Back to article
    </Button> */}
    </>
  );
};

export default injectStripe(SubscriptionForm);
