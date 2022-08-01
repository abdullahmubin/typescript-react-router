import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './base.scss'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

import img from './logo.png';

import List from './components/List';
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name:'mubin',
    age: 6,
    url: 'sdf',
    note: 'this is note'
  }])
  const [test, setTest] = useState([]);

  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>

      <List people={people}/>

      <AddToList people={people} setPeople={setPeople}/>
      <img src={img} />
    </div>
  );
}

export default App;
