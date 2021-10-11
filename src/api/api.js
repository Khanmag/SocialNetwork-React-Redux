import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '843b0579-cb00-4873-9e3e-0f4b5a48939c'
    }
});

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
        console.warn('Obsolete method. Please use "profileAPI.getProfile(..)"');
        return profileAPI.getProfile(userId)
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    },
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo', formData, {
            headers: {
                "Content-type": 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe  = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    }
};
export const securityAPI = {
    getCaptchaURL() {
        return instance.get('security/get-captcha-url')
    }
};
