import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [input, setInput] = useState('');

  const onChange = input => setInput(input);

  const onPress = input => {
    setInput('');
    addItem(input);
  };

  return (
    <View>
      <TextInput
        placeholder="Item..."
        value={input}
        onChangeText={onChange}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={() => onPress(input)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
