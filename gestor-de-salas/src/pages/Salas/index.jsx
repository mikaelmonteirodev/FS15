import styled from "styled-components";
import Button from "../../components/Button";

import { useState } from "react";

const Salas = () => {

  const [lateral, setLateral] = useState(false);

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="Nova sala" click={() => setLateral(true)} />
      </Header>

      Tabela

      <Overlay className={lateral && 'active'}>
        <Lateral>
          <Header>
            <h3>Adicionar</h3>
            <LateralClose onClick={() => setLateral(false)}>X</LateralClose>
          </Header>
        </Lateral>
      </Overlay>      
    </>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000070;
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition-duration: 300ms;
  &.active{
    opacity: 1;
    visibility: visible;
  }
`;

const Lateral = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #FFF;
  position: absolute;
  top: 0;
  right: -100%;
  padding: 16px;
  transition-duration: 300ms;
  transition-delay: 200ms;
  ${Overlay}.active &{
    right: 0;
  }
`;

const LateralClose = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: blueviolet;
  border-radius: 25px;
  color: white;
  cursor: pointer;
`;

export default Salas;
