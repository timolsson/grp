import style from './Style/heroCard.module.scss';

const HeroCard = ({ title, stat }) => {
     return (
          <div className={style.heroCard}>
               <h6>{title}</h6>
               <h1>{stat}</h1>
          </div>
     );
};

export default HeroCard;
