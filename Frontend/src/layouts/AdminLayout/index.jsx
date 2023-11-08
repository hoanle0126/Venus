/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { axiosClient } from "../../axios";
import { useEffect } from "react";
import HeaderComp from "../../components/header/header"

const DefaultLayout = () => {
  const {token,user,setUser,setToken} = useStateContext();

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  if (user.role_id===2||!token) {
    return <Navigate to={"/e-commerce"} />;
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }
  
  return (
    <div className="admin">
      <HeaderComp/>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
