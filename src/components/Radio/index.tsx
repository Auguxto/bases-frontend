import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Pencil,
} from "lucide-react";

import { Container, TopButton, Top, TopButtons } from "./styles";

import Checkbox from "../Checkbox";

type RadioProps = {
  name: String;
};

const Radio = (props: RadioProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container isOpen={isOpen}>
      <Top onClick={() => setIsOpen(!isOpen)}>
        {props.name}
        <TopButtons>
          <TopButton>
            <Pencil color="#C4C4C4" size={20} />
          </TopButton>
          <TopButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <ChevronDown color="#C4C4C4" size={25} />
            ) : (
              <ChevronUp color="#C4C4C4" size={25} />
            )}
          </TopButton>
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
