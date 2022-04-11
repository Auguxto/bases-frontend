import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import {
  Button,
  ButtonText,
  Container,
  Form,
  Input,
  InputButton,
  InputGroup,
  InputInGroup,
  Inputs,
  Logo,
} from "./styles";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Container>
      <Form>
        <Logo />
        <Inputs>
          <Input type="text" placeholder="Usuario" />
          <InputGroup>
            <InputInGroup
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Senha"
            />
            <InputButton
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <EyeOff color="#ffc107" size={25} />
              ) : (
                <Eye color="#ffc107" size={25} />
              )}
            </InputButton>
          </InputGroup>
        </Inputs>
        <Button>
          <ButtonText>Fazer login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
