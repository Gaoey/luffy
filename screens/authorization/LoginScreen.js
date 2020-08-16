import React from 'react'
import { View, Text } from 'react-native'
import BG from '../../assets/bg-default.jpg'
import { Formik } from 'formik';
import { PageTemplate, Space } from '../../components'
import LanguageContext from '../../context/language/LanguageContext';
import { TextInput, Card, Headline, Paragraph, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <LanguageContext.Consumer>
      {
        ({ word }) => (
          <PageTemplate backgroundImage={BG} middle>
            <Headline style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>LUFFY STARTER KIT</Headline>
            <Space />
            <Card>
              <Card.Content>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={values => {
                    const { email, password } = values;
                    // login(email, password)
                    navigation.navigate("Main");
                  }}
                >
                  {({ handleSubmit, handleChange, values }) => (
                    <View>
                      <TextInput
                        label={word.email}
                        value={values.email}
                        onChangeText={handleChange('email')}
                      />
                      <Space />
                      <TextInput
                        label={word.password}
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
    </LanguageContext.Consumer>
  )
}
