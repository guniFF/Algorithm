const js_input = function(){
    var fs = require('fs'); 
    if (process.platform === 'linux'){
        return fs.readFileSync('/dev/stdin').toString().trim()
        // '/dev/stdin'
    }
    else {
        return `    `
    }
}

var h = js_input().trim().split(' ')
if(h==''){
    console.log(0)}
else{
    console.log(h.length)
}
