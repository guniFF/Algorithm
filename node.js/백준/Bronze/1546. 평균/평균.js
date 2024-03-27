const js_input = function(){
    var fs = require('fs'); 
    if (process.platform === 'linux'){
        return fs.readFileSync('/dev/stdin').toString().trim()
        // '/dev/stdin'
    }
    else {
        return `9
10 20 30 40 50 60 70 80 90`
    }
}

var h = js_input().split('\n')
var hh=[]
for(var i=0;i<h.length;i++){
    var h_i = h[i].split(' ')
    var h_j = []
    for(var j=0;j<h_i.length;j++){
        h_j.push(parseInt(h_i[j]))

    }
    hh.push(h_j)

}

var N=hh[0][0]
var M=hh[1].length
var grade=hh[1].sort(function(a,b){
    return a - b
})
var max_grade = grade[M-1]
var new_amt=0
for(var i=0;i<M;i++){
    new_amt += (grade[i]/max_grade)*100
}
var new_avr=new_amt/M
console.log(new_avr)