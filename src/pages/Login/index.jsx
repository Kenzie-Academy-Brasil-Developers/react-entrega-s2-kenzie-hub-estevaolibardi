import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { LoginContainer, Form } from "../Login/styles";
import api from "../../services/api";
import { useNavigate, Navigate } from "react-router-dom";

const Login = ({ setAuth, auth }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email Inválido"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const usenavigate = useNavigate();

  // const handleLogin = (data) => console.log(data);

  const handleLogin = async (data) => {
    const response = await api
      .post("/sessions", data)
      .then((response) => {
        toast.success("Login feito com sucesso!");
        localStorage.setItem(
          "@kenzieHub:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );
        setAuth(true);
        usenavigate("/home");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
    // const { access } = response.data;
    // console.log(access);

    // console.log(data);
  };
  if (auth) {
    return <Navigate to="/home" />;
  }

  return (
    <LoginContainer>
      <img src={logo} alt="logo-kenzie" />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>
        <Input
          register={register}
          name="email"
          placeholder="Digite aqui seu email"
          label="Email"
          autoComplete="off"
        />
        <span>{errors.email?.message}</span>
        <Input
          register={register}
          name="password"
          placeholder="Digite aqui sua senha"
          label="Senha"
          type="password"
          autoComplete="off"
        />
        <span>{errors.password?.message}</span>
        <Button type="submit">Entrar</Button>
        <p>Ainda nao possui uma conta?</p>
        <Button register onClick={() => usenavigate("/sign-in")}>
          Cadastre-se
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
