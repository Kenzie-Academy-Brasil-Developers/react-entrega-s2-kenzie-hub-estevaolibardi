import { ContButton, ModalContainer, StyledButton, Header } from './styles';
import Button from '../Button';
import Input from '../Input';
import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';

const ModalUpTech = ({ setModalUpTech, upTech }) => {
  const close = () => {
    return setModalUpTech(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem('@kenzieHub:token')) || ''
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    api
      .put(`/users/techs/${upTech}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success('Status da tech atualizada!');
        setModalUpTech(false);
      })
      .catch((err) => toast.error('Ops! Algo deu errado.'));
  };

  return (
    <>
      <ModalContainer>
        <Header>
          <div>
            <h4>Atualizar Tech</h4>
            <StyledButton onClick={close}>
              <AiOutlineClose size={20} />
            </StyledButton>
          </div>
        </Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="status"
            placeholder="Atualize seu progresso"
            label="Status"
          />

          <Button type="submit">Salvar Alterações</Button>
        </form>
      </ModalContainer>
    </>
  );
};

export default ModalUpTech;
