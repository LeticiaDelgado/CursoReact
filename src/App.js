import logo from './logo.svg';
import './App.css';
import Comentario from './components/comentario';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    comentarios: [
      {
        id: 1,
        nome:  'Letícia',
        email: 'leticiamd3113@gmail.com',
        data: new Date( 2022, 3, 19,17,30,0),
      },
      {
        id: 2,
        nome:  'Ryan',
        email: 'ryancesarts@gmail.com',
        data: new Date( 2022, 3, 19,17,30,0),
      }
    ],
    novoComentario: {
      nome:   '',
      email: '',
      comentario: '',
    }
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios
    lista = lista.filter( c => c !== comentario)

    this.setState({comentarios: lista})
  }

  digitacao = event => {
    const{ name, value} = event.target
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value}})
}

  adicionarComentario = (event) => {
    console.log("Adicionando")
    event.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()} 
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', comentario:''}
    }) 
      
    }

  render(){
    return (
      <div className="App">
       <h1>Meu projeto</h1>

       {this.state.comentarios.map((comentario, indice )=> ( 
       <Comentario 
       key={indice} 
       nome={comentario.nome} 
       email={comentario.email} 
       data={comentario.data} 
       onRemove={this.removerComentario.bind(this, comentario)}/>
))}

        <form method='post' onSubmit={this.adicionarComentario}>
          
          <h2>Adicionar comentario</h2>
          
          <div>
            <input onChange={this.digitacao} value={this.state.novoComentario.nome} type={'text'} name='nome' placeholder='Digite o seu nome'></input>
          </div>
          <div>
            <input onChange={this.digitacao}  value={this.state.novoComentario.email} type={'email'} name='email' placeholder='Digite o seu email'></input>
          </div>
          <div>
            <textarea onChange={this.digitacao} value={this.state.novoComentario.comentario} name='comentario' rows={4}></textarea>
          </div>
          <button type={'submit'} >Adicionar comentario</button>
          </form>
      </div>
    );
  }
  
}

export default App;
