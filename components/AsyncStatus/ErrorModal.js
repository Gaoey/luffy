import React, { Component, useState } from "react";
import { theme } from '../../context/ThemeContext'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const ErrorModal = ({
  title = "General Error",
  description = "internal server error",
  buttonText = "OK",
  onPress = () => { },
  buttonColor = theme.color,
  condition = false
}) => {
  if (condition) {
    const [modalVisible, setModalVisible] = useState(condition);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: buttonColor }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  onPress();
                }}>
                <Text style={styles.textStyle}>{buttonText}</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return <React.Fragment></React.Fragment>;
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: theme.color,
    borderRadius: 20,
    width: 120,
    padding: 10,
    marginTop: 10
    // elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center"
  },
  descriptionText: {
    marginBottom: 8,
    textAlign: "center",
  }
});

export default ErrorModal;
