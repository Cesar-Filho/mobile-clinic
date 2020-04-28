import styled from 'styled-components/native';

export const CardView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: #733dbe;
  elevation: 2px;
  shadow-color: rgba(115, 61, 190, 0.1);
  height: 124px;
  margin: 4px 0 4px 0;
  padding: 16px;
`;

export const CardImage = styled.ImageBackground`
  width: 66px;
  height: 92px;
  margin-right: 12px;
`;

export const CardContent = styled.View`
  display: flex;
`;

export const CardHeader = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const CardBody = styled.View`
  flex: 2;
  justify-content: center;
`;

export const CardFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const TextMedium = styled.Text`
  font-size: 12px;
  color: #999999;
`;
