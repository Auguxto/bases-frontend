import styled from "styled-components";

import logo from "../../assets/logo.png";

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  background: #ffc107;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 131px;
  height: 49px;

  margin-left: 30px;
`;

export const SearchInput = styled.input`
  width: 365px;
  height: 35px;

  background: #ffffff;

  border: none;

  margin-right: 10px;

  padding-left: 10px;

  font-family: "Ubuntu";
  font-size: 14px;

  color: #717171;

  ::placeholder {
    font-family: "Ubuntu";
    font-size: 14px;

    color: #717171;
  }
`;

export const Content = styled.div`
  display: flex;

  flex: 1;
`;

export const RadioList = styled.div`
  width: 75%;

  margin: 20px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AddRadio = styled.div`
  width: 20%;

  margin: 20px auto 20px auto;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Footer = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  height: 30px;

  background: #ffc107;
`;
