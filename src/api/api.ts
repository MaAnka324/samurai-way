import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b2aa0181-7c4a-4cfb-9fa0-ad8f16fa6d5f'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    setUsersProfile(userId: string){
        return instance.get(`profile/${userId}` )
            .then(response => {
                return response.data
            })
    }
}



