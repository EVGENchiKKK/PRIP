import { Link, useNavigate  } from 'react-router-dom';
import Logo from './../../image/img/Иконка муз.дорожки.png';
import './header.css'

export const Header = ()=>{
    const navigate = useNavigate();
    return (
        <header className='header'>
            <nav className='nav'>
                <a><img className='logo' src={Logo} alt=""/></a>
                <ul>
                    <li><Link to="/home">Главная</Link></li>
                    <li><Link to='/brows'>Просмотр</Link></li>
                    <li><Link to='/'>Моя музыка</Link></li>
                    <li><Link to='/'>Открой для себя</Link></li>
                    <li><Link to='/'>Премиум</Link></li>
                    <li><Link to='/'>Связаться с нами</Link></li>
                </ul>
                <button className='vhod' onClick={() => navigate('/login')}>Вход</button>
            </nav>
        </header>
    )
}