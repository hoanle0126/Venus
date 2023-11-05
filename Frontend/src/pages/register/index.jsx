/* eslint-disable react/no-unescaped-entities */
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import { AiOutlineDown } from "react-icons/ai";
import US from "country-flag-icons/react/3x2/US";

const RegisterPage = () => {
    return (
      <form className="form">
        <div className="form__title">Sign Up</div>
        <div className="form__title--sub">With social accounts</div>
        <GoogleLogin />
        <div className="form__title--sub">Or with Venus</div>
        <input type="text" name="" id="" className="form__input" placeholder="Full Name"/>
        <input type="email" name="" id="" className="form__input" placeholder="Email"/>
        <input type="password" name="" id="" className="form__input" placeholder="Password"/>
        <input type="password" name="" id="" className="form__input" placeholder="Password Confirm"/>
        <button type="submit" className="form__submit">Sign Up</button>
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