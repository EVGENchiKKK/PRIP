import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormStageOne } from "./FormStageOne";
import { FormStageTwo } from "./FormStageTwo";
import { FormStageTree } from "./FormStageTree";
import { Link } from "react-router-dom";
import strelLevoBack from './../../image/icons/StrelLevoBack.png';
import strelPravoForm from './../../image/icons/strelPravoForm.png';
import Logo from './../../image/img/Иконка муз.дорожки.png'
import './LoginForm.css';

export const LoginForm = () => {
    const [pages, setPages] = useState(0);
    const { register, handleSubmit, formState: {errors}, trigger, watch } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            surname: "",
            name: "",
            username: "",
            nationality: "",
            numberPhone: "",
        }
    });

    const titleStage = ["Этап 1", "Этап 2", "Этап 3"];
    const password = watch("password");

    const pageDisplay = () => {
        if (pages === 0) {
            return <FormStageOne register={register} errors={errors}></FormStageOne>
        } else if (pages === 1) {
            return <FormStageTwo register={register} errors={errors}></FormStageTwo>
        } else {
            return <FormStageTree register={register} errors={errors} password={password}></FormStageTree>
        }
    };

    const validateCurrentPage = async () => {
        let arrValidate = [];

        if (pages === 0) {
            arrValidate = ["email", "surname", "username"]
        } else if (pages === 1) {
            arrValidate = ["nationality", "username", "numberPhone"]
        } else {
            arrValidate = ["password", "confirmPassword"]
        }

        const isValid = await trigger(arrValidate);
        return isValid;
    };


    const onSubmit = (data) => {
        alert("Регистрация завершена");
        console.log(data)
    };

    const handleNext = async () => {
        const isValid = await validateCurrentPage();
        if (isValid) {
            setPages((currPage) => currPage + 1);
        };
    };

    return (
        <main className="formPage">
            <div className="formContainer">
                <div className="formWrapper left">
                    <div className="wrapperBackToHome">
                        <Link to="/home" className="backToHome"><img src={strelLevoBack} alt="" />Вернуться на главную</Link>
                    </div>
                    <div className="formMain">
                        <div className="headerForm">
                            <h1>Регистрация</h1>
                            <p>{titleStage[pages]}</p>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="bodyForm">
                                {pageDisplay()}
                            </div>
                            <div className="footerForm">
                                <button
                                type={pages === titleStage.length - 1 ? "submit" : "button"}
                                onClick={pages === titleStage.length - 1 ? undefined : handleNext}
                                className="btnFormSubmit"
                                >
                                    <img src={strelPravoForm} alt=""/>
                                </button>
                                <div className="pageStage">
                                    {titleStage.map((title, index) => (
                                        <div key={index} 
                                        style={{opacity: pages === index ? "100%" : "50%"}} 
                                        className="stageIndicator"
                                        onClick={() => setPages(index)}>
                                        </div>
                                    ))}
                                </div>
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