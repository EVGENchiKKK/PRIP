import './LoginForm.css';

export const FormStageOne = ({ register, errors }) => {
    return (
        <div className="stageRegOne">
            <div className="formInpReg">
                <label htmlFor="email" className="labelInp">
                    <p className="nameInp">Введите email</p>
                    <input type="text" placeholder="Почта..." id="email" className="inpRegForm"
                    {...register("email", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверный формат"
                        },
                        minLength: {
                            value: 6,
                            message: "Email должен содержать минимум 6 символов"
                        }
                        })}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
            </div>
            <div className="formInpReg">
                <label htmlFor="surname" className="labelInp">
                    <p className="nameInp">Введите фамилию</p>
                    <input type="text" placeholder="Фамилия..." id="surname" className="inpRegForm"
                    {...register("surname", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /^[A-Za-zА-Яа-яЁё\s\-]+$/,
                            message: "Фамилия может содержать только буквы, пробелы и дефисы"
                        },
                        minLength: {
                            value: 2,
                            message: "Фамилия должна содержать минимум 2 символа"
                        },
                        maxLength: {
                            value: 30,
                            message: "Фамилия не должна превышать 30 символов"
                        }
                    })}
                    />
                    {errors.surname && <p>{errors.surname.message}</p>}
                </label>
            </div>
            <div className="formInpReg">
                <label htmlFor="name" className="labelInp">
                    <p className="nameInp">Введите имя</p>
                    <input type="text" placeholder="Имя..." id="name" className="inpRegForm"
                    {...register("name", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /^[A-Za-zА-Яа-яЁё\s\-]+$/,
                            message: "Имя может содержать только буквы, пробелы и дефисы"
                        },
                        minLength: {
                            value: 2,
                            message: "Имя должно содержать минимум 2 символа"
                        },
                        maxLength: {
                            value: 30,
                            message: "Имя не должно превышать 30 символов"
                        }
                    })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
            </div>
        </div>
    )
};