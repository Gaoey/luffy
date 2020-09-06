/* eslint-disable react/no-unused-prop-types */
import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'

const MyTextInput = (props) => {
  const {
    value,
    onChangeText,
    placeholder,
    width,
    height,
    secureTextEntry = false,
    type,
    style,
    editable = true,
    leftIcon,
    leftIconStyle = {},
    leftIconColor = "grey"
  } = props
  const theme = useContext(ThemeContext);
  const [borderColor, setBorderColor] = useState(theme.grey)
  const [secureTextEntryState, setSecureTextEntryState] = useState(secureTextEntry)
  const styles = stylesheet(theme, borderColor, width, height, editable)

  useEffect(() => {
    setSecureTextEntryState(secureTextEntry)
  }, [secureTextEntry])

  return (
    <View style={{ display: 'flex', marginVertical: (5) }}>
      <View style={styles.container}>
        {
          leftIcon &&
          <Icon
            name={leftIcon}
            style={[styles.icon, leftIconStyle, { marginLeft: 10 }]}
            size={25}
            color={leftIconColor}
          />
        }
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input, style]}
          onBlur={() => setBorderColor(theme.grey)}
          onFocus={() => setBorderColor(theme.color)}
          secureTextEntry={secureTextEntryState}
          editable={editable}
          value={value}
        />
        {
          type === "password" &&
          <Icon
            style={[styles.icon, { marginRight: 10 }]}
            name={secureTextEntryState ? 'eye-off-outline' : 'eye-outline'}
            size={25}
            color={theme.grey2}
            onPress={() => setSecureTextEntryState(!secureTextEntryState)}
          />
        }
      </View>
    </View >
  );
}

MyTextInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  secureTextEntry: PropTypes.bool,
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  editable: PropTypes.bool
}

function stylesheet(theme, borderColor, width, height, editable) {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderColor: editable ? borderColor : theme.grey,
      backgroundColor: editable ? theme.white : theme.grey,
      borderRadius: 10,
      borderWidth: 1
    },
    input: {
      flex: 1,
      alignSelf: 'stretch',
      paddingHorizontal: (10),
      width,
      height: 50,
      padding: 10,
    },
    text: {
      color: theme.color,
      textAlign: 'center',
      fontSize: 15,
      fontFamily: 'kanit-light'
    },
    icon: {
      textAlign: 'center',
      textAlignVertical: 'center',
      width: height
    }
  })
}

export default MyTextInput