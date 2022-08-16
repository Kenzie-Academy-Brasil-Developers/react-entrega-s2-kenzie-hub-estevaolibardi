import { toast } from 'react-toastify';
import {
  Container,
  StyledButton,
  ContStyledButton,
  Cont,
  Wrap,
} from './styles';
import api from '../../services/api';
import { CgClose } from 'react-icons/cg';

const Card = ({ status, title, id, setUpTech, setModalUpTech }) => {
  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'));

  const delTech = (buttonId) => {
    api
      .delete(`/users/techs/${buttonId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success('Tecnologia excluída').catch((err) => console.log(err));
      });
  };

  const showModal = (event) => {
    setUpTech(event.target.id);
    setModalUpTech(true);
  };

  return (
    <Cont>
      <Container id={id} key={id} onClick={showModal}>
        <Wrap id={id} key={id} onClick={showModal}>
          <h4>{title}</h4>
          <p>{status}</p>
        </Wrap>
      </Container>
      <ContStyledButton>
        <StyledButton>
          <CgClose onClick={(event) => delTech(event.target.id)} id={id} />
        </StyledButton>
      </ContStyledButton>
    </Cont>
  );
};

export default Card;
