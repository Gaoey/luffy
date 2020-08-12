import React from 'react'
import { View, Text } from 'react-native'
import BG from '../../assets/bg-default.jpg'
import { PageTemplate, Space } from '../../components'

import { TextInput, Card, Title, Paragraph, Button } from 'react-native-paper';

export default function LoginScreen() {
  const [text, setText] = React.useState('');
  return (
    <PageTemplate backgroundImage={BG}>
      <Card>
        <Card.Content>
          <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
          />
          <Space />
          <TextInput
            label="Password"
            value={text}
            onChangeText={text => setText(text)}
          />
          <Space />
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Press me</Button>
        </Card.Content>
      </Card>
    </PageTemplate >
  )
}
