import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Label, AreaInput, TextInput, Container,
} from './styles';

export default function Input(props) {
  const {
    label, icon, setRef, ...rest
  } = props;

  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <Label>{label}</Label>
      <AreaInput isActive={isActive}>
        <TextInput
          {...rest}
          ref={ref => setRef && setRef(ref)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        {icon && icon}
      </AreaInput>
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  rest: PropTypes.any,
  icon: PropTypes.element,
  setRef: PropTypes.func,
  input: PropTypes.object,
};
