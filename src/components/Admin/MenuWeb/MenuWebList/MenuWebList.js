import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./MenuWebList.scss";

const { confirm } = ModalAntd

export default function MenuWebList(props) {
    
    const { menu, setReloadMenuWeb } = props
    const [listItems, setListItems] = useState([])
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalContent, setModalContent] = useState(null)

    console.log(listItems)

    useEffect(() => {
        const listItemsArray = []

        menu.forEach(item => {
            listItemsArray.push({
                content: (
                    // <div>
                    //     <p>{item.title}</p>
                    // </div>
                    <MenuItem item={item} />
                )
            })
        })
        setListItems(listItemsArray)
    }, [menu])

    const onSort = (sortedList, dropEvent) => {

        console.log(sortedList)
        const accessToken = getAccessTokenApi()

        sortedList.forEach(item => {
            const { _id } = item.content.props.item
            const order = item.rank
            updateMenuApi(accessToken, _id, { order })
        })
    }

    console.log(menu)

    return (
        <div>
            <h1>Menu Web List</h1>
            {menu.map(item => (
                <p key={item._id}>{item.title}</p>
            ))}
            <div className="menu-web-list">
                <div className="menu-web-list__header">
                    <Button type="primary">Menú menú</Button>
                </div>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical" />
            </div>
        </div>
    )
}

function MenuItem(props) {

    const { item } = props

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} />,
                <Button type="primary">
                    <EditOutlined />
                </Button>,
                <Button type="danger">
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta title={item.title} description={item.url} />
        </List.Item>
    )
}