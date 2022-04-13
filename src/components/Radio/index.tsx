import { useContext, useState } from "react";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react";

import { Container, TopButton, Top, TopButtons } from "./styles";

import Checkbox from "../Checkbox";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

type RadioProps = {
  name: String;
};

const Radio = (props: RadioProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

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
