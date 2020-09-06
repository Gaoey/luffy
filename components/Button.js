import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { theme } from '../context/ThemeContext'

export default function MyButton({ onPress, text, disabled = false, transparent = false, style }) {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[
        transparent
          ? { borderRadius: 30, padding: 7, backgroundColor: theme.white, borderColor: theme.color, borderWidth: 1 }
          : { borderRadius: 30, padding: 8, backgroundColor: theme.color }
        , style]}
      disabled={disabled}>
      <Text style={
        transparent
          ? { fontSize: 20, color: theme.color }
          : { fontSize: 20, color: theme.white }
      }>{text}</Text>
    </Button>
  )
}
