import React from 'react';
import './comentario.css';
import { formatRelative } from 'date-fns'
import {ptBR} from 'date-fns/locale'
//JSX
const Comentario = (props) => {
    

    return(
    <div className="Comentario">
        {/* <div >{nome.map(nome=>(<h1 className="nome"  key={nome.id}>{nome.nome}</h1>))}</div>*/}
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
    );
}

export default Comentario;