import React from 'react';
import { FlatList, Text } from 'react-native';

// import { Container } from './styles';

const Message = ({ text }) => <Text>{text}</Text>;

const MessageList = ({ data }) => {
  return (
    <FlatList
      testID="listMessage"
      data={data}
      keyExtractor={item => item}
      renderItem={({ item }) => <Message text={item} />}
    />
  );
};

export default MessageList;
