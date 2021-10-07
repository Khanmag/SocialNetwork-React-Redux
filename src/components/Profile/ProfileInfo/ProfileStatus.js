import React from "react";
import cl from'./ProfileStatus.module.css'
import {profileAPI, usersAPI} from "../../../api/api";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps != this.props || nextState != this.state
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render()
    {
        return (
            <>
                {(!this.state.editMode)
                    ? <div className={cl.statusContainer} onDoubleClick={this.activateEditMode}>
                        <span >{this.state.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus