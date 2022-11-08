import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.scss'

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    // DumyData
     const stories = [
       {
         id: 1,
         name: "Mohamed Nasr",
         img: "https://images.pexels.com/photos/13915489/pexels-photo-13915489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       },
       {
         id: 2,
         name: "Mohamed Nasr",
         img: "https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       },
       {
         id: 3,
         name: "Mohamed Nasr",
         img: "https://images.pexels.com/photos/13664663/pexels-photo-13664663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       },
       {
         id: 4,
         name: "Mohamed Nasr",
         img: "https://images.pexels.com/photos/11448599/pexels-photo-11448599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       },
     ];




  return (
      <div className='stories'>
          <div className="story">
              <img src={currentUser.profilePic} alt="" />
              <span>{ currentUser.name }</span>
              <button>+</button>
          </div>
          {stories?.map(story => (
              <div className='story' key={story.id}>
                  <img src={story.img} alt="" />
                  <span>{story.name}</span>
              </div>
          ))}
    </div>
  )
}

export default Stories;