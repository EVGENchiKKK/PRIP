import ZagImg from "./../../image/img/Иконка муз.дорожки(без ритма).png"
import "./HeroSection.css"

export const ZagVizPrem = () => {
  return (
    <section className="ZagViz prem">
      <h1>Новые возможности - новый ты!</h1>
      <h2>Neofy Premium</h2>
      <img src={ZagImg} alt="" className="ZagImg"/>
    </section>
  );
}