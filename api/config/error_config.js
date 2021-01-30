module.exports = {
	LOGIN: {
    INVALID_USERNAME_LENGTH: {
    	error_code: 10001,
    	error_msg: 'Invalid username length.'
    },
    INVALID_PASSWORD_LENGTH: {
    	error_code: 10002,
    	error_msg: 'Invalid password length.'
    },
    USERNAME_NOT_EXIST: {
    	error_code: 10003,
    	error_msg: 'Username is not exist in database.'
    },
    PASSWORD_ERROR: {
    	error_code: 10004,
    	error_msg: 'Password doesn\'t matched with the username.'
    },
    INVALID_OPERATION: {
    	error_code: 10005,
    	error_msg: 'Invalid operation.'
    },
    NOT_LOGIN_STATUS: {
      error_code: 10006,
      error_msg: 'It is not loged status.'
    },
    LOGIN_STATUS: {
      error_code: 10007,
      error_msg: 'It is loged status'
    },
    LOGOUT_SUCCESS: {
      error_code: 0,
      error_msg: 'Logout is ok.'
    },
    SUCCESS: {
    	error_code: 0,
    	error_msg: 'Login is ok.'
    }
  }
}