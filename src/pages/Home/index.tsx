import Radio from "../../components/Radio";

import {
  AddRadio,
  Container,
  Content,
  Footer,
  Header,
  Logo,
  RadioList,
  SearchInput,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <SearchInput type="text" placeholder="Pesquisar..." />
      </Header>
      <Content>
        <RadioList>
          <Radio name="NSSilo" />
          <Radio name="NSBau" />
        </RadioList>
        <AddRadio />
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
