/* eslint-disable react/no-unescaped-entities */
import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";
import US from "country-flag-icons/react/3x2/US";
import { createRef, useState } from 'react';
import { useStateContext } from '../../../context/ContextProvider';
import { axiosClient } from '../../../axios';
import StyleInput from '../../../components/input';
import { StyleButton } from '../../../components/button';

const RegisterPage = () => {
    const navigate = useNavigate();
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const {setUser,setToken} = useStateContext();
    const [message, setMessage] = useState(null);

    const onSubmit = e => {
      e.preventDefault();

      const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      }

      axiosClient.post("/signup",payload)
      .then(({data})=>{
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
      navigate("/confirm")
    }

    return (
      <form className="form" onSubmit={onSubmit}>
        <div className="form__title">Sign Up</div>
        <div className="form__title--sub">With social accounts</div>
        <GoogleLogin />
        <div className="form__title--sub">Or with Venus</div>
        <div className='w-full flex flex-col gap-[21px]'>
          <StyleInput inputRef={nameRef} type="text" label={"Full Name"}/>
          <StyleInput inputRef={emailRef} type="email" label={"Email"}/>
          <StyleInput inputRef={passwordRef} type="password" label={"Password"}/>
          <StyleInput inputRef={passwordConfirmationRef} type="password" label={"Password Confirm"}/>
        </div>
        <span className="form__error">{message}</span>
        <div className="form__submit">
        <StyleButton variant="contained" fullWidth>
          Sign Up
        </StyleButton>
        </div>
        <span className="form__link">Already have account? <Link to={"/login"}>Sign in</Link></span>
      <div className="form__footer">
        <div className="form__footer--languague">
          <US style={{ width: "14px" }} />
          English <AiOutlineDown />
        </div>
        <div className="form__footer--more">
          <span>Terms</span>
          <span>Plans</span>
          <span>Contact Us</span>
        </div>
      </div>
      </form>
    );
}

export default RegisterPage