import React from 'react'
import { View, Text } from 'react-native'

export default function Space({ height = 20, line = 1 }) {
  return (
    <View style={{ marginTop: height * line }} />
  )
}
