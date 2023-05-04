const { pg } = require("./pgstatus");

console.log(pg.getError("23514"));
console.log(pg.getErrCode("check_violation"));