import React,{useEffect,useState} from "react";
import "./SideBar.css";
import profileimg from "./Profile.png";
import SideBarButton from "./SideBarButton";
import { FaPlay, FaSignOutAlt, FaGripfire } from "react-icons/fa";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../Spotify";

function SideBar() {
  const [image, setImage] = useState(
    profileimg
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="Sidebar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div className="Sidebar-btn">
        <SideBarButton to="/" title="Feed" icon={<MdSpaceDashboard />} />
        <SideBarButton to="/Trending" title="Trending" icon={<FaGripfire />} />
        <SideBarButton to="/Player" title="Player" icon={<FaPlay />} />
        <SideBarButton
          to="/Favourites"
          title="Favorities"
          icon={<MdFavorite />}
        />
        <SideBarButton to="/Library" title="Library" icon={<IoLibrary />} />
      </div>
      <SideBarButton to="/Sign Out" title="Sign Out" icon={<FaSignOutAlt />} />
    </div>
  );
}

export default SideBar;
