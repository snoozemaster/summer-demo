import React, {useState, useEffect} from 'react'
import API from '../api/apiList'
import { Button, Form, Icon, Message} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

const ForumDetail = (props) => {
    console.log(props.location.state)
    const [forum, setForum] = useState(props.location.state.item)
    const [comments, setComments] = useState([])
    const [isDataLoaded, setIsDataLoaded] = useState(false)

    function doRenderTable() {
        return (
            <div>
                <Message>
                    <Message.Header>
                        Title: {forum.title}<br></br>
                        Author: {forum.author}<br/><br/>
                    </Message.Header>
                    <p>{forum.body}</p>
                </Message>

                {/* <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Content</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {items.map(item => {
                            return (
                                <Table.Row
                                // negative = {item.reported_user.length > 3}
                                // positive = {item.reported_user.length < 3}
                                key = {item.forum_id}
                                >
                                    <Table.Cell verticalAlign="middle">{item.author}</Table.Cell>
                                    <Table.Cell verticalAlign="middle">{item.title}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table> */}

                <Form className='attached fluid segment'>
                    <Form.Input fluid label='id' placeholder='enter id' type='text' size='mini'/>
                    <Form.Input label='Cotent' placeholder='Enter comment' type='text' />
                    <Form.Checkbox inline label='I agree to the not to comment bad stuffff :)' />
                    <Button color='blue'>Submit</Button>
                </Form> 
          </div>
        )
    }


    useEffect(() => {
        API.get("/comment", {
            params: {
                forum_id: forum.forum_id
            }
        }).then(res => {
            setComments(res.data)
            setIsDataLoaded(true)
        })
    },[]);


    return (
        <div>{doRenderTable()}</div>
    )
}

export default ForumDetail

