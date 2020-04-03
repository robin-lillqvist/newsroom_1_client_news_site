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
  const { t } = useTranslation();
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
  const submitPayment = async event => {
    event.preventDefault();
    await props.stripe.createToken().then(async response => {
      try {
        let paymentStatus = await axios.post("/subscriptions", {
          stripeToken: response.token.id,
          email: userEmail
        },
          { headers: headers }
        );
        if (paymentStatus.status === 200)
          dispatch({
            type: "FLASH_MESSAGE",
            payload: { flashMessage: `${t("subscription.flash-message")}`, showArticlesList: true, showSubscription: false, premiumUser: true },
          });
      } catch (error) {
        dispatch({
          type: "ERROR_MESSAGE",
          payload: { errorMessage: response.message },
        });
      }
    });
  }

  return (
    <>
      <Segment raised compact>
        <Form id="payment-form">
          <Header textAlign="center" as="h2" dividing>
            {t("subscription.payment-form")}
          </Header>
          <Header textAlign="center" as="h5">
            {t("subscription.subscription-details-1")}
          </Header>
          <Header textAlign="center" as="h5">
            {t("subscription.subscription-details-2")}
          </Header>
          <Segment raised compact>
            <label>{t("subscription.card-number")}</label>
            <CardNumberElement />
            <label>{t("subscription.expiry-date")}</label>
            <CardExpiryElement />
            <label>{t("subscription.cvc")}</label>
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
