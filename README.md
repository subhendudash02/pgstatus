# pgstatus

A simple library for working with error codes in PostreSQL.

The error codes are taken from the [official documentation](https://www.postgresql.org/docs/current/errcodes-appendix.html).

## Usage

```JS

const { pg } = require("pgstatus");

pg.getError("23514");   // check_violation
pg.getErrCode("check_violation");   // 23514

// Get the error class, error code and the error message in the form of js object
pg.getError("23514", desc=true);    // (or)
pg.getErrCode("check_violation", desc=true);
/*
Output: 
{
  class: 'Integrity Constraint Violation',
  err_name: 'check_violation',
  err_code: '23514'
}
*/

```
