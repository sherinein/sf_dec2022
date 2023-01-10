function checkValidMobileNumber(mobilenumber){

    const mobilePattern=/^[6-9]\d{9}$/;
   
    if(mobilePattern.test(mobilenumber))
       console.log("valid mobile no")
     else
        console.log("Invalid mobile no")
  
     
}

checkValidMobileNumber(90038345916565);