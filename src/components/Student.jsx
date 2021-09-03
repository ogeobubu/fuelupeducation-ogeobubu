import React from "react";
import Assignment from "./Assignment/Assignment";
import Attendance from "./Attendance/Attendance";
import CertiNote from "./CertiNote/CertiNote";
import Courses from "./Courses/Courses";
import Discussion from "./Discussion/Discussion";
import Events from "./Events/Events";
import Exams from "./Exams/Exams";
import Instructors from "./Instructors/Instructors";
import Navbar from "./Navbar/Navbar";
import Welcome from "./Welcome/Welcome";

const Student = () => {
  return (
    <div>
      <Navbar />
      <div className="container first">
        <Welcome />
        <Attendance />
      </div>
      <div className="container second">
        <Courses />
        <Exams />
        <Assignment />
      </div>
      <div className="container third">
        <Discussion />
        <CertiNote />
        <Events />
      </div>
      <div className="container">
        <Instructors />
      </div>
    </div>
  );
};

export default Student;
