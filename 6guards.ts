function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2)
    }
    x.trim()
}

class MyResponse {
    responsemessage = 'response header'
}
class MyError {
    errormessage = 'error mess'
}

function handle(res: MyError | MyResponse) {
    if(res instanceof MyResponse) {
        return res.responsemessage
    } else {
        return res.errormessage
    }
}

type AlerType = 'success' | 'danger' | 'warning'

function SetAlertType(type: AlerType) {
    
}