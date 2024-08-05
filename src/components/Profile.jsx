import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { clearAccount } from "../features/ProfileSlice"; // Adjust the path accordingly

const Profile = ({ handleLogout }) => {
  const { account } = useSelector((state) => state.profileslice);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleLogoutClick = () => {
    dispatch(clearAccount());
    handleLogout();
  };

  return (
    <>
      <div className=" font-poppins text-lg mx-auto min-h-28 gap-x-3">
        <img
          className=" h-9 rounded-full"
          src="https://th.bing.com/th/id/OIP.06HI925bdJbNhn8yqIDNVQAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.5"
        />
        {/* <h1>
          {account?.username} {account?.password}
        </h1> */}
      <h1 onClick={()=>navigate("/userorder")}>My Orders</h1>
      </div>
      <Button
        onClick={handleLogoutClick}
        className=" bg-red-500 text-white flex items-center py-3"
      >
        LOGOUT
      </Button>
    </>
  );
};

Profile.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Profile;
