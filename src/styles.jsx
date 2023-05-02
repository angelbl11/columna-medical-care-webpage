import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const HeaderPage = styled.h1`
  font-weight: 700;
  color: #363636;
`;

export const SubTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => (props.isFooter ? "#B7B7BC" : "#858585")};
`;

export const CustomLink = styled(Link)`
  text-align: right;
  color: #1b4079;
  font-weight: 600;
  margin-top: 25px;
`;
