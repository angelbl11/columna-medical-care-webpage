import React from "react";
import { GeneralButton, ButtonText } from "./ThemeButton.styles";
const ThemeButton = ({ btnText, onClick, ...props }) => {
  return (
    <GeneralButton onClick={onClick} {...props}>
      <ButtonText>{btnText}</ButtonText>
    </GeneralButton>
  );
};

export default ThemeButton;
