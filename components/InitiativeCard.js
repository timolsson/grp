import style from "./Style/initiativeCard.module.scss";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const InitiativeCard = ({ data }) => {
  const policy = useRef();
  const knowledge = useRef();
  const money = useRef();
  const idea = useRef();
  const [flipped, setFlipped] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 70 },
  });

  const [bgColor, setBgColor] = useState();

  // const applyFlip = () => {
  //      setFlipped(!flipped);
  // };

  let url =
    data.url.indexOf("www.") > -1 ? data.url.split("www.")[1] : data.url;
  url = url.indexOf("://") > -1 ? url.split("://")[1] : url;
  url = url.indexOf("/") > -1 ? url.split("/")[0] : url;

  url = url.length < 1 ? "" : url;

  useEffect(() => {
    data.policy_planning !== "1"
      ? (policy.current.style.opacity = "0.3")
      : (policy.current.style.opacity = "1");
    data.knowledge_learning !== "1"
      ? (knowledge.current.style.opacity = "0.3")
      : (knowledge.current.style.opacity = "1");
    data.finance_budgets !== "1"
      ? (money.current.style.opacity = "0.3")
      : (money.current.style.opacity = "1");
    data.practice_innovation !== "1"
      ? (idea.current.style.opacity = "0.3")
      : (idea.current.style.opacity = "1");
  }, [data]);

  useEffect(() => {
    switch (data.main_geographic_focus) {
      case "Global":
        setBgColor("colorRed");
        break;
      case "Regional - Africa":
        setBgColor("colorGreen");
        break;
      case "Regional - Asia":
        setBgColor("colorOrange");
        break;
      case "Regional - LA":
        setBgColor("colorTeal");
        break;
      case "Regional - S. Asia":
        setBgColor("colorPurple");
        break;
      case "Regional - SE Asia":
        setBgColor("colorYellow");
        break;
    }
  }, []);

  return (
    <div
      className={style.initiativeCard}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <animated.div
        className={style.back}
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        <h1 className={style.title}>{data.name}</h1>
        <a target="_blank" href={data.url}>{url}</a>
        <p>{data.summary}</p>
        <p>&#8594;</p>
      </animated.div>

      <animated.div
        className={style.front}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <h1 className={style.title}>{data.name}</h1>
        <a target="_blank" href={data.url}>
          {url}
        </a>
        {/* <p>{data.summary}</p> */}

        <p className={style.readMore}>Read more &#8594;</p>

        <div className={style.gradient} />
        <div className={style.bottomCard}>
          <div className={style.icons}>
            <img ref={policy} src="/policy.png"></img>
            <img ref={knowledge} src="/knowledge.png"></img>
            <img ref={money} src="/money.png"></img>
            <img ref={idea} src="/idea.png"></img>
          </div>
          <div className={style.categoryColor}>
            <div className={style[bgColor]}></div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default InitiativeCard;
