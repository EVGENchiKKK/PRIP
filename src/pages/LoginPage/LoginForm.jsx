import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import strelLevoBack from './../../image/icons/StrelLevoBack.png';
import Logo from './../../image/img/Иконка муз.дорожки.png';
import './LoginForm.css';

export const LoginForm = ({ onLogin, onLogout }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const goToHome = useNavigate();

    const handleHome = () => {
        goToHome("/home");
    }

    const onSubmit = (data) => {
        console.log("Данные для входа:", data);
        onLogin(data);
    }

    return (
        <main className="formPage">
            <div className="formContainer login">
                <div className="formWrapper left">
                    <div className="wrapperBackToHome login">
                        <Link to="/home" className="backToHome"><img src={strelLevoBack} alt="" />Вернуться на главную</Link>
                    </div>
                    <div className="formMain">
                        <div className="headerForm">
                            <h1>Вход</h1>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="bodyForm">
                                <div className='wrapperInpLog'>
                                    <label htmlFor="email">
                                        Ваш email:
                                    </label>
                                    <input type="text" placeholder="Email..." id="email" className="inpRegForm" 
                                    {...register("email", {
                                        required: "Поле обязательно",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Неверный формат"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Email должен содержать минимум 6 символов"
                                        }
                                    })}
                                    />
                                    {errors.email && <p className="errorMes">{errors.email.message}</p>}
                                </div>
                                <div className='wrapperInpLog'>
                                    <label htmlFor="password">
                                        Ваш пароль:
                                    </label>
                                    <input type="password" id="password" placeholder="Пароль..." className="inpRegForm"
                                    {...register("password", {
                                        required: "Поле обязательно",
                                        minLength: {
                                            value: 6,
                                            message: "Пароль должен сожержать минимум 6 символов"
                                        }
                                    })}
                                    />
                                    {errors.password && <p className='errorMes'>{errors.password.message}</p>}
                                </div>
                                <div className='remembermeWrapper'>
                                    <input type="checkbox" className='remembermeInp'/>
                                    <p className='remembermeText'>Запомнить меня</p>
                                </div>
                            </div>
                            <div className="footerForm login">
                                <button
                                type="submit"
                                className="btnFormSubmit login"
                                onClick={handleHome}
                                >
                                    Войти
                                </button>
                                <p className='textRouteReg'>Ты ещё не зарегистрирован? <Link to="/login"><i>Исправь это</i></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formWrapper right">
                    <div className="wrapperImgReg">
                        <div className="logoContainerPrem form">
                            <img src={Logo} alt="" />
                            <span>Neofy</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}