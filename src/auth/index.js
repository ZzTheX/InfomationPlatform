function getLoginState () {
    let token = localStorage.getItem('token')
    return !!token
} 

export default getLoginState