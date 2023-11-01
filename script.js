const d = new Date();

let present_year = d.getFullYear();
let present_month = d.getMonth();
present_month = present_month + 1;

function calculate(element) {

    var user = document.getElementById("birth").value;
    var user_year = new Date(user).getFullYear();
    var user_month = new Date(user).getMonth()
   
   var ageY=present_year-user_year;
   var ageM=present_month-user_month;
   document.getElementById("output").innerHTML="Your age is " +ageY+" year and " +ageM+" month old.";
    console.log(ageY);
    
}