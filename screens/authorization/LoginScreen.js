import React from 'react'
import { View, Text } from 'react-native'
import BG from '../../assets/bg-default.jpg'
import { PageTemplate } from '../../components'

export default function LoginScreen() {
  return (
    <PageTemplate backgroundImage={BG}>
      <Text>Login Screen</Text>
    </PageTemplate>
  )
}
