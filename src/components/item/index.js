import React from 'react';
import { TouchableOpacity } from 'react-native';

import Ico from 'react-native-vector-icons/MaterialIcons';

import { Container, NameTask } from './style';
// import { Container } from './styles';

export default function itemList({ task, onCancel }) {
  return (
    <>
      <Container>
        <NameTask>{task}</NameTask>
        <TouchableOpacity onPress={onCancel}>
          <Ico name="delete-forever" size={25} color="#f64c75" />
        </TouchableOpacity>
      </Container>
    </>
  );
}
