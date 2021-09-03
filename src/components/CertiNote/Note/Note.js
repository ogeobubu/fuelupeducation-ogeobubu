import "./note.css";
import { Description, Image } from "@material-ui/icons";

const Note = () => {
  const notes = [
    {
      id: 1,
      fileName: "SS2021-Lecture1-ppt.pdf",
      time: "JUST NOW",
      file: <Description />,
    },
    {
      id: 2,
      fileName: "SS2021-Lecture1-ppt.pdf",
      time: "JUST NOW",
      file: <Description />,
    },
    {
      id: 3,
      fileName: "SS2021-Lecture1-ppt.pdf",
      time: "Today - 2:30 PM",
      file: <Image />,
    },
    {
      id: 4,
      fileName: "SS2021-Lecture1-ppt.pdf",
      time: "JUST NOW",
      file: <Description />,
    },
  ];
  return (
    <div className="note">
      <div className="top">
        <h2>NOTEBOOKS</h2>
      </div>

      {notes.map((note) => (
        <div key={note.id} className="noteCenter">
          <div className="fileDetails">
            <div className="fileType">
              {note.file}
              <p>{note.fileName}</p>
            </div>
            <span>{note.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;
