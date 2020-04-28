import React from 'react';
import PropTypes from 'prop-types';
import { AreaButton, Label } from './styles';

export default function Button({ label, onPress, ...rest }) {
  return (
    <AreaButton {...rest} onPress={onPress}>
      <Label>{label}</Label>
    </AreaButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
