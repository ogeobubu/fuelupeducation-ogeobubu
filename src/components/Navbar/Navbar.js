import { Notifications, Settings } from "@material-ui/icons";
import "./navbar.css";
import woman from "../../assets/images/woman.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>FuelEd</h1>
      </div>

      <div className="right">
        <div className="navlinks">
          <ul>
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Schedule</li>
            <li>Study groups</li>
            <li>Tickets</li>
            <li>Profile</li>
          </ul>
        </div>

        <div className="notify">
          <div className="notificationBell">
            <Notifications className="bell" />

            <div className="notificationBadge">
              <small>2</small>
            </div>
          </div>
          <div className="settings">
            <Settings className="setting" />
          </div>
          <div className="profileContainer">
            <img src={woman} alt="woman" className="woman" />

            <div className="onlinePresence"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
