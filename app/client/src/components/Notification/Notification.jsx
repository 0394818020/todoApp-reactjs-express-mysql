import React from 'react'
import './Notification.scss'
import { useState } from 'react'
import { useContext } from 'react'
import NotificationContext from './NotificationContext.js'
import { useEffect } from 'react'
function Notification() {
    const { noti, setNoti } = useContext(NotificationContext);    

    const config = {
        "Success" : {
            message : "Thành công",
            background_color : 'rgba(110, 231, 183, 0.22)',
            border_color: "#34d399",
            icon : '/mark.png',
            color : "#065f46"
        },
        "Warning" : {
            message : "Cảnh báo",
            background_color : "rgba(253, 224, 71, 0.22)",
            icon : '/warning.png',
            border_color: "#facc15",
            color : "#78350f"
        },
        "Error" : {
            message : "Lỗi",
            background_color : "rgba(251, 113, 133, 0.22)",
            icon : '/error.png',
            color : "#7f1d1d"
        }
    }

    let notiStyle = config[noti.type];

    useEffect(() => {

        const timer = setTimeout(() => setNoti({ type : '', message : '' }), 2200);
        return () => clearTimeout(timer);        

    }, [noti.type])

    if (!noti.type)
        return null;

    return (
    (noti.type && 
    <>
        <div className='Notification' style={{ background : notiStyle.background_color, border : notiStyle.border_color}}>
            <div className='Notification-icon' style={{ background : `url(${notiStyle.icon}) center no-repeat`}}></div>
            <div className='Notification-message' style={{ color : notiStyle.color}}>
                <h3>{notiStyle.message}</h3>
                <p>{noti.message}</p>
            </div>
            <div className='time-bar'>

            </div>
        </div>
        
    </>
    )
  )
}

export default Notification