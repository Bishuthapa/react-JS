import { useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";
import authService from "../../appwrite/auth";
function LogoutBthn() {
    const dispatch = useDispatch();
  return (
    <div> LogoutBthn </div>
  );
}

export default LogoutBthn