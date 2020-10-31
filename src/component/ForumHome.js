import React, {useState, useEffect} from 'react'
import API from '../api/apiList'
import {Header} from  'semantic-ui-react'

import ForumListTable from './ForumListTable'
import LoaderText from './LoaderText'

const ForumHome = (props) => {

    const [items, setItems] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    //pull initial data 
    useEffect(() => {
        API.get("/forum", {
            params: {
                content_id: 'content_id_1'
            }
        }).then(res => {
            setItems(res.data)
            setIsDataLoaded(true)
        })
    },[]);


    function loaded() {
        return (
            <div>
                <Header as ="h3">Forum List</Header>
                <ForumListTable items = {items}></ForumListTable>
            </div>
        )
    };

    function loading() {
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <div>
            soojinhome
            {isDataLoaded ? loaded() : loading()}
        </div>

    )
}

export default ForumHome