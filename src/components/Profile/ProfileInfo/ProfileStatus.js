import React, {useEffect, useState} from "react";
import cl from'./ProfileStatus.module.css'

const ProfileStatus = React.memo(({statusValue, updateStatus, isOwner}) => {

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
        <div className={cl.mainBlock}>
            {!editModeValue && <div className={cl.statusContainer} onDoubleClick={activateEditMode}>
                <span>{status}</span>
            </div>}

            {editModeValue && <div onBlur={deactivateEditMode} className={cl.inputContainer}>
                <textarea autoFocus={true} value={status} onChange={onStatusChange}/>
                <button onClick={deactivateEditMode}>save</button>
            </div>
            }
        </div>
    )
});

export default ProfileStatus