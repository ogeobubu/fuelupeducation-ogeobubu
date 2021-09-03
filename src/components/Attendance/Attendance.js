import "./attendance.css";

const Attendance = () => {
  return (
    <div className="attendance">
      <div className="attendLeft">
        <h2>ATTENDANCE</h2>
        <p>
          <small>Overall: </small> <span>98/100</span>
        </p>
        <div className="attendanceButton">
          <button className="btn">Take Attendance</button>
        </div>
      </div>

      <div className="attendCenter">
        <div className="outerCircle">
          <div className="innerCircle"></div>
        </div>
      </div>

      <div className="attendRight">
        <ul>
          <li>
            <span className="present"></span> Present
          </li>
          <li>
            {" "}
            <span className="absent"></span>Absent
          </li>
          <li>
            <span className="late"></span>Late
          </li>
          <li>
            <span className="excused"></span>Excused
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Attendance;
