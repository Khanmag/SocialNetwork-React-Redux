import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '843b0579-cb00-4873-9e3e-0f4b5a48939c'
    }
})

export const usersAPI = {
    getUsers(currentPage, pagesSize) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data )
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data )
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use "profileAPI.getProfile(..)"')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe  = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}
