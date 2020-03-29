import React from "react";
import { Header, Modal, Form, Button } from "semantic-ui-react";

const SubscriptionForm = () => {
  
  return (
    <Modal trigger={<Button>Make Payment</Button>} closeIcon>
      <Header content="Subscription Form" />
      <Modal.Content>
        <Form id="subscription-form">
            <Form.Field>
            <input placeholder='Name on Card' />
            </Form.Field>
            <Form.Field>
            <input placeholder='Card Number' />
            </Form.Field>
            <Form.Field>
            <input placeholder='CVC' />
            </Form.Field>
            <Form.Field>
            <input placeholder='Billing Address' />
            </Form.Field>
            <Button positive>Confirm Subscription</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default SubscriptionForm;
