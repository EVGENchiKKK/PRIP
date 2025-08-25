export const ContactForm = () => {
    return (
        <form action="" className="contactForm">
            <div className="wrapperInpContact">
                <input type="text" placeholder="Имя" className="elInp" />
                <input type="email" placeholder="Почта" className="elInp" />
                <input type="tel" placeholder="Телефон" className="elInp" />
                <input type="text" placeholder="Тема вопроса" className="elInp" />
            </div>
            <textarea name="" id="" rows="5" cols="50" maxlength="500" placeholder="Сообщение..." className="textArContact"></textarea>
            <button type="submit" placeholder="Оставить заявку" className="btnContact">Отправить</button>
        </form>
    )
}