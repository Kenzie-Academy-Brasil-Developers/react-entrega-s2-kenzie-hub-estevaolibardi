import {
  ContainerHeader,
  WelcomeUser,
  Header,
  DivTech,
  ContTech,
  Container,
  StyledButton,
  ModalDiv,
} from "./styles";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import Card from "../../components/Card";
import Add from "../../assets/+.png";
import ModalAddTech from "../../components/ModalAddTech";
import ModalUpTech from "../../components/ModalUpTech";
import { useNavigate, Navigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const Dashboard = ({ auth, setAuth }) => {
  const [modalAddTech, setModalAddTech] = useState(false);
  const [modalUpTech, setModalUpTech] = useState(false);
  const [upTech, setUpTech] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("@kenzieHub:user")));
  const [techList, setTechList] = useState([]);
  // console.log(user);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
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
    usenavigate("/");
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
          <span>Olá, {user.name}</span>
          <p>{user.course_module}</p>
        </WelcomeUser>
        <hr />
      </ContainerHeader>
      <ContTech>
        <span>Tecnologias</span>
        <StyledButton onClick={createTech}>
          <img src={Add} alt="logo-kenzie" />
        </StyledButton>
      </ContTech>
      <DivTech>
        {modalAddTech && (
          <ModalAddTech user={user} setModalAddTech={setModalAddTech} />
        )}
        <ModalDiv>
          {modalUpTech && (
            <ModalUpTech
              user={user}
              setModalUpTech={setModalUpTech}
              upTech={upTech}
            />
          )}
        </ModalDiv>

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
      </DivTech>
    </Container>
  );
};

export default Dashboard;
