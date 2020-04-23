import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Following = (props) => {

    const [following, setfollowing] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${props.user.url}/following`
            );
            setfollowing(result.data);
        };

        fetchData();
    }, [props.user]);
    console.log(following)
    return (
        <div className="followers-page">
            <h3>{props.user.login} is following</h3>
            {!following
                ? <h3>LOADING....</h3>
                : following.map((follower, id) => (
                    <div key={id} className='follower row'>
                        <Link to={`/user/${follower.login}`}>
                            <img className='smallavatar' src={follower.avatar_url} />
                            <span className='followername'>{follower.login}</span>
                        </Link>
                    </div>

                ))}
        </div>
    )
}

export default Following;