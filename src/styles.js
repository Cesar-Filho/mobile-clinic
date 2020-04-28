import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from 'react-native';

export const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel((screenWidth * parseFloat(widthPercent)) / 100);
};

export const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel((screenHeight * parseFloat(heightPercent)) / 100);
};

export const IconNavigation = styled.TouchableOpacity`
  margin-left: 16px;
  width: 36px;
  height: 34px;
  padding: 8px;
  justify-content: center;
`;
