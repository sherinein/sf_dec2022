const person={
    "name":"Prasanna",
    "email" :"prasanna@gmail.com",
    "mobileno":8989343966,
    "hobby":{
        "reading":true,
        "gaming" : false,
        "sports":"football"
    },
    "language":["Tamil","English","Hindi"]
}

console.log(person.name);
console.log(person.hobby.gaming);
console.log(person.hobby.sports);
console.log(person.language[1]);

// JSON object convert into JavaScript object --> JSON.parse(jsonData);
const jsonData='{"name":"Aravind","city":"Chennai"}';

const jsobject=JSON.parse(jsonData);
console.log(jsobject.name);

//Java Script object convert into JSON object --->JSON.stringify(jscriptObject)
const jscriptObject={"name":"Aravind","city":"Chennai"};
const jsonObject=JSON.stringify(jscriptObject);
console.log(jsonObject);