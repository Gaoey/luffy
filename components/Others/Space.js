import React from 'react'
import { View, Text } from 'react-native'

export default function Space({ height = 20 }) {
  return (
    <View style={{ marginTop: height }} />
  )
}
