import { useState } from "react";

import { Container, OpenButton, Top } from "./styles";

type RadioProps = {
  name: String;
};

const Radio = (props: RadioProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isOpen={isOpen}>
      <Top>
        {props.name}
        <OpenButton onClick={() => setIsOpen(!isOpen)} />
      </Top>
      <h1>Teste</h1>
    </Container>
  );
};

export default Radio;
