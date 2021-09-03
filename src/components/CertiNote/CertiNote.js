import Certificate from "./Certificate/Certificate";
import "./certinote.css";
import Note from "./Note/Note";

const CertiNote = () => {
  return (
    <div className="certinote">
      <Certificate />
      <Note />
    </div>
  );
};

export default CertiNote;
