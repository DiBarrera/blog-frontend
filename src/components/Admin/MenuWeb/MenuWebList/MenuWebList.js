import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import DragSortableList from "react-drag-sortable";

import "./MenuWebList.scss";

const { confirm } = ModalAntd

export default function MenuWebList(props) {
    
    const { menu, setReloadMenuWeb } = props
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("")

    useEffect(() => {
        const listItemsArray = []

        menu.forEach(item => {
            listItemsArray.push({
                content: (
                    <div>
                        <p>{item.title}</p>
                    </div>
                )
            })
        })
    }, [menu])

    const onSort = (sortedList, dropEvent) => {
        console.log(sortedList)
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
                <DragSortableList />
            </div>
        </div>
    )
}