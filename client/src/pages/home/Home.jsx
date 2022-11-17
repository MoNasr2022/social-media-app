import Stories from "../../component/stories/Stories";
import Posts from "../../component/posts/Posts";

import "./home.scss";
import  Share from '../../component/share/Share'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Share/>
      <Posts />
    </div>
  );
};

export default Home;
