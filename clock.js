let Myname = prompt("Adınızı öğrenebilir miyim ?");

if( (Myname != "") && (Myname != null) ) {
    document.getElementById("myName").innerHTML=Myname.toUpperCase();   
}
else if(isim == "") 
   
alert("Boş giriş yaptınız!");

else if(isim == null) 

alert("Giriş yapmaktan vazgeçtiniz!");

function date(){
    let m = new Date().toLocaleString();
    document.getElementById("myclock").innerHTML = m;
}
setInterval(date,1000);