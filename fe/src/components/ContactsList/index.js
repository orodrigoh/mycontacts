import {
  Card, Container, Header, ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong> 3 Contatos </strong>
        <a href="/">Novo contato</a>
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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>

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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
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
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
