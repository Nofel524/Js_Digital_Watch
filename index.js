function mytimes(){
   var myDate=new Date();
   var hr,min=(myDate.getMinutes()<10)?"0" +myDate.getMinutes():myDate.getMinutes();
   sec=(myDate.getSeconds()<10)?"0"+myDate.getSeconds():myDate.getSeconds();
   M=(myDate.getHours()>=12)?"PM":"AM";

   if(myDate.getHours()==0)
{
      hr=12;
}
else if(myDate.getHours()>12){
      hr=myDate.getHours()-12;
}
else{
      hr=myDate.getHours();
}

var currentTime=hr + ":" + min + ":"+ sec + ":";
document.getElementsByClassName("H")[0].innerHTML=currentTime;
document.getElementsByClassName("M")[0].innerHTML=M;
var MyDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sataurday"],
 MyMonth=["Jan","Feb","Mar","Api","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
 day=myDate.getDate();
 var currentDate=MyDay[myDate.getDay()]+","+ MyMonth[myDate.getMonth()]+day;
 document.getElementsByClassName("date")[0].innerHTML=currentDate;

}
mytimes();
setInterval(function(){
      mytimes();
},1000);