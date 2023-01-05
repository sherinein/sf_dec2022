class Customer{
    constructor(name){
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    setName(newName){
        newName=newName.trim(); // we can remove unwanted space using trim method
        if(newName===''){
            throw 'The name can not be empty';
        }
        this.name=newName;

    }
}

let customer=new Customer('Antony');
console.log(customer);
customer.setName('Prakash');
console.log(customer.getName());