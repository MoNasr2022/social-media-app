import Stories from "../../component/stories/Stories";
import Posts from "../../component/posts/Posts";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};

export default Home;
