/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet} from "react-router-dom";
import HeaderComp from "../../components/header/header"
import Footer from "../footer";

const UserLayout = () => {


  return (
    <div className="user">
      <HeaderComp/>
      <div className="user__content">
        <div className="user__content--item"><Outlet /></div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserLayout;
