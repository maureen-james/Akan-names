let form = document.getElementById("form");
let birthYear = document.getElementById("birthyear");
let birthMonth = document.getElementById("birthmonth");
let birthDay = document.getElementById("birthday");

let displayAkan = document.querySelector (".akanname")
 
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userGender = form.gender.value;

    console.log(`
    ${birthYear.value}
    ${birthMonth.value}
    ${birthDay.value}
    ${userGender}
    `)

    var akanName = compareNames(birthYear.value, birthMonth.value, birthDay.value, userGender)

    displayAkan.innerHTML = `Your Akan Name is: ${akanName}`;
});
function compareNames(birthyear, birthmonth, birthday, gender){
    var dayNames =["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday" ];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
     if(gender ==="male"){
         var date = new Date(birthyear-birthmonth-birthday)
         var dayOfWeek = dayNames[date.getDay()];
         console.log(`
        ${dayOfWeek} 
         `)
         return maleNames[date.getDay()]
        }else{
            var date = new Date (birthyear-birthmonth-birthday)
            var dayOfWeek = dayNames[date.getDay()];
          return femaleNames[date.getDay()]
        }
     };
    //  function validateForms(
    //     let x = document.getElementById("birthyear").value;
    //     // If x is Not a Number or less than one or greater than 10
    //     let text;
    //     if (isNaN(x) || x < 1 || x > 10) {
    //       alert = "Input not valid";
    //     } else {
    //       text = "Input OK";
    //     }
    //  )
    function validate() {
        let birthYear = document.getElementById("birthyear");
        if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
           alert( "Please provide a valid year of birth! eg 2019" );
        }}
