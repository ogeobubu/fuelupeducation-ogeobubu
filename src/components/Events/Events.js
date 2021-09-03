import { Event } from "@material-ui/icons";
import "./events.css";

const Events = () => {
  return (
    <div className="events">
      <div className="top">
        <h2>UPCOMING EVENTS</h2>
      </div>

      <div className="eventCenter">
        <div className="eventContainer">
          <div className="eventDate">
            <Event className="eventIcon" />
            <span>Jan 27th, 2021</span>
          </div>
        </div>

        <div className="eventsDetails">
          <div className="eventDetail">
            <h4>Event title goes here</h4>
            <p>Short description goes here...</p>
          </div>
          <div className="eventDetail">
            <h4>Event title goes here</h4>
            <p>Short description goes here...</p>
          </div>
          <div className="eventDetail">
            <h4>Event title goes here</h4>
            <p>Short description goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
