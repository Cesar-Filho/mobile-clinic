import React, { useState } from "react";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import { Container, Title, GroupInput, Footer } from "./styles";
import { useOrders } from "../../../reducers/orders";

export default function FormOrder({ navigation }) {
  const { create, getList } = useOrders();
  const [type, setType] = useState("");

  return (
    <Container>
      <GroupInput>
        <Title>Cadastrar pedido de exame</Title>
        <Input
          label="Tipo de exame"
          onChangeText={(exam_type) => {
            setType(exam_type);
          }}
          autoFocus={true}
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={() => {
            create({ patient_id: 10, exam_type: type.toUpperCase() });
            navigation.navigate("Lista de pedidos");
            getList({ patient_id: 10 });
          }}
          blurOnSubmit={false}
        />
      </GroupInput>
      <Footer>
        <Button
          label="Cadastrar"
          onPress={() => {
            create({ patient_id: 10, exam_type: type.toUpperCase() });
            navigation.navigate("Lista de pedidos");
            getList({ patient_id: 10 });
          }}
        />
      </Footer>
    </Container>
  );
}
