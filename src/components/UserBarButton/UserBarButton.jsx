import React from "react";
import { ReactComponent as User } from "../../assets/user.svg";
import { AvatarBoxDecoration, AvatarButton } from "./UserBarButton.styles";
const UserBarButton = ({ isFilled }) => {
  return (
    <AvatarButton isFilled={isFilled}>
      {isFilled && <AvatarBoxDecoration />}
      <User style={{ height: 25, width: 25, marginBottom: 5 }} />
    </AvatarButton>
  );
};

export default UserBarButton;
