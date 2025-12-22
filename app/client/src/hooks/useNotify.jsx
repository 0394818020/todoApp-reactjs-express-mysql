import React, { useEffect } from 'react'
import { useContext } from 'react'
import NotificationContext from '../components/Notification/NotificationContext.js'


function useNotify() {

    const { setNoti } = useContext(NotificationContext);

    const notify = (res) => {
        

        if (!res.ok) {
            if (res?.clientError)
                return setNoti({ type : "Warning", message : res?.clientError});
            return setNoti({ type : "Error", message : res?.message || "Có lỗi xảy ra"})
        }
            

        return setNoti({ type : "Success", message : res?.message})
    }

    return notify
}

export default useNotify