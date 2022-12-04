import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../component/posts/Posts";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import Update from "../../component/update/Update";

const Profile = () => {
  const {currentUser} = useContext(AuthContext);

  const [update, setUpdate] = useState(false)
  const userId =parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { data: followers } = useQuery(["followers"], () =>
    makeRequest.get("/followers?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

   const mutation = useMutation(
     (Following) => {
       if (Following)
         return makeRequest.delete("/followers?followedUserId=" + userId);
       return makeRequest.post("/followers" , {userId});
     },
     {
       onSuccess: () => {
         // Invalidate and refetch
         queryClient.invalidateQueries(["followers"]);
       },
     }
   );
   const handleClick = async (e) => {
     e.preventDefault();
     mutation.mutate(followers?.includes(currentUser.id));
  };
  
  

  return (
    <div className="profile">
      {isLoading ? (
        "loadaing"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/" + data.coverPic} alt="" className="cover" />
            <img
              src={"/upload/" + data.profilePic}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon fontSize="large" />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon fontSize="large" />
                    <span>{data.website}</span>
                  </div>
                </div>
                {userId === currentUser.id ? (
                  <button onClick={() => setUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleClick}>
                    {followers?.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon fontSize="large" />
                <MoreVertIcon fontSize="large" />
              </div>
            </div>
            <Posts userId={userId} setUpdate={setUpdate} />
          </div>
        </>
      )}
      {update && <Update setUpdate={setUpdate} user={data} />}
    </div>
  );
};

export default Profile;
