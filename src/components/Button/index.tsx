import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonStyled type="button" {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
