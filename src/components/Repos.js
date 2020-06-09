import React, { useState, useEffect } from "react";
import axios from "axios";

const Repos = (props) => {
   const [repos, setrepos] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios(`${props.user.url}/repos`);
         setrepos(result.data);
      };

      fetchData();
   }, [props.user]);
   return (
      <div className="followers-page">
         <h3>{props.user.login}'s repositories</h3>
         {!repos ? (
            <h3>LOADING....</h3>
         ) : (
            repos.map((repo, id) => (
               <div key={id} className="follower row">
                  <a
                     href={`https://github.com/${repo.owner.login}/${repo.name}`}
                  >
                     {repo.name}
                  </a>
               </div>
            ))
         )}
      </div>
   );
};

export default Repos;
