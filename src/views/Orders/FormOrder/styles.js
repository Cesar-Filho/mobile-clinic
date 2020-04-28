import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 24px 40px 24px;
`;

export const GroupInput = styled.KeyboardAvoidingView.attrs({
  behavior: "padding",
})`
  flex: 2;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 36px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
