const classes = {
    "Class 00": "Successful Completion",
    "Class 01": "Warning",
    "Class 02": "No Data",
    "Class 03": "SQL Statement Not Yet Complete"
};

const errors = Object({
    "00000": "successful_completion",

    "01000": "warning",
    "0100C": "dynamic_result_sets_returned",
    "01008": "implicit_zero_bit_padding",
    "01003": "null_value_eliminated_in_set_function",
    "01007": "privilege_not_granted",
    "01006": "privilege_not_revoked",
    "01004": "string_data_right_truncation",
    "01P01": "deprecated_feature"
});

class PgStatus {
    getError = (err_code) => {
        if (errors.hasOwnProperty(err_code)) {
            return errors[err_code];
        }
        else {
            return "ERROR_NOT_FOUND";
        }
    }

    getErrCode = (msg) => {
        if (Object.values(errors).includes(msg)) {
            return Object.keys(errors).find(err_code => errors[err_code] === msg);
        }
        else {
            return "ERR_MSG_NOT_FOUND";
        }
    }
}

const pg = new PgStatus();

module.exports = { pg };