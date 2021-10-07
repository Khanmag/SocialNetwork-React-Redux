import React, {useEffect, useState} from "react";
import cl from'./ProfileStatus.module.css'

const ProfileStatusWH = React.memo((props) => {

    let [editModeValue, setEditMode] = useState((false))
    let [status, setStatus] = useState((props.status))

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editModeValue && <div className={cl.statusContainer} onDoubleClick={activateEditMode}>
                <span>{status}</span>
            </div>}

            {editModeValue &&  <div onBlur={deactivateEditMode}>
                <input autoFocus={true} value={status} onChange={onStatusChange}/>
            </div>
            }
        </>
    )
})

export default ProfileStatusWH