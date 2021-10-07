import React from 'react'
import * as axios from 'axios'
import Users from "./Users";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagesCount(response.data.totalCount)
            })
    }

    onChangePages = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagesCount(response.data.totalCount)
            })
    }

    render() { return <Users
        pagesCount={this.props.pagesCount}
        pagesSize={this.props.pagesSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onChangePages={this.onChangePages}
    /> }
}
export default UsersAPIComponent