import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8089'

// 前置拦截
axios.interceptors.request.use(config => {
    return config
})

// 后置拦截
axios.interceptors.response.use(response => {
        let res = response.data

        console.log(res)

        if (res.code == 200) {
            return response
        } else {
            //Element.Message.error(res.msg, {duration: 3 * 1000})
            return Promise.reject(res.msg)
        }
    },
    error => {
        console.log(error)
        if (error.response.data) {
            error.message = error.response.data.msg
        }

        if (error.response.status === 401) {

        }

        // Element.Message.error(error.message, {duration: 3 * 1000})
        console.log(error.message)
        return Promise.reject(error)
    })