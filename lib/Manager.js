const Employee=require("Employee.js")
class Manager extends Employee{ 
    constructor(name,id,email,officeNumber){ 
        super(name,id,email) 
        this.officeNumber=officeNumber
        
    }

    getRole(){
        return "manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }


}
module.exports=Manager