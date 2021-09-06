import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <NewMessageForm onSend={handleSend} />
          <MessageList data={messages} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
