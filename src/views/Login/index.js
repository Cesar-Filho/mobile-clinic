import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import Input from "../../components/Input";
import { Container, Title, GroupInput, Footer } from "./styles";

import Button from "../../components/Button";
import { Alert } from "react-native";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.password = "";
  }

  render() {
    let secondTextInput = React.createRef();
    return (
      <Container>
        <GroupInput>
          <Title>Faça seu login 🔑</Title>
          <Input
            label="Nome do usuário"
            onChangeText={(username) => {
              this.username = username;
            }}
            autoFocus={true}
            autoCorrect={false}
            returnKeyType="next"
            autoCompleteType="email"
            keyboardType="email-address"
            onSubmitEditing={() => secondTextInput.focus()}
            blurOnSubmit={false}
            icon={<FontAwesome name="envelope-o" size={20} color="#AAAAAA" />}
          />
          <Input
            label="Senha"
            onChangeText={(password) => {
              this.password = password;
            }}
            returnKeyType="go"
            autoCorrect={false}
            secureTextEntry={true}
            setRef={(input) => {
              secondTextInput = input;
            }}
            onSubmitEditing={() => {
              if (this.username && this.password) {
                return this.props.navigation.navigate("Lista de pedidos");
              }
              Alert.alert("Preencha o nome do usuário e senha.");
            }}
            blurOnSubmit={false}
            icon={<FontAwesome name="eye-slash" size={23} color="#AAAAAA" />}
          />
        </GroupInput>
        <Footer>
          <Button
            label="Entrar"
            onPress={() => {
              if (this.username && this.password) {
                return this.props.navigation.navigate("Lista de pedidos");
              }
              Alert.alert("Preencha o nome do usuário e senha.");
            }}
          />
        </Footer>
      </Container>
    );
  }
}

export default Login;
