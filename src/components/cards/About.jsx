import AboutCardImg from "./../../image/img/AboutCardImg.png"
import './About.css'

export const AboutCard = () => {
    return (
        <section className="AboutCard">
            <div className="Text">
                <h2>Кто мы</h2>
                <hr />
                <p>
                    Neofy — это не просто музыкальный 
                    сервис, это целая вселенная звуков, 
                    созданная для тех, кто ценит качество, 
                    разнообразие и индивидуальность. 
                    Мы стремимся сделать ваше музыкальное 
                    путешествие максимально комфортным и 
                    вдохновляющим, предлагая уникальные 
                    возможности для открытия новых треков, 
                    создания плейлистов и погружения 
                    в любимые жанры.
                </p>
            </div>
            <img src={AboutCardImg} alt="" />
        </section>
    )
}