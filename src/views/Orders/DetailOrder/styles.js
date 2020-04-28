import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  risizeMethod: 'resize',
})`
  flex: 1;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  margin-top: 200px;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 32px;
`;

export const HeaderEvent = styled.View`
  flex: 1;
  flex-direction: row;
  height: 74px;
`;

export const DateEvent = styled.View`
  border-radius: 5px
  background-color: rgba(115, 61, 190, 0.1);
  width: 60px;
  height: 60px;
  justify-content: center;
`;

export const LabelDate = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 22)}px;
  color: #733dbe;
  text-align: center;
`;

export const TitleEvent = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333333;
`;

export const TimeEvent = styled.Text`
  font-size: 16px;
  color: #666666;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #666666;
`;

export const AreaTitle = styled.View`
  height: 74px;
  margin-left: 16px;
  justify-content: center;
`;

export const AreaDescription = styled.View`
  flex: 2;
  margin-top: 32px;
`;
