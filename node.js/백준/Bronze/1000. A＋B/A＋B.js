const js_input = function(){
    var fs = require('fs'); 
    if (process.platform === 'linux'){
        return fs.readFileSync('/dev/stdin').toString()
    }
    else {
        return `1 2`
    }
}
var a = parseInt(js_input()[0])
var b = parseInt(js_input()[2])
console.log(a+b)

