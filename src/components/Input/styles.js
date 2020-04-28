import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 5px 0 5px 0;
`;

export const Label = styled.Text`
  margin: 0 0 5px 1px;
  font-size: 14px;
  color: #666666;
`;

export const AreaInput = styled.View`
  border: 1px ${props => (props.isActive ? '#733DBE' : '#abb1b7')};
  border-radius: 3px;
  padding-horizontal: 20px;
  padding-vertical: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-size: 20px;
  color: #333333;
  flex: 1;
`;
