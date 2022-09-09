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

import Navibar from './components/Navbar'

import Home from './components/Home'
import FirstTemp from './components/TemplateList/FirstTemp'

let testConst = {
  idMain:1,
  necessaryColor: "Super hero squad",
  title: "Jonney Anderson",
  subtitle: "Web Designer",
  profilePic: "Super tower",
  master: true,
  reference: [
    {
      id:1,
      idMain: 1,
      name: "Jonney Smith",
      designation: "CEO Casinocarol",
      mail: "Dan Jukes",
      mobile: "+00 890 1232 8767",
      occupation: "",
    }
  ],
  hobbies: [
    {
      id:1,
      idMain: 1,
      name: "Writing",
      image: "fas fa-pencil-alt",
      defaultImg: "fas fa-pencil-alt"
    },
    {
      id:2,
      idMain: 1,
      name: "Cycling",
      image: "fas fa-bicycle",
      defaultImg: "fas fa-bicycle"
    },
    {
      id:3,
      idMain: 1,
      name: "Football",
      image: "fas fa-futbol",
      defaultImg: "fas fa-futbol"
    },
    {
      id:4,
      idMain: 1,
      name: "Movies",
      image: "fas fa-film",
      defaultImg: "fas fa-film"
    },
    {
      id:5,
      idMain: 1,
      name: "Travel",
      image: "fas fa-plane-departure",
      defaultImg: "fas fa-plane-departure"
    },
    {
      id:6,
      idMain: 1,
      name: "Games",
      image: "fas fa-gamepad",
      defaultImg: "fas fa-gamepad"
    }
  ],
  "education": [
    {
      id:1,
      idMain: 1,
      "timeline": "2013-2015",
      "degree": "Master Degree",
      "school": "Cambridg University"
    },
    {
      id:2,
      idMain: 1,
      "timeline": "2013-2015",
      "degree": "Master Degree",
      "school": "Cambridg University"
    },
    {
      id:3,
      idMain: 1,
      "timeline": "2013-2015",
      "degree": "Master Degree",
      "school": "Cambridg University"
    },
    {
      id:4,
      idMain: 1,
      "timeline": "2013-2015",
      "degree": "Master Degree",
      "school": "Cambridg University"
    }
  ],
  "profileTxt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan purus enim, a vestibulum est tristique sit amet. Suspendisse nibh nisl, imperdiet sit amet mi vitae, elementum elementum nibh. Vivamus vitae eros malesuada, convallis dolor malesuada, lobortis ex. Sed cursus augue risus, ac semper est consectetur vitae. Praesent consequat metus sit amet rhoncus luctus.",
  "workExperience": [
    {
      id:1,
      idMain: 1,
      "designation": "Junior Software Developer",
      "compancy": "Microsoft / United States",
      "timeline": "2008-2011",
      "taskList": [
        {
          id:1,
          idWorkExperience: 1,
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "description": "Molecule Man"
        },
        {
          id:2,
          idWorkExperience: 1,
          "title": "Sorem dolor sit amet, consectetur.",
          "description": "Molecule Man"
        }
      ]
    },
    {
      id:2,
      idMain: 1,
      "designation": "Junior Software Developer",
      "compancy": "Microsoft / United States",
      "timeline": "2008-2011",
      "taskList": [
        {
          id:3,
          idWorkExperience: 2,
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "description": "Molecule Man"
        },
        {
          id:4,
          idWorkExperience: 2,
          "title": "Sorem dolor sit amet, consectetur.",
          "description": "Molecule Man"
        }
      ]
    },
    {
      id:3,
      idMain: 1,
      "designation": "Junior Software Developer",
      "compancy": "Microsoft / United States",
      "timeline": "2008-2011",
      "taskList": [
        {
          id:5,
          idWorkExperience: 3,
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "description": "Molecule Man"
        },
        {
          id:6,
          idWorkExperience: 3,
          "title": "Sorem dolor sit amet, consectetur.",
          "description": "Molecule Man"
        }
      ]
    }
  ],
  "skills": [
    {
      id:1,
      idMain: 1,
      "name": "Photoshop",
      "percentage": "60"
    },
    {
      id:2,
      idMain: 1,
      "name": "PHP",
      "percentage": "60"
    },
    {
      id:3,
      idMain: 1,
      "name": "Web Design",
      "percentage": "60"
    },
    {
      id:4,
      idMain: 1,
      "name": "Web Development",
      "percentage": "60"
    }
  ],
  "contact": {
    "firtMobile": "+123 8767 5465",
    "SecondMobile": "+122 2345 3763",
    "email": "info@smarteyeapps.com",
    "website": "www.smarteyeapps.com",
    "Linkedin": "Dan Jukes",
    "git": "Dan Jukes",
    "facebook": "Dan Jukes",
    "address": "First Floor,Vincent Plaza, Toranto, Canada"
  }
}



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

      <FirstTemp CVList={testConst} />
    </div>
  );
}




export default App;
