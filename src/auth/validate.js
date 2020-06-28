// 手机号
function isPhone (value) {
    return /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
}

// 验证码
function isCode (value) {
    return /^[0-9]{6}$/.test(value)
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
