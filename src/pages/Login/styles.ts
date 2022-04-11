import styled from "styled-components";

import logo from "../../assets/logo.png";

export const Container = styled.div`
  display: flex;

  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 680px;
  height: 650px;

  margin-top: 90px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 300px;
  height: 113px;

  margin-top: 40px;
`;

export const Inputs = styled.div`
  display: flex;

  flex-direction: column;

  gap: 40px;

  margin-top: 100px;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  border: none;

  padding-left: 20px;

  font-family: "Ubuntu";
  font-size: 18px;

  color: #c8c8c8;

  ::placeholder {
    font-family: "Ubuntu";
    font-size: 18px;

    color: #cac7c7;
  }
`;

export const InputInGroup = styled.input`
  flex: 1;
  height: 50px;

  background: #ffffff;

  border: none;

  padding-left: 20px;

  font-family: "Ubuntu";
  font-size: 18px;

  color: #c8c8c8;

  ::placeholder {
    font-family: "Ubuntu";
    font-size: 18px;

    color: #cac7c7;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  justify-content: space-between;

  width: 500px;
  height: 50px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  border: none;
`;

export const InputButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  background: #ffffff;

  border: none;

  margin-right: 10px;

  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 500px;
  height: 50px;

  margin-top: 40px;

  background: #ffc107;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  border: none;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-family: "Ubuntu";
  font-size: 18px;

  color: #ffffff;
`;
