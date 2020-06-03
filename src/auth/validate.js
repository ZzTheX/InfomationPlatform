// 手机号
function isPhone (value) {
    let bool = /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
    return bool
}

// 验证码
function isCode (value) {
    return bool = /^[0-9]{6}$/.test(value)
}

// 密码
function isPassword (value) {
    return /^[A-Za-z0-9]+$/.test(value)
}

export default {
    isPhone: isPhone,
    isCode: isCode,
    isPassword: isPassword
}
