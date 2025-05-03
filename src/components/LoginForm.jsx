import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, User, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div 
      className="form-container w-full max-w-md p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-end mb-4">
        <motion.button 
          className="text-gray-400 hover:text-white flex items-center space-x-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={16} />
          <span>Вернуться на главную</span>
        </motion.button>
      </div>
      
      <h2 className="text-white text-3xl font-bold mb-8">Вход</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            {...register("login", { 
              required: "Логин обязателен",
              minLength: {
                value: 3,
                message: "Минимальная длина 3 символа"
              }
            })}
            className="form-input w-full py-3 pl-10 pr-3"
            placeholder="Логин"
          />
          {errors.login && (
            <p className="mt-1 text-red-500 text-sm">{errors.login.message}</p>
          )}
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <motion.span 
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-gray-400"
            >
              🔒
            </motion.span>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { 
              required: "Пароль обязателен",
              minLength: {
                value: 6,
                message: "Минимальная длина пароля 6 символов"
              }
            })}
            className="form-input w-full py-3 pl-10 pr-10"
            placeholder="Пароль"
          />
          <div 
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <EyeOff size={18} className="text-gray-400 hover:text-white" />
            ) : (
              <Eye size={18} className="text-gray-400 hover:text-white" />
            )}
          </div>
          {errors.password && (
            <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            {...register("rememberMe")}
            className="remember-checkbox mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-300 text-sm cursor-pointer">
            Запомнить меня
          </label>
        </div>
        
        <motion.button
          type="submit"
          className="gradient-button w-full py-3 px-4 rounded-lg text-white font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Войти
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LoginForm;