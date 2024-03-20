const js_input = function(){
    var fs = require('fs'); 
    if (process.platform === 'linux'){
        return fs.readFileSync('/dev/stdin').toString().trim()
        // '/dev/stdin'
    }
    else {
        return `baaa`
    }
}

var h=js_input()
var hh=''
for(var i=0;i<h.length;i++){
    if(h.charCodeAt(i)>96){
        hh +=String.fromCharCode(h.charCodeAt(i)-32)
    }
    else{
        hh +=h[i]
    }
}

var hh_arr=[]

for(var i=0;i<26;i++){
    hh_arr.push(0)
}

for(var i=0;i<h.length;i++){
    hh_arr[hh.charCodeAt(i)-65] +=1
}

var result_pre=0

for(var i=0;i<26;i++){
    if(hh_arr[i]==Math.max.apply(null,hh_arr)){
        result_pre +=1
    }
}

if(result_pre>1){
    console.log('?')
}
else if(result_pre==1){
    console.log(String.fromCharCode(hh_arr.indexOf(Math.max.apply(null,hh_arr))+65))
}