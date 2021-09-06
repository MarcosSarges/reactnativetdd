import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import MessageList from '.';

describe('MessageList', () => {
  describe('Listando elementos', () => {
    const msgs = ['test1', 'test2', 'test3'];
    let getByTestId = null;
    let getByText = null;

    beforeEach(() => {
      ({ getByTestId, getByText } = render(<MessageList data={msgs} />));
    });

    it('Chamada da lista', () => {
      expect(getByTestId('listMessage').props.data.length).toEqual(3);
    });

    it('Renderizou os elementos', () => {
      expect(getByText('test3').props.children).toEqual('test3');
    });
  });
});
