import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImage, CardContent, CardHeader, CardBody, CardFooter, CardView,
} from './styles';

export default function Card({
  image, header, content, footer, onPress,
}) {
  return (
    <CardView onPress={onPress}>
      {image && <CardImage source={image} />}
      <CardContent>
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody>{content}</CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </CardContent>
    </CardView>
  );
}

Card.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.object,
  header: PropTypes.element,
  content: PropTypes.element.isRequired,
  footer: PropTypes.element,
};
