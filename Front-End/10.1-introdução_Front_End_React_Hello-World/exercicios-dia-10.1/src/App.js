import './App.css';
import React from 'react';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar Café', 'Escovar os dentes', 'ir Trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    );
  }
}

export default App;
