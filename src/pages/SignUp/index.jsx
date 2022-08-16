import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { ContainerHeader } from '../SignUp/styles';
import { Container, StyledForm, Wrapper } from './styles';
import { useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const SignUp = ({ auth, setAuth }) => {
  const usenavigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email('email inválido').required('Email obrigatório'),
    password: yup
      .string()
      .required('Digite uma senha')
      .min(6, 'Mínimo de 6 dígitos'),
    name: yup.string().required('Nome obrigatório'),
    bio: yup.string().required('Digite uma frase'),
    contact: yup.string().required('Digite um contato'),
    course_module: yup.string().required('Digite um módulo'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Confirmação inválida')
      .required('Confirme a senha'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post('/users', data)
      .then((response) => {
        console.log(response);
        toast.success('Cadastro realizado com sucesso, faça seu login!');
        usenavigate('/');
      })
      .catch((err) => {
        toast.error('Email já está em uso');
        console.log(err);
      });
  };

  if (auth) {
    return <Navigate to="/home" />;
  }

  return (
    <Container>
      <Wrapper>
        <ContainerHeader>
          <img src={logo} alt="logo-kenzie" />
          <button onClick={() => usenavigate('/')}>Voltar</button>
        </ContainerHeader>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <Input
            register={register}
            name="name"
            placeholder="Digite aqui seu nome"
            label="Nome"
            error={errors.name?.message}
            autoComplete="off"
          />
          <Input
            register={register}
            name="email"
            placeholder="Digite aqui seu email"
            label="Email"
            error={errors.email?.message}
            autoComplete="off"
          />

          <Input
            register={register}
            name="bio"
            placeholder="Frase favorita"
            label="Bio"
            error={errors.bio?.message}
            autoComplete="off"
          />

          <Input
            register={register}
            name="contact"
            placeholder="Digite algum contato"
            label="Contato"
            error={errors.contact?.message}
            autoComplete="off"
          />

          <Select
            register={register}
            name="course_module"
            label="Modulo"
            error={errors.module?.message}
            option1="Primeiro módulo (Introdução ao Frontend)"
            option2="Segundo módulo (Frontend Avançado)"
            option3="Terceiro módulo (Introdução ao Backend)"
            option4="Quarto módulo (Backend Avançado)"
            placeholder="Primeiro módulo"
            autoComplete="off"
          ></Select>

          <Input
            register={register}
            name="password"
            placeholder="Digite aqui sua senha"
            label="Senha"
            error={errors.password?.message}
            type="password"
            autoComplete="off"
          />

          <Input
            register={register}
            name="confirm_password"
            placeholder="Confirme sua senha"
            label="Confirmar senha"
            error={errors.confirm_password?.message}
            type="password"
            autoComplete="off"
          />

          <Button type="submit">Cadastrar</Button>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
