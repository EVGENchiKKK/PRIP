import react, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormStageOne } from "./FormStageOne";
import { FormStageTwo } from "./FormStageTwo";
import { FormStageTree } from "./FromStageTree";
import { Link } from "react-router-dom";
import strelLevoBack from './../../image/icons/StrelLevoBack.png';
import strelPravoForm from './../../image/icons/strelPravoForm.png';

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

    const pageDisplay = () => {
        if (pages === 0) {
            return <FormStageOne register={register} errors={errors}></FormStageOne>
        } else if (pages === 1) {
            return <FormStageTwo register={register} errors={errors}></FormStageTwo>
        } else {
            // Здесь позже появится атрибут password
            return <FormStageTree register={register} errors={errors}></FormStageTree>
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
                <div className="formWrapper">
                    <Link to="/home"><img src={strelLevoBack} alt="" />Вернуться на главную</Link>
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
                                onClick={pages === titleStage.length - 1 ? undefined : handleNext}>
                                    <img src={strelPravoForm} />
                                </button>
                                <div className="pageStage">
                                    <button 
                                    className="btnStagePage"
                                    style={{opacity: pages === 0 ? "100%" : "50%"}}
                                    >
                                    </button>
                                    <button 
                                    className="btnStagePage"
                                    style={{opacity: pages === 1 ? "100%" : "50%"}}
                                    >
                                    </button>
                                    <button 
                                    className="btnStagePage"
                                    style={{opacity: pages === 2 ? "100%" : "50%"}}
                                    >
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}