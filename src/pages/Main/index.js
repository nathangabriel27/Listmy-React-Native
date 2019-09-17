import React, { Component } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContainerForm,
  Form,
  Input,
  List,
  SubmitButton,
} from './styles';

import ItemList from '../../components/item';

export default class Main extends Component {
  state = {
    tasks: [],
    newtasks: '',
  };

  handleAddTask = async () => {
    const { tasks, newTasks } = this.state;

    this.setState({
      tasks: [...tasks, newTasks],
      newTasks: '',
    });

    Keyboard.dismiss();
  };

  async handleDeleteTask(item) {
    this.setState({ tasks: this.state.tasks.filter(t => t !== item) });
  }

  async componentDidMount() {
    const tasks = await AsyncStorage.getItem('tasks');

    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  render() {
    const { tasks, newTasks } = this.state;
    return (
      <>
        <Container>
          <List
            data={tasks}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <ItemList
                task={item}
                onCancel={() => this.handleDeleteTask(item)}
              />
            )}
          />
          <ContainerForm>
            <Form>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Adicionar uma tarefa"
                value={newTasks}
                onChangeText={text => this.setState({ newTasks: text })}
                returnKeyType="send"
                onSubmitEditing={this.handleAddTask}
              />
              <SubmitButton onPress={() => this.handleAddTask()}>
                <Icon name="add" size={20} color="#fff" />
              </SubmitButton>
            </Form>
          </ContainerForm>
        </Container>
      </>
    );
  }
}

Main.navigationOptions = {
  title: 'ListMy - Lista de Tarefas',
};
