import React, { useEffect, useState } from 'react'
import { registration } from './user.js'
import css from './Login.module.scss'

const useValidation =(value, validations) => {
  const[isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const[isPhone, setPhone] = useState(false);

  useEffect( () => {

    for (const validation in validations) {
      switch(validation) {
        case "minLength":
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
        break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true)
        break;  
      }
    }
  }, [value])

  useEffect( () =>{

    if(isEmpty||minLengthError){
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmpty,minLengthError])


  return {
    isEmpty,
    minLengthError,
    inputValid,
    isPhone,
  }
}

const useInput =(initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value,validations);
  const onChange =(e) => {
    setValue(e.target.value)
  }
  const onBlur = (e) => {
    if (e.target.value) {
      setDirty (true);
    }
  }

  return {
    value,  
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}
export const Form = () => {
    
  const loginInput = useInput("any",{isEmpty: true,})
  const passwordInput = useInput("any", {isEmpty:true, minLength:5}) 

  return (
    <div className={css.login_container}>  
      <div className={css.contentContainer}>
        <div className={css.containerLoginCaption}>
          <h1 className={css.login_caption}>Для оформления подписки 
            <br/> на тариф, необходимо
            <br/> авторизоваться.
          </h1>
        </div>
        <div className={css.login_img}></div>
      </div>
      <form className={css.form}>
        < div className={css.links_container}>
          <div className={css.block}>
            <a className= {css.link1 } href="#">Войти</a>
          </div>
          <div  className={css.registate}>
            <a className = {css.link2 } href="#">Зарегистрироваться</a>
          </div>
        </div>
        <div className={css.login}>
          <label className={css.label} >Логин или номер телефона:</label>
          <input required = {loginInput.isDirty && loginInput.isEmpty || loginInput.isDirty && loginInput.isPhone} onChange={e => loginInput.onChange(e)} onBlur = {e =>loginInput.onBlur(e)}  id="loginInput" className={css.input} type="text" />
        </div>

        {(loginInput.isDirty && loginInput.isEmpty ) && <div className={css.err}>Поле не может быть пустым</div>} 
        {(loginInput.isDirty && loginInput.isPhone) && <div className={css.err}>Введите корректные данные</div>}

        <div className={css.password}>
          <label className={css.label} >Пароль:</label>  
          <input required = {passwordInput.isDirty && passwordInput.isEmpty || passwordInput.isDirty && passwordInput.minLengthError} onChange={e =>passwordInput.onChange(e)} onBlur = {e =>passwordInput.onBlur(e)}  id="passwordInput" className={css.input} type="password" />
        </div>

        {(passwordInput.isDirty && passwordInput.isEmpty) && <div className={css.err}>Поле не может быть пустым</div>}
        {(passwordInput.isDirty && passwordInput.minLengthError) && <div className={css.err}>Некорректная длина</div>}
      
        <button
          disabled={!loginInput.inputValid || !passwordInput.inputValid}
          className={css.button_service}
          onClick={async () => {
            try {
              await registration(loginInput.value, passwordInput.value);
            } catch (error) {
              console.log(error);
            }
          }}>
        Войти
        </button>
        <a className = {css.link3 } href="#">Восстановить пароль</a>
        <label className={css.entrance}>Войти через:</label>
        <div className ={css.options}>
          <button className={css.button_login}>
            <img className="css.option_img" src ="../../pictures/Login/Google.svg" alt ="icon Google"/>
          </button>
          <button className={css.button_login}>
            <img className="css.option_img" src ="../../pictures/Login/Facebook.svg" alt ="icon Facebook"/>
          </button>
          <button className={css.button_login}>
            <img className="css.option_img" src ="../../pictures/Login/Yandex.svg" alt ="icon Yandex"/>
          </button>
        </div> 
      </form>
      <div className={css.login_img_mobile}></div>
    </div>

  )
}

export default Form