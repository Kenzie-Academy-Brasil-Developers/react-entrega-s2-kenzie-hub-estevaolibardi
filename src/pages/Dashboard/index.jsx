import {
  ContainerHeader,
  WelcomeUser,
  Header,
  DivTech,
  ContTech,
  Container,
  StyledButton,
  ModalDiv,
  TechImg,
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import Card from '../../components/Card';
import { MdOutlineAdd } from 'react-icons/md';
import ModalAddTech from '../../components/ModalAddTech';
import ModalUpTech from '../../components/ModalUpTech';
import { useNavigate, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { GiTechnoHeart } from 'react-icons/gi';

const Dashboard = ({ auth, setAuth }) => {
  const [modalAddTech, setModalAddTech] = useState(false);
  const [modalUpTech, setModalUpTech] = useState(false);
  const [upTech, setUpTech] = useState('');
  const [user] = useState(JSON.parse(localStorage.getItem('@kenzieHub:user')));
  const [techList, setTechList] = useState([]);
  // console.log(user);

  const formSchema = yup.object().shape({
    email: yup.string().required('Email Obrigatório').email('Email Inválido'),
    password: yup.string().required('Senha Obrigatória'),
  });

  useEffect(() => {
    if (auth) {
      api
        .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
        .then((response) => setTechList(response.data.techs))
        .catch((err) => console.log(err));
    }
  }, [techList]);

  const createTech = () => {
    setModalAddTech(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const usenavigate = useNavigate();
  // const onSubmit = (data) => console.log(data);

  const logout = () => {
    localStorage.clear();
    usenavigate('/');
    setAuth(false);
  };

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <ContainerHeader>
        <Header>
          <img src={logo} alt="logo-kenzie" />
          <button onClick={logout}>Sair</button>
        </Header>
        <hr />
        <WelcomeUser>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </WelcomeUser>
        <hr />
      </ContainerHeader>
      <ContTech>
        <span>Tecnologias</span>
        <StyledButton onClick={createTech}>
          <MdOutlineAdd size={20} />
        </StyledButton>
      </ContTech>
      <DivTech>
        <TechImg>
          <GiTechnoHeart size={50} />
        </TechImg>

        {modalAddTech && (
          <ModalAddTech user={user} setModalAddTech={setModalAddTech} />
        )}

        {modalUpTech && (
          <ModalUpTech
            user={user}
            setModalUpTech={setModalUpTech}
            upTech={upTech}
          />
        )}

        <ModalDiv>
          <div>
            {techList.map(({ title, status, id }) => (
              <Card
                setModalUpTech={setModalUpTech}
                setUpTech={setUpTech}
                title={title}
                status={status}
                id={id}
                key={id}
              />
            ))}
          </div>
        </ModalDiv>
      </DivTech>
    </Container>
  );
};

export default Dashboard;
