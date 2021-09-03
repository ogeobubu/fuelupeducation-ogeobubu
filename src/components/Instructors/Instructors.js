import "./instructors.css";
import woman from "../../assets/images/woman.jpg";

const Instructors = () => {
  const instructorsData = [
    {
      id: 1,
      image: woman,
      instructorName: "Jennifer Aston",
      role: "Data Structure Science Tutor",
      linkedIn: "https://linkedin.com"
    },
  ];
  return (
    <div className="instructors">
      <div className="top">
        <h2>FOLLOWING INSTRUCTORS</h2>
      </div>

      <div className="carousel">
        {instructorsData.map((instructor) => (
          <div key={instructor.id} className="instructor">
          <div className="imageContainer">
            <img src={instructor.image} alt="woman" className="instructorImage" />
          </div>
          <div className="instructorDetail">
            <h3>{instructor.instructorName}</h3>
            <p>{instructor.role}r</p>
          </div>
          <div className="instructorLinkedIn">
            <span>View on LinkedIn</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
