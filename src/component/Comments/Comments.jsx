import { Link } from "react-router-dom";

import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
              <input type="text" placeholder="Comment..." />
              <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <div>
              <Link
                to={`/profile/${comment.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{comment.name}</span>
              </Link>
              <p>{comment.desc}</p>
            </div>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
