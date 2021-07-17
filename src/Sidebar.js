import React from 'react'
import { Avatar } from "@material-ui/core"
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="http://izolprom.ru/wp-content/uploads/2014/11/237021_www.GdeFon.com_-1024x640.jpg" alt="" />
                <Avatar className="sidebar__avatar" src="https://github.com/israelsousa21.png" />
                <h2>Israel Sousa</h2>
                <h4>me@israelsousa.com.br</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Quem viu você!</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Posts visualizados</p>
                    <p className="sidebar__statNumber">5,120</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recentes</p>
                {recentItem('reactjs')}
                {recentItem('programing')}
                {recentItem('softwareengineer')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
