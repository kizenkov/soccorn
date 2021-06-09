import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '669fbc17-8ab9-40b1-8b82-54cc83790bf8'
    }
})

export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?count=${pageSize}&page=${page}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    authMe() {
        return instance.get('auth/me');
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status});
    },
    login(email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}