import "./rightBar.scss";
import Me from "../../assets/me.jpg";

const RightBar = () => {
  
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <span>Mohamed Nasr</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <span>Mohamed Nasr</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <p>
                <span>Mohamed Nasr</span> changed his cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <p>
                <span>Mohamed Nasr</span> has been mentioned
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <p>
                <span>Mohamed Nasr</span> shared a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <p>
                <span>Mohamed Nasr</span> updated his status
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <div className="online" />
              <span>Mohamed Nasr</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <div className="online" />
              <span>Mohamed Nasr</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <div className="online" />
              <span>Mohamed Nasr</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={Me}
                alt="profile-img"
              />
              <div className="online" />
              <span>Mohamed Nasr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
