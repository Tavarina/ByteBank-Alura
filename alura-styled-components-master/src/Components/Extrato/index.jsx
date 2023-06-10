import React from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {

    return(
        <Box>
{extratoLista.updates.map(({ id, type, from, value, date}) =>{
   return (
    // <div key={id}>
    // <div>{type}</div>
    // <div>{from}</div>
    // </div>
    <Items key={id} type={type} from={from} value={value} date={date} />
   );             
})}
<Botao>Ver Mais</Botao>
</Box>
);
};

export default Extrato;