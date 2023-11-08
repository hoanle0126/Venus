import { useNavigate } from "react-router-dom";

const HeaderGuest = () => {
  const navigate = useNavigate();

  return (
    <div className="header__guest">
      <button
        onClick={() => navigate("/register")}
        className="header__guest--signup"
      >
        Sign Up
      </button>
      <button
        onClick={() => navigate("/login")}
        className="header__guest--signin"
      >
        Sign In
      </button>
    </div>
  );
};

export default HeaderGuest;
