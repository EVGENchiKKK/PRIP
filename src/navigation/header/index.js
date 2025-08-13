import { Link, useNavigate  } from 'react-router-dom';
import Logo from './../../image/img/Иконка муз.дорожки.png';
import './header.css'

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/home"><img className='logo' src={Logo} alt=""/></Link>
                <ul>
                    <li><Link to="/home">Главная</Link></li>
                    <li><Link to='/brows'>Просмотр</Link></li>
                    <li><Link to='/mymusic'>Моя музыка</Link></li>
                    <li><Link to='/opening'>Открой для себя</Link></li>
                    <li><Link to='/premium'>Премиум</Link></li>
                    <li><Link to='/'>Связаться с нами</Link></li>
                </ul>
                <button className='vhod' onClick={() => navigate('/login')}>Вход</button>
            </nav>
        </header>
    )
}