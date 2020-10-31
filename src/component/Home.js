import React from 'react'
import ForumHome from './ForumHome'

const Home = (props) => {
    return (
        <div className = "container">
            <div className="row">
                <div className="col-6 justify-content-center my-5">
                    <ForumHome></ForumHome>
                </div>
            </div>
        </div>
    )
}

export default Home;