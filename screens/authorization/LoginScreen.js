import React from 'react'
import { View, Text } from 'react-native'
import BG from '../../assets/bg-default.jpg'
import { PageTemplate, Space } from '../../components'

import { TextInput, Card, Title, Paragraph, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  return (
    <PageTemplate backgroundImage={BG}>
      <Card>
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Space />
          <TextInput
            label="Password"
            value={pwd}
            secureTextEntry
            onChangeText={text => setPwd(text)}
          />
          <Space />
          <Button icon="login" mode="contained" onPress={() => navigation.navigate("HomeScreen")}>Sign In</Button>
        </Card.Content>
      </Card>
    </PageTemplate >
  )
}
