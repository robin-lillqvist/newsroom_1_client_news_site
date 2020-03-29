import React from "react";
import { Header, Modal, Form } from "semantic-ui-react";

const SubscriptionForm = () => {
  return (
    <Modal open={true}>
      <Header content="Subscription Form" />
      <Modal.Content>
        <Form id="subscription-form">
            <Form.Field>
                Name
            </Form.Field>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default SubscriptionForm;
