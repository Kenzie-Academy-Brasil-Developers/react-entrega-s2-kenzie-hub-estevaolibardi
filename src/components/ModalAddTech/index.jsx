import { ModalContainer, StyledButton } from "./styles";
import Button from "../Button";
import Input from "../Input";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ModalAddTech = ({ setModalAddTech }) => {
  const close = () => {
    return setModalAddTech(false);
  };

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada");
      })
      .catch((err) => toast.error("Tecnologia já cadastrada, ou campos vagos"));
  };

  return (
    <>
      <ModalContainer>
        <div>
          <div>
            <h4>Cadastrar tecnologia</h4>
            <StyledButton onClick={close}> x </StyledButton>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="title"
            placeholder="Nome do projeto"
            label="Nome"
          />
          <Input
            register={register}
            name="status"
            placeholder="Iniciante, intermediário ou avançado"
            label="Status"
          />
          <Button type="submit">Cadastrar tecnologia</Button>
        </form>
      </ModalContainer>
    </>
  );
};

export default ModalAddTech;
