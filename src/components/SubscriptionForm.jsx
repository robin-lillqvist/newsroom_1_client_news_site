import React from "react";
import { Header, Form, Button, Segment } from "semantic-ui-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SubscriptionForm = props => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.userEmail)
  const errorMessage = useSelector(state => state.errorMessage)
  const { t } = useTranslation("common");
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
  const submitPayment = async event => {
    event.preventDefault();
    //let stripeResponse = await props.stripe.createToken();
    //let token = stripeResponse.token.id;
    await props.stripe.createToken().then(async response => {
      try {
        let paymentStatus = await axios.post("/subscriptions", {
          stripeToken: response.token.id,
          email: userEmail
        },
          { headers: headers }
        );
        if (paymentStatus.data.status === "paid")
          dispatch({
            type: "FLASH_MESSAGE",
            payload: { flashMessage: "You are now a Premium Platinum member!", showArticlesList: true, showSubscription: false, premiumUser: true },
          });
      } catch (error) {
        dispatch({
          type: "ERROR_MESSAGE",
          payload: { errorMessage: response.error.message },
        });
      }
    });
  }

  return (
    <>
      <Segment raised compact>
        <Form id="payment-form">
          <Header textAlign="center" as="h2" dividing>
            {t("auth.payment-form")}
        </Header>
          <Header textAlign="center" as="h5">
          {t("auth.subscription-details-1")}
            </Header>
          <Header textAlign="center" as="h5">
            This yearly subscription will allow you to access all the amazing ultra premium content in addition to our free content.
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
        {errorMessage}
      </Segment>
    </>
  );
};

export default injectStripe(SubscriptionForm);
