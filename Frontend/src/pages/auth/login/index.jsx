/* eslint-disable react/no-unescaped-entities */
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import US from "country-flag-icons/react/3x2/US";
import { createRef, useState } from "react";
import { useStateContext } from "../../../context/ContextProvider";
import { axiosClient } from "../../../axios";
import { StyleButton } from "../../../components/button";
import StyleInput from "../../../components/input";

const LoginPage = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/signin", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__title">Sign In</div>
      <div className="form__title--sub">Your social accounts</div>
      <GoogleLogin />
      <div className="form__title--sub">Or with Venus</div>
      <div className="flex flex-col gap-[21px] w-full">
        <StyleInput  inputRef={emailRef} type={"email"} label={"Email"} />
        <StyleInput inputRef={passwordRef} type={"password"} label={"Password"} />
      </div>
      <span className="form__forgot">Forgot password?</span>
      <span className="form__error">{message}</span>
      <div className="form__submit">
        <StyleButton type="submit" variant="contained" fullWidth>
          Sign In
        </StyleButton>
      </div>
      <span className="form__link">
        Don't have account? <Link to={"/register"}>Sign up</Link>
      </span>
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
};

export default LoginPage;
