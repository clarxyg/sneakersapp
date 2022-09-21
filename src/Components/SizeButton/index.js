import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export function SizeButton(props) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: props.bgColor || '#fff '}]}>
      <Text style={[styles.text, { color: props.color || '#8888' }]}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
       width: 150,
       height: 50,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 4,
       borderColor: '#e6e6e6',
       borderWidth: 3,
       marginHorizontal: 10,
       marginVertical: 20
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlignVertical: 'center'
    }
})