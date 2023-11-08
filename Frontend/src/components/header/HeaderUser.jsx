/* eslint-disable react/prop-types */
import { BsBell, BsCart3, BsChatDots } from "react-icons/bs";
import Avatar from "../avatar/avatar"

const HeaderUser = ({ThemeColor}) => {
  return (
    <div className="header__user">
      <BsCart3  style={{ color: ThemeColor }}/>
      <BsChatDots   style={{ color: ThemeColor }}/>
      <BsBell   style={{ color: ThemeColor }}/>
      <Avatar />
    </div>
  );
};

export default HeaderUser;
