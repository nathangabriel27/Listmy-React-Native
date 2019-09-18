import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  keyboardVerticalOffset: 75,
})`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Form = styled.View`
  padding: 0px 0px 25px;
  background: #fff;
  align-self: stretch;
  flex-direction: row;
  padding-top: 13px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #1c6cce;
  border-radius: 4px;
  margin-left: 10px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const Texto = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;
