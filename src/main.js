const { classes, errors } = require("./errors");
class PgStatus {
    getError = (err_code, desc=false) => {
        if (errors.hasOwnProperty(err_code)) {
            if (desc == true) {
                let ret_ret_msg = {
                    "Class": classes["Class " + err_code.substr(0, 2)],
                    "Error Name": errors[err_code],
                    "Error Code": err_code
                };
                return ret_ret_msg;
            }
            return errors[err_code];
        }
        else {
            return "ERROR_NOT_FOUND";
        }
    }

    getErrCode = (msg, desc=true) => {
        if (Object.values(errors).includes(msg)) {
            let name = Object.keys(errors).find(err_code => errors[err_code] === msg);
            if (desc == true) {
                let ret_ret_msg = {
                    "Class": Object.keys(classes).find(cl => classes[cl] === "Class "+ err_code.substr(0, 1)),
                    "Error Name": name,
                    "Error Code": err_code
                };

                return ret_ret_msg;
            }

            return name;
        }
        else {
            return "ERROR_MSG_NOT_FOUND";
        }
    }
}

const pg = new PgStatus();

module.exports = { pg };