import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NewMessageForm from './';

describe('NewMessageForm', () => {
  describe('Clicar em enviar', () => {
    const msgTxt = 'Hello world';
    let getByTestId = null;
    let sendHandler = null;

    beforeEach(() => {
      sendHandler = jest.fn();

      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('messageText'), msgTxt);
      fireEvent.press(getByTestId('sendButton'));
    });

    it('Limpar mensagem do campo', () => {
      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('Chamada do send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(msgTxt);
    });
  });
});
