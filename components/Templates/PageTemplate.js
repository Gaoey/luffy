import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../context/ThemeContext';
import R from 'ramda'

export const templateMargin = 20

const PageTemplate = ({ children, backgroundColor = theme.color, noMargin = false, backgroundImage, middle = false }) => {
  return (
    <View style={[styles.body, { backgroundColor, height: '100%' }]}>
      {
        !R.isNil(backgroundImage)
          ?
          <ImageBackground source={backgroundImage} style={[styles.image, middle && styles.middle]}>
            <View style={noMargin ? { margin: 0 } : styles.container}>
              {children}
            </View>
          </ImageBackground>
          :
          <View style={[middle && styles.middle]}>
            <View style={noMargin ? { margin: 0 } : styles.container}>
              {children}
            </View>
          </View>
      }
    </View >
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    margin: templateMargin,
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  middle: {
    flex: 1,
    justifyContent: "center"
  }
})

export default PageTemplate
