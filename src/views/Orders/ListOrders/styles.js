import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 4px 24px 40px 24px;
`;

export const CardList = styled.FlatList`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999999;
  margin: 20px 0 20px 0;
`;

export const EventTime = styled.Text`
  font-size: 14px;
  color: #666666;
`;
