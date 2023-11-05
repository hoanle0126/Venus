/* eslint-disable react/no-unescaped-entities */
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import US from "country-flag-icons/react/3x2/US";

const LoginPage = () => {
  return (
    <form className="form">
      <div className="form__title">Sign In</div>
      <div className="form__title--sub">Your social accounts</div>
      <GoogleLogin />
      <div className="form__title--sub">Or with Venus</div>
      <input
        type="email"
        name=""
        id=""
        className="form__input"
        placeholder="Email"
      />
      <input
        type="password"
        name=""
        id=""
        className="form__input"
        placeholder="Password"
      />
      <span className="form__forgot">Forgot password?</span>
      <button type="submit" className="form__submit">
        Sign In
      </button>
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
