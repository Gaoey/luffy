import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../context/ThemeContext.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FooterOverlay(props) {
  return (
    <View style={styles.footer}>
      <React.Fragment>
        {props.children}
      </React.Fragment>
    </View>
  )
}

// see more in https://stackoverflow.com/questions/29541971/absolute-and-flexbox-in-react-native
var styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: "100%"
  }
});