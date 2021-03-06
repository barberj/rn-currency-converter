import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {

  const underlayColor = color(styles.$buttonBackgroundColorBase).
    darken(styles.$buttonBackgroundColorModifier);

  const containerStyles = [styles.container];
  if(props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles} >
      <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={props.onPress} >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};


export default InputWithButton;
