import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { UserContext } from "../../context/UserContext";

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
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { handleLogin } = useContext(UserContext);

  return (
    <Container>
      <Form>
        <Logo />
        <Inputs>
          <Input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputGroup>
            <InputInGroup
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <Button
          onClick={() => {
            handleLogin(username, password);
          }}
        >
          <ButtonText>Fazer login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
