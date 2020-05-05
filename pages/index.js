import Header from '../components/Header';
import Head from '../components/head.js';
import Hero from '../components/Hero';
import Initiatives from '../components/Initiatives';
import Intro from '../components/Intro';
import style from './style/index.module.scss';

const IndexPage = () => {
     return (
          <div>
               <Head />
               <Header />
               <div className={style.root}>
                    <Intro />
                    <Initiatives />
               </div>
          </div>
     );
};

export default IndexPage;
