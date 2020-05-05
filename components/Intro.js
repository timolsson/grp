import style from './Style/intro.module.scss';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Aos from 'aos';
import Toggle from './Toggle';

const Intro = () => {
     const button = useRef();
     const intro = useRef();

     const [toggle, setToggle] = useState(true);

     // useEffect(() => {
     // button.current.addEventListener('click', () => {
     // setToggle(!toggle);
     //      });
     // }, [])
     useEffect(() => {
          Aos.init({ duration: 500 });
     }, []);

     // useEffect(() => {
     // button.current.addEventListener('click', () => {
     // setToggle(!toggle);
     //      });
     // }, []);
     const handleClick = () => {
          setToggle(!toggle);
     };

     return (
          <div>
               <Toggle click={handleClick} toggleTitle="Intro" />

               {toggle ? (
                    <div
                         ref={intro}
                         className={style.intro}
                         data-aos="slide-up"
                    >
                         <h1>
                              Mapping of Global and Regional Funds, Networks and
                              Programmes
                         </h1>

                         <p>
                              GRP has undertaken a{' '}
                              <a href="http://www.globalresiliencepartnership.org/resources/mapping-of-global-and-regional-funds-networks-and-programmes/">
                                   Resilience Mapping
                              </a>{' '}
                              of global and regional initiatives from funds,
                              networks, alliances, partnerships, organisations
                              to programmes and projects that either have a
                              focus on resilience or cover some aspect of
                              resilience. The initiatives mapped are summarised
                              with a short description. Their objectives are
                              grouped under the following headings:
                         </p>

                         <ul>
                              <li>
                                   Fund and financing facilities
                                   <br />
                              </li>
                              <li>
                                   Networks, alliances and partnerships
                                   <br />
                              </li>
                              <li>
                                   Organisations
                                   <br />
                              </li>
                              <li>Programmes and projects</li>
                         </ul>
                         <p>
                              GRP welcomes the details of further initiatives
                              and corrections to any of these summaries in this
                              document. The should be sent to
                              info@globalresiliencepartnership.org.
                              <br />
                              <br />
                              <a href="http://www.globalresiliencepartnership.org/wp-content/uploads/2018/05/GRP-Resilience-Mapping-6-March-2020.pdf">
                                   GRP Resilience Mapping (updated 6 March 2020)
                              </a>
                         </p>
                    </div>
               ) : (
                    ''
               )}
          </div>
     );
};
export default Intro;
