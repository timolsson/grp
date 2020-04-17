import style from "./Style/hero.module.scss"

import HeroCard from "./HeroCard";

 const Hero = () => {
    const cardData = [{
        title: "Sick title1",
        stat: 1234,
    },
    {
        title: "Sick title2",
        stat: 1234,
    },
    {
        title: "Sick title3",
        stat: 1234,
    },
    {
        title: "Sick title4",
        stat: 1234,
    },
    {
        title: "Sick title5",
        stat: 1234,
    },
    {
        title: "Sick title6",
        stat: 1234,
    },]
    return (
        <div className={style.hero}>
            {cardData.map((data, i) => {
                return <HeroCard key={i} title={data.title} stat={data.stat} />
            })}
        </div>
    )
}


export default Hero;