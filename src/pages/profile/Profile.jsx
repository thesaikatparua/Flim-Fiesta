import React, { useState, useEffect } from "react";
import "./Profile.css";
import User from "../../assets/user.png";
import Movie from "../../assets/movie_user.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../media query/Profileres.css";

const Profile = (props) => {
  const [profile, setProfile] = useState("Unavailable");
  const [logoutVal, setLogoutVal] = useState("");

  const handleLogout = (e) => {
    setLogoutVal(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setProfile(props.name ? props.name : "Unavailable");
  }, [props.name]);


  const userLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
      props.handleSign("","")
    }

    Swal.fire({
      title: "This is a Official Alert message",
      text: "Successfully LogOut",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile_info">
          <div className="profile_details">
            <img src={User} alt="Profile pic" id="profile_pic" />
            <div>
              <h2>{profile}</h2>
              <p>{props.mail}</p>
            </div>
          </div>
          <img src={Movie} alt="Audience" id="audience" />
        </div>

        <p
          id="profile_logout"
          onClick={userLogout}
          value={logoutVal}
          onChange={handleLogout}
        >
          Log Out
        </p>
      </div>
    </div>
  );
};

export default Profile;
