const js_input = function(){
    var fs = require('fs'); 
    if (process.platform === 'linux'){
        return fs.readFileSync('/dev/stdin')+''
    }
    else {
        return `3 2`
    }
}

var a = js_input()

console.log(parseInt(a[0])-parseInt(a[2]))
