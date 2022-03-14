function delete1(T1,_elmnt) {
    for(var i=0 ; i<T1.length ; i++) {
        if(T1[i]=='PYTHON') {
            for(var j=i ; j<T1.length; j++) {
                  T1[j]=T1[j+1];  
            }
            T1.length--;            
        }
    }
}
//delete 12 from T1
var V=['HTMLN','PYTHON','CSS','JS'];
delete1(T1,'PYTHON');
console.log(T1);
//DELETE DUPLICATE ELEMENT

function delete2(T2) {
    var i=T2.length -1;
while(i>0) {
    if(T2[i]==T2[i-1]) {
            T2[j]=T2[j+1];
        }
        T2.length--;
    }
    else {
        i--;
    }
}

// delete dipulcates 

var T2=[5,5,5,7,8,14,17,17,19,33,54,99];
delete2(T2);
console.log(T2);