import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers,
    setCurrentPage,
    setPagesCount,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReduser";
import Preloader from "../common/Preloader/Preloader"

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize)
    }

    onChangePages = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pagesSize);
        this.props.setCurrentPage(pageNumber)
    };

    render() { return <>
        {this.props.isFetching ? <Preloader/>
            : <Users
                pagesCount={this.props.pagesCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onChangePages={this.onChangePages}
                followingProcess={this.props.followingProcess}

            />
        }
    </>}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pagesSize: state.usersData.pagesSize,
        pagesCount: state.usersData.pagesCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingProcess: state.usersData.followingProcess,
    }
};

let mapDispatch = {follow, unfollow, setPagesCount, setCurrentPage, toggleIsFetching, getUsers: requestUsers};

export const UsersContainer = connect(mapStateToProps, mapDispatch )(UsersAPIComponent);