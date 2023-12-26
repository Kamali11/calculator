let a=document.getElementById("visual")
function clicked(val){
    a.value+=val;
}

function equal(val){
   a.value=eval(a.value);
}

function del(){
   a.value="";
}
