import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px 24px 40px 12px;
`;

export const Item = styled.TouchableOpacity`
  elevation: 1;
  height: 40px;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: #733dbe;
  margin-bottom: 10px;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #733dbe;
  margin-left: 12px;
`;
