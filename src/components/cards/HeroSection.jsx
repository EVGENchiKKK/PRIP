import ZagImg from "./../../image/img/Иконка муз.дорожки(без ритма).png"
import "./HeroSection.css"

export const ZagViz = () => {
  return (
    <section className="ZagViz">
      <h1>Neofy</h1>
      <h2>Твоя жизнь — твоя музыка</h2>
      <img src={ZagImg} alt="" className="ZagImg"/>
    </section>
  );
}