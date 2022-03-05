let form = document.getElementById("form");
let birthYear = document.getElementById("birthyear");
let birthMonth = document.getElementById("birthmonth");
let birthDay = document.getElementById("birthday");

let displayAkan = document.querySelector (".akanname")
 
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userGender = form.gender.value;

    var akanName = compareNames(birthYear.value, birthMonth.value, birthDay.value, userGender)

    displayAkan.innerHTML = `Your Akan Name is: ${akanName}`;

    
});
function compareNames(birthyear, birthmonth, birthday, gender){
    var dayNames =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday" ];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
     if(gender ==="male"){
         var date = new Date (parseInt(birthyear), parseInt(birthmonth), parseInt(birthday))
         var dayOfWeek = dayNames[date.getDay()];
         return maleNames[date.getDay()]
        }else{
            var date = new Date(parseInt(birthyear), parseInt(birthmonth), parseInt(birthday))
            var dayOfWeek = dayNames[date.getDay()];
          return femaleNames[date.getDay()]
        }
     };
