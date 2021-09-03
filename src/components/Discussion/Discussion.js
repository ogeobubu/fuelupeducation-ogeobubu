import "./discussion.css";
import woman from "../../assets/images/woman.jpg";

const Discussion = () => {
  const conversations = [
    {
      id: 1,
      image: woman,
      fullName: "Jessi Smith",
      message: "We will discuss tomorrow",
      time: "10m ago",
      multipleMessages: 5,
      onlinePresence: false,
      date: "10m ago",
    },
    {
      id: 2,
      image: woman,
      fullName: "Jessi Smith",
      message: "kzksdjkfnvlogtkmtlt",
      time: "10m ago",
      multipleMessages: 0,
      onlinePresence: true,
      date: "January 15, 2021",
    },
    {
      id: 3,
      image: woman,
      fullName: "Jessi Smith",
      message: "kzksdjkfnvlogtkmtlt",
      time: "10m ago",
      multipleMessages: 0,
      onlinePresence: true,
      date: "January 15, 2021",
    },

    {
      id: 4,
      image: woman,
      fullName: "Jessi Smith",
      message: "kzksdjkfnvlogtkmtlt",
      time: "10m ago",
      multipleMessages: 0,
      onlinePresence: true,
      date: "January 15, 2021",
    },

    {
      id: 5,
      image: woman,
      fullName: "Jessi Smith",
      message: "kzksdjkfnvlogtkmtlt",
      time: "10m ago",
      multipleMessages: 0,
      onlinePresence: true,
      date: "January 15, 2021",
    },
  ];
  return (
    <div className="discussion">
      <div className="top">
        <h2>DISCUSSIONS</h2>
        <div className="option">DMs</div>
      </div>

      <div className="discussContainer">
        <div className="discussCenter">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="convo">
              <div className="userImage">
                <img className="woman" src={conversation.image} alt="" />
                <div
                  className={
                    conversation.onlinePresence
                      ? "onlinePresence"
                      : "onlinePresenceOff"
                  }
                ></div>
              </div>

              <div className="msg">
                <div className="messageInfo">
                  <h3>{conversation.fullName}</h3>
                  <p>{conversation.message}</p>
                  <p>{conversation.date}</p>
                </div>

                <div className="notifyMessages">5</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discussion;
