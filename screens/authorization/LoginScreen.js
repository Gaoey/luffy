import React from 'react'
import { View, Text } from 'react-native'
import BG from '../../assets/bg-default.jpg'
import { Formik } from 'formik';
import { PageTemplate, Space } from '../../components'
import { TextInput, Card, Headline, Paragraph, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <PageTemplate backgroundImage={BG}>
      <Headline style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>LUFFY STARTER KIT</Headline>
      <Space />
      <Card>
        <Card.Content>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
              const { email, password } = values;
              // login(email, password)
              navigation.navigate("HomeScreen");
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <View>
                <TextInput
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Space />
                <TextInput
                  label="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                <Space />
                <Button icon="login" mode="contained" onPress={handleSubmit}>Sign In</Button>
              </View>
            )}
          </Formik>
        </Card.Content>
      </Card>
    </PageTemplate >
  )
}
