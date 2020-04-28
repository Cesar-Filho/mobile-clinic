import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const LoadingBg = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: ${height};
  width: ${width};
`;
export const LoadingBox = styled.View`
  background-color: #fff;
  width: 200;
  padding: 20px;
  align-items: center;
  border-radius: 5;
  border-color: #ccc;
  border-width: 1;
`;
