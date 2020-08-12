import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { theme } from '../../context/ThemeContext';
import R from 'ramda'

export const templateMargin = 20

const PageTemplate = ({ children, backgroundColor = theme.white, noMargin = false, backgroundImage }) => {
  return (
    <View style={[styles.body, { backgroundColor, height: '100%' }]}>
      {
        !R.isNil(backgroundImage)
          ?
          <ImageBackground source={backgroundImage} style={styles.image}>
            <View style={noMargin ? { margin: 0 } : styles.container}>
              {children}
            </View>
          </ImageBackground>
          :
          <View style={noMargin ? { margin: 0 } : styles.container}>
            {children}
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    margin: templateMargin
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

export default PageTemplate
