import React, {useEffect, useState} from "react";
import cl from'./ProfileStatus.module.css'

const ProfileStatusWH = React.memo(({statusValue, updateStatus, isOwner}) => {

    let [editModeValue, setEditMode] = useState((false));
    let [status, setStatus] = useState((statusValue));

    useEffect( () => {
        setStatus(statusValue)
    }, [statusValue]);

    let activateEditMode = () => {
        if (isOwner) setEditMode(true)
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    return (
        <>
            {!editModeValue && <div className={cl.statusContainer} onDoubleClick={activateEditMode}>
                <span>{status}</span>
            </div>}

            {editModeValue && <div onBlur={deactivateEditMode}>
                <input autoFocus={true} value={status} onChange={onStatusChange}/>
            </div>
            }
        </>
    )
});

export default ProfileStatusWH