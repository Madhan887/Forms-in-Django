function valid()
{
a=document.getElementById("pass").value;
b=document.getElementById("cpass").value;
d=document.getElementsByTagName("span");
Mob=document.getElementById("Mobile").value;
First=document.getElementById("First").value;
Last=document.getElementById("Last").value;
User=document.getElementById("User").value;
Email=document.getElementById("Email").value;
exp1=/^[A-Za-z]{3,20}$/
if (First.match(exp1)){
    d[0].innerHTML=""
}
else if(First==""){
    d[0].innerHTML="Please enter Firstname";
    return false;
}
else if (First.length <= 2){
    d[0].innerHTML="Firstname length must be greater than 2 characters";
    return false;
}
else if (First.length >= 20){
    d[0].innerHTML="Firstname length must be smaller than 20 Characters";
    return false;
}
else{
    d[0].innerHTML="Firstname allows alphabets only";
    return false;
}
if (Last.match(exp1)){
    d[1].innerHTML=""
}
else if(Last==""){
    d[1].innerHTML="Please enter Lastname";
    return false;
}
else if (Last.length <= 2){
    d[1].innerHTML="Lastname length must be greater than 2 characters";
    return false;
}
else if (Last.length >= 20){
    d[1].innerHTML="Lastname length must be smaller than 20 Characters";
    return false;
}
else{
    d[1].innerHTML="Lastname allows alphabets only";
    return false;
}
exp2=/^[A-Za-z0-9]{5,10}$/
if (User.match(exp2)){
    d[2].innerHTML=""
}
else if(User==""){
    d[2].innerHTML="Please enter username";
    return false;
}
else if (User.length <= 4){
    d[2].innerHTML="Username length must be greater 4 characters";
    return false;
}
else if (User.length >= 10){
    d[2].innerHTML="Username length must be smaller than 10 Characters";
    return false;
}
else{
    d[2].innerHTML="Username allows alphates and numbers only";
    return false;
}
exp3=/^[6-9][0-9]{9}$/
if (Mob.match(exp3)){
    d[3].innerHTML=""
}
else if (Mob.length < 10){
    d[3].innerHTML="Mobile number must  contain 10 digit";
    return false;
}
else
{
    d[3].innerHTML="Please enter valid Mobile number";
    return false;
}
if (a ==""){
    d[4].innerHTML="Please enter Password";
    return false;
}
else if (a.length < 5){
    d[4].innerHTML="Password length must be greater 5 characters";
    return false;
}
else if (a.length > 8){
    d[4].innerHTML="Password length must be smaller than 8 Characters";
    return false;
}
else{
    d[4].innerHTML="";
}
if (a != b){
    d[5].innerHTML="Password and Confirm password are not same";
    return false;
}
else{
    d[5].innerHTML="";
}
}