import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Followers = (props) => {
   const [followers, setFollowers] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios(`${props.user.url}/followers`);
         setFollowers(result.data);
      };

      fetchData();
   }, [props.user]);
   return (
      <div className="followers-page">
         <h3>Followers of {props.user.login}</h3>
         {!followers ? (
            <h3>LOADING....</h3>
         ) : (
            followers.map((follower, id) => (
               <div key={id} className="follower row">
                  <Link to={`/user/${follower.login}`}>
                     <img
                        className="smallavatar"
                        src={follower.avatar_url}
                        alt={follower.avatar_url}
                     />
                     <span className="followername">{follower.login}</span>
                  </Link>
               </div>
            ))
         )}
      </div>
   );
};

export default Followers;
