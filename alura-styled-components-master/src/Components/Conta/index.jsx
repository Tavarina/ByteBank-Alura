import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import {Icone, Box, Botao, Saldo, Detalhe, IconeTema} from '../../Components/UI';

const IconeMargin = styled(Icone)`
 margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          // style={{ marginTop: "2px" }}
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;

{/*estamos aplicando uma herança de estilo, estamos pegando aquela estilização de ícone e colocando um extra nesse IconeMargin.
Adendo: quando criamos um componente de estilo dentro de um arquivo de um componente React, nós não criamos componente estilizados 
dentro do componente React. A estilização ocorre sempre fora, pois, se o mesmo estiver dentro, pode acarretar em problemas com a performance.*/}