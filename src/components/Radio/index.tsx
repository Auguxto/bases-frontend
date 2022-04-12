import { useState } from "react";

import { Container, OpenButton, Top, TopButtons } from "./styles";

import Checkbox from "../Checkbox";
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";

type RadioProps = {
  name: String;
};

const Radio = (props: RadioProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container isOpen={isOpen}>
      <Top>
        {props.name}
        <TopButtons>
          <OpenButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <ChevronDown color="#C4C4C4" size={25} />
            ) : (
              <ChevronUp color="#C4C4C4" size={25} />
            )}
          </OpenButton>
          <Checkbox
            checked={isSelected}
            onClick={() => setIsSelected(!isSelected)}
            borderWidth={2}
          />
        </TopButtons>
      </Top>
      <h1>Teste</h1>
    </Container>
  );
};

export default Radio;
