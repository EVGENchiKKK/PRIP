import './ContactUs.css';

export const GeoOffice = () => {
    return (
        <div className="geoOfficeCard">
            <div className="textContentGeo">
                <div className="adressTimeContent">
                    <h3 className="zagAdressTime">Адрес:</h3>
                    <div className="wrapperAdressTimeData">
                        <p className="dataEl">г.Новоалтайск</p>
                        <p className="dataEl">ул.Союза республикнцев д.33</p>
                        <p className="dataEl">Индекс: 694863</p>
                    </div>
                </div>
                <div className="adressTimeContent">
                    <h3 className="zagAdressTime">Время работы:</h3>
                    <div className="wrapperAdressTimeData">
                        <p className="dataEl">пн-пт: 10:00-19:00</p>
                        <p className="dataEl">сб-вс: 10:00-14:00</p>
                    </div>
                </div>
            </div>
            <div className="imageOffice">
                <div className="imgOffice"></div>
            </div>
        </div>
    )
}