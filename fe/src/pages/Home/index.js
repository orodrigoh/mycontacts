import { Link } from 'react-router-dom';
import {
  Card, Container, Header, ListContainer,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong> 3 Contatos </strong>
        <Link to="/">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Rodrigo Henrique</strong>
            <small>instagram</small>
          </div>
          <span>teste@teste.com</span>
          <span>(12) 1111-1111</span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
