import Logo from './../../image/img/Иконка муз.дорожки.png';
import './header.css'

export const Header = ()=>{
    return (
        <header className='header'>
            <nav className='nav'>
                <a><img className='logo' src={Logo} alt=""/></a>
                <ul>
                    <li><a href='#'>Главная</a></li>
                    <li><a href='#'>Просмотр</a></li>
                    <li><a href='#'>Моя музыка</a></li>
                    <li><a href='#'>Открой для себя</a></li>
                    <li><a href='#'>Премиум</a></li>
                    <li><a href='#'>Связаться с нами</a></li>
                </ul>
                <button className='vhod'>Вход</button>
            </nav>
        </header>
    )
}