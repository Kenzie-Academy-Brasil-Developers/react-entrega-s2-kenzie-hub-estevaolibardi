import { ModalContainer, StyledButton, Header } from './styles';
import Button from '../Button';
import Input from '../Input';
import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';

const ModalAddTech = ({ setModalAddTech }) => {
  const close = () => {
    return setModalAddTech(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem('@kenzieHub:token')) || ''
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    api
      .post('/users/techs', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success('Tecnologia cadastrada');
        setModalAddTech(false);
      })
      .catch((err) => toast.error('Tecnologia já cadastrada, ou campos vagos'));
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <div>
            <h4>Cadastrar Tech</h4>
            <StyledButton onClick={close}>
              <AiOutlineClose size={20} />
            </StyledButton>
          </div>
        </Header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="title"
            placeholder="Ex: React"
            label="Nome"
          />
          <Input
            register={register}
            name="status"
            placeholder="Ex: Iniciante"
            label="Status"
          />
          <Button type="submit">Cadastrar tecnologia</Button>
        </form>
      </ModalContainer>
    </>
  );
};

export default ModalAddTech;
