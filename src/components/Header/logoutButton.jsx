import authService from "../../appwrite/auth.js";
import {logout} from "../../store/authSlice.js";
import {useDispatch} from "react-redux";

const LogoutButton = () =>{
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return (
        <div className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" onClick={logoutHandler}>
            Logout
        </div>
    )
}
export default LogoutButton