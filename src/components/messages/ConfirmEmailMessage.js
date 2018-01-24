import React from 'react';
import { Message}  from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
  <Message info>
    <Message.Header>
      Por favor, verifique seu e-mail para ter acesso a nossas funcionalidades.
    </Message.Header>
  </Message>
);

export default ConfirmEmailMessage;