const { classes, errors } = require("./errors");

let ret_msg = {
    "class": "",
    "class_code": "",
    "err_name": "",
    "err_code": ""
};
class PgStatus {
    getError = (err_code, desc=false) => {
        if (errors.hasOwnProperty(err_code)) {
            if (desc == true) {
                ret_msg.class = classes["Class " + err_code.substring(0, 2)];
                ret_msg.class_code = err_code.substring(0, 2);
                ret_msg.err_code = err_code;
                ret_msg.err_name = errors[err_code];
                return ret_msg;
            }
            return errors[err_code];
        }
        else {
            return "ERROR_NOT_FOUND";
        }
    }

    getErrCode = (msg, desc=false) => {
        if (Object.values(errors).includes(msg)) {
            let code = Object.keys(errors).find(err_code => errors[err_code] === msg).toString();
            if (desc == true) {
                ret_msg.class = classes["Class " + code.substring(0, 2)];
                ret_msg.class_code = code.substring(0, 2);
                ret_msg.err_code = code;
                ret_msg.err_name = msg;
                return ret_msg;
            }

            return code;
        }
        else {
            return "ERROR_MSG_NOT_FOUND";
        }
    }
}

const pg = new PgStatus();

module.exports = { pg };