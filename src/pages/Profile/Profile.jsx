import { SideBarSection } from "../../navigation/headerAside/headerAside";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { FooterNoVizit } from "../../components/FooterNoVizit";
import { PremiumContainer } from "../../components/cards/PremiumContainer/PremiumContainer";
import { HistoryOp } from "./HistoryOp";
import { useState, useEffect } from "react";
import './Profile.css'

export const Profile = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const userDb = "users";

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/users.json');
                const data = await response.json();
                setUsers(data[userDb] || []);
                setLoading(false);
            } catch (error) {
                console.error("Ошибка:", error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [userDb]);

    if (loading) return <div>Загрузка...</div>;
    if (!users.length) return <div>Данные пользователя не найдены</div>;

    const ImUser = users[0];

    return (
        <div className="homePage">
            <div className="wrapperAside">
                <SideBarSection /> 
            </div>
            <div className="wrapperMain">
                <main className="MyMusicPage">
                    <SearchBar/>
                    <div className="mainMyMusic profile">
                        <div className="topSectionMyMusic profile">
                            <div className="profileContent">
                                <div className="imgProfile">
                                    <div className="iconImgProfile" style={{
                                        backgroundImage: `url(${ImUser.usericon})`
                                    }}></div>
                                </div>
                                <div className="contentProfile">
                                    <div className="wraperrUsername">
                                        <div className="usernameEmail">
                                            <h3 className="username">{ImUser.username}</h3>
                                            <p className="email">{ImUser.email}</p>
                                        </div>
                                    </div>
                                    <div className="infoUser">
                                        <div className="infoUserEl">
                                            <h4 className="country">Страна:</h4>
                                            <p>{ImUser.country}</p>
                                        </div>
                                        <div className="infoUserEl">
                                            <h4 className="birthday">Дата рождения:</h4>
                                            <p>{ImUser.birthday}</p>
                                        </div>
                                        <div className="infoUserEl">
                                            <h4 className="gender">Пол:</h4>
                                            <p>{ImUser.gender}</p>
                                        </div>
                                        <div className="infoUserEl">
                                            <h4 className="numberPhone">Номер телефона:</h4>
                                            <p>{ImUser.numberPhone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="editButton">
                                    <button className="btnEdit">Редактировать профиль</button>
                                </div>
                            </div>
                        </div>
                        <div className="bottomSectionMyMusic profile">
                            <section className="sectionMymusic">
                                <h2>План подписки</h2>
                                <PremiumContainer collectionPlan="premium" showTitle={false} profile={true}/>
                            </section>
                            <section className="sectionMymusic create">
                                <h2>История операций</h2>
                                <HistoryOp historyCollection="historyOperation"/>
                            </section>
                        </div>
                    </div>
                    
                    <FooterNoVizit />
                </main>
            </div>
            
        </div>
    )
}