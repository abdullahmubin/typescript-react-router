import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './base.scss'
import './assets/css/styles.scss';
import './assets/css/firsttemplate.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';

import Navibar  from './components/Navbar'

import Home  from './components/Home'
import FirstTemp from './components/TemplateList/FirstTemp'




import img from './logo.png';

import List from './components/List';
import AddToList from './components/AddToList'

const BlogPosts = {
  '1': {
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adip.'
  },
  '2': {
    title: 'Second Blog Post',
    description: 'Hello React Router v6'
  }
};

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
    name: 'mubin',
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


      <Router>
        <Navibar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>

        </Routes>
      </Router>

    </div>
  );
}



function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* render any matching child */}
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h3>Number of post:- {slug}</h3>
      
      <FirstTemp />
    </div>
  );
}




export default App;
