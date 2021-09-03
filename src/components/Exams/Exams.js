import "./exams.css";

const Exams = () => {
  return (
    <div className="exams">
      <div className="examsContainer">
        <div className="top">
          <h2>EXAMS</h2>
        </div>
        <div className="examsFlex">
          <div className="examsCenter">
            <div className="outerChart">
              <div className="innerChart"></div>
            </div>
          </div>

          <div className="examsBottom">
            <ul>
              <li>
                <span className="present"></span> Completed
              </li>
              <li>
                {" "}
                <span className="ongoing"></span>Ongoing
              </li>
              <li>
                <span className="absent"></span>To do
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
