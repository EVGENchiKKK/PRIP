import { useState, useEffect } from "react";
import Logo from './../../../image/img/Иконка муз.дорожки.png';
import './PremiumContainer.css';

export const PremiumContainer = ({collectionPlan}) => {
    const [preims, setPreims] = useState([]);
    const [loading, setLoading] = useState(true);

    const PreimCard = ({ preim }) => {
        const preimCardStyle = {
            backgroundColor: `${preim.themColor}`,
        };
        const namePreimColor = {
            color: `${preim.themColor}`
        }

        return (
            <section className='preimCard'>
                <div className="topTextSection" style={preimCardStyle}>
                    <p>Бесплатно на 1 месяц</p>
                </div>
                <div className="logoContainerPrem">
                    <img src={Logo} alt="" />
                    <span>Neofy premium</span>
                </div>
                <span className="namePlan" style={namePreimColor}>{preim.name}</span>
                <div className="textPrice">
                    <p>Бесплатно в первый месяц</p>
                    <span>{preim.price} руб / в месяц</span>
                </div>
                <hr />
                {preim.preim.map((item, index) => (
                    <ul className="spisOp">
                        <li key={index}>
                            <div>{item.colvoAkk}</div>
                            <div>{item.sale}</div>
                            <div>{item.vozmoxhOtm}</div>
                        </li> 
                    </ul>
                ))}
                <hr />
                <button className="btnPreim" style={preimCardStyle}>
                    Попробуйте бесплатно в течение 1 месяца
                </button>
                <span className="smallFont">
                    Бесплатно в течение 1 месяца, затем {preim.price} руб в месяц.
                    Предложение доступно только если вы не пробовали Премиум.
                </span>
            </section> 
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('/premiumPlan.json');
              const data = await response.json();
              setPreims(data[collectionPlan] || []);
            } catch (error) {
              console.error("Ошибка загрузки:", error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }, [collectionPlan]);

    if (loading) return <div>Загрузка...</div>;
    if (!preims.length) return <div>Подборка не найдена.</div>;

    return (
        <section className="premiumContainer">
            <h2>Планы Премиум</h2>
            <div className="premiumCardContainer">
                {preims.map(preim =>(
                    <PreimCard key={preim.id} preim={preim} />
                ))}
            </div>
        </section>
    )
}