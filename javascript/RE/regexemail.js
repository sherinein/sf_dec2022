/* Rules for email
 uppercase(A-Z) and lowecase(a-z)
 Digits (0-9)
 Characters 
 character .

*/
function checkValidEmail(email){
   const emailPattern=/\S+@\S+\.\S+/g;
  
    let isValid=emailPattern.test(email);

    if(isValid){
        console.log('email is valid');
    }
    else{
   
    console.log('email is invalid');
    }
    
}

checkValidEmail('sherine@gmail.com');