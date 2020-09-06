import PropTypes from 'prop-types';
import React from 'react';
import R from 'ramda'
import { StyleSheet, Text, View } from 'react-native';
import { theme, font } from '../../context/ThemeContext';

function Form(props) {
  const { width = "100%", marginLeft, marginRight, children, labelName = null, required, labelColor, labelFontSize, style } = props
  const styles = stylesheet(marginLeft, marginRight, labelColor, labelFontSize)
  return (
    <View style={[styles.container, style]}>
      {
        !R.isEmpty(labelName) &&
        <Text>
          <Text style={styles.label}>{labelName}</Text>
          <Text style={styles.required}>{required && '*'}</Text>
        </Text>
      }
      {props.children}
    </View>
  )
}

Form.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  labelName: PropTypes.string,
  required: PropTypes.bool
}

Form.defaultProps = {
  width: '100%',
  marginLeft: 0,
  marginRight: 0,
  labelName: null,
  required: false,
}

const stylesheet = (marginLeft, marginRight, labelColor, labelFontSize) => {
  return StyleSheet.create({
    container: {
      // flex: 1
    },
    label: {
      fontSize: labelFontSize || font.medium,
      color: labelColor || theme.black
    },
    required: {
      fontSize: labelFontSize || font.medium,
      color: labelColor || theme.red
    }
  })
}

export default Form