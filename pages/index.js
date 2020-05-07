import Header from '../components/Header';
import Head from '../components/head.js';
import Hero from '../components/Hero';
import Initiatives from '../components/Initiatives';
import Intro from '../components/Intro';
import style from './style/index.module.scss';
import Toggles from '../components/Toggles';
import { useState } from 'react';

const IndexPage = () => {
     const [toggle, setToggle] = useState([]);
     return (
          <div>
               <Head />
               <Header />
               <div className={style.root}>
                    <Toggles toggle={toggle} />
                    <Intro setActiveToggle={setToggle} />
                    <Hero setActiveToggle={setToggle} />
                    <Initiatives setActiveToggle={setToggle} />
               </div>
          </div>
     );
};

export default IndexPage;
