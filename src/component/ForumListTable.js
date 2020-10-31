import React, {useState} from 'react'
import {Table} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

const ForumListTable = (props) => {
    const [items, setItems] = useState(props.items.items)
    const [redirect, setRedirect] = useState(false)
    const [selectedItem, setSelectedItem] = useState("default")

    function doRenderTable() {
        if(!Array.isArray(items)) {
            return "Your input is not array"
        }
        return (
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Forum ID</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {items.map(item => {
                        return (
                            <Table.Row
                            onClick = {() => handleClick(item)}
                            // negative = {item.reported_user.length > 3}
                            // positive = {item.reported_user.length < 3}
                            key = {item.forum_id}
                            >
                                <Table.Cell verticalAlign="middle">{item.forum_id}</Table.Cell>
                                <Table.Cell verticalAlign="middle">{item.author}</Table.Cell>
                                <Table.Cell verticalAlign="middle">{item.title}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        )
    }

    function handleClick(item) {
        setRedirect(true)
        setSelectedItem(item)
    }

    function doRedirect() {
        return(
            <Redirect to={{pathname: "/forumDetail", state:{item:selectedItem}}}></Redirect>
        )
    }

    return (
        <div>{redirect ? doRedirect() : doRenderTable()}</div>
    )
}

export default ForumListTable

