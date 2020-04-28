import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, CardList, Title } from "./styles";
import CardOrder from "../../../components/CardOrder";
import { useOrders } from "../../../reducers/orders";
import Button from "../../../components/Button";

export default function ListOrders({ navigation }) {
  const { getList } = useOrders();
  const { list } = useSelector((state) => state.orders);

  useEffect(() => {
    getList({ patient_id: 10 });
  }, [list]);

  return (
    <Container>
      <Button
        style={{ marginTop: 24 }}
        label="Cadastrar"
        onPress={() => {
          return navigation.navigate("Cadastrar pedido");
        }}
      />
      {list.length === 0 && (
        <Title>Não existe itens para serem mostrados.</Title>
      )}
      <CardList
        data={list}
        renderItem={({ item }) => (
          <>
            <CardOrder
              key={item._id}
              onPress={() =>
                navigation.push("Pedido detalhado", { id: item._id })
              }
              title={`Código do pedido: ${item._id}`}
              type={item.exam_type}
              status={item.status}
            />
          </>
        )}
      />
    </Container>
  );
}
