import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import Select from '../Select';
import Button from '../Button';

import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>

      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup error="E-mail invalido">
        <Input error type="mail" placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>

        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
