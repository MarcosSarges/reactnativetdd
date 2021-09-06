import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const NewMessageForm = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    onSend(text);
    setText('');
  };

  return (
    <View>
      <TextInput testID="messageText" value={text} onChangeText={setText} />
      <Button testID="sendButton" title="Send" onPress={handleSend} />
    </View>
  );
};

export default NewMessageForm;
