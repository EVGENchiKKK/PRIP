import { Header } from "../../navigation/header";
import { Footer } from "../../components/Footer";
import { ContactForm } from "./ContactForm";
import { GeoOffice } from "./GeoOffice";
import './../../App.css';
import './ContactUs.css';

export const ContactUs = () => {
    return (
        <div className="vizitPage contactUs">
            <Header/>
            <div className="mainContact">
                <section className="contactSection">
                    <h1>Оставить обращение в тех. поддержку</h1>
                    <ContactForm/>
                </section>
                <section className="contactSection">
                    <h1>Расположение нашего офиса</h1>
                    <GeoOffice/>
                </section>
            </div>
            <Footer />
        </div>
    )
}