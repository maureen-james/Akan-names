var CC, YY, MM, DD, d, dayValue;
var dayNames =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
 var year = document.getElementById ("birthyear");
 if(document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value<=1900)
 {
    alert( "Please provide a valid year of birth! eg 2019" );
    document.myForm.year.focus() ;
    return false;
 }


}