import React from "react";
import PropTypes from "prop-types";
import { TextMedium, TextRegular, ViewEvent } from "./styles";
import Card from "../Card";

export default function CardOrder({ uriImage, title, status, type, onPress }) {
  return (
    <Card
      onPress={onPress}
      image={uriImage ? { uri: uriImage } : null}
      header={<TextMedium>{title}</TextMedium>}
      content={
        <ViewEvent>
          <TextRegular>Tipo de exame: {type}</TextRegular>
          <TextRegular>Status: {status}</TextRegular>
        </ViewEvent>
      }
    />
  );
}

CardOrder.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  uriImage: PropTypes.string,
};
