import './LoginForm.css';

export const FormStageTwo = ({ register, errors }) => {
    const countries = [
        "Россия",
        "США",
        "Китай",
        "Казахстан",
        "Беларусь",
        "Индия",
        "Испания"
    ];

    return (
        <div className="stageRegOne">
            <div className="formInpReg">
                <label htmlFor="nationality" className="labelInp">
                    <p className="nameInp">Выберите регион</p>
                    <select name="" id="nationality" className="inpRegForm select"
                    {...register("nationality", {
                        required: "Пожалуйста, выберите страну из списка"
                    })}
                    >
                        <option value="">...</option>
                        {countries.map((country, index) => (
                            <option value={country} key={index}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.nationality && <p className="errorMes">{errors.nationality.message}</p>}
                </label>
            </div>
            <div className="formInpReg">
                <label htmlFor="username" className="labelInp">
                    <p className="nameInp">Введите никнейм</p>
                    <input type="text" placeholder="Никнейм..." id="username" className="inpRegForm"
                    {...register("username", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /^[a-zA-Z0-9_]+$/,
                            message: "Допустимы только латинские буквы и цифры"
                        },
                        minLength: {
                            value: 5,
                            message: "Никнейм должен сожержать минимум 5 символов"
                        },
                        maxLength: {
                            value: 30,
                            message: "Никнейм не должен содержать больше 30 символов"
                        }
                    })}
                    />
                    {errors.username && <p className="errorMes">{errors.username.message}</p>}
                </label>
            </div>
            <div className="formInpReg">
                <label htmlFor="numberPhone" className="labelInp">
                    <p className="nameInp">Введите имя</p>
                    <input type="text" placeholder="Номер телефона..." id="numberPhone" className="inpRegForm"
                    {...register("numberPhone", {
                        required: 'Поле обязательно',
                        pattern: {
                            value: /^[0-9+\-\s()]+$/,
                            message: "Только цифры и символы: + - ( ) пробел"
                        },
                        minLength: {
                            value: 5,
                            message: "Номер должен содержать минимум 5 цифр"
                        },
                        maxLength: {
                            value: 20,
                            message: "Номер не должен превышать 20 символов"
                        }
                    })}
                    />
                    {errors.numberPhone && <p className="errorMes">{errors.numberPhone.message}</p>}
                </label>
            </div>
        </div>
    )
};