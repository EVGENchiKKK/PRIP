export const FormStageTree = ({ register, errors, password }) => {
    return (
        <div className="stageRegOne">
            <div className="formInpReg">
                <label htmlFor="password" className="labelInp">
                    <p className="nameInp">Придумайте пароль</p>
                    <input type="password" placeholder="Пароль..." id="password" className="inpRegForm"
                    {...register("password", {
                        required: 'Поле обязательно',
                        minLength: {
                            value: 6,
                            message: "Пароль должен сожержать минимум 6 символов"
                        }
                    })}
                    />
                    {errors.password && <p className="errorMes">{errors.password.message}</p>}
                </label>
            </div>
            <div className="formInpReg">
                <label htmlFor="confirmPassword" className="labelInp">
                    <p className="nameInp">Придумайте пароль</p>
                    <input type="password" placeholder="Повторите пароль..." id="confirmPassword" className="inpRegForm"
                    {...register("confirmPassword", {
                        required: 'Поле обязательно',
                        validate: value => value === password || "Пароли не совпадают"
                    })}
                    />
                    {errors.confirmPassword && <p className="errorMes">{errors.confirmPassword.message}</p>}
                </label>
            </div>
        </div>
    )
};