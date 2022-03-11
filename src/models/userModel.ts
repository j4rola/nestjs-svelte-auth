import * as mongoose from 'mongoose'


export const UserSchema = new mongoose.Schema({  

    firstName: String,
    lastName: String,
    email: String,
    password: String

})

//notice that above, mongoose is using its own set of types. They are capitalized whereas the typescript types below are not. 
//mongoose automatically includes id's in its schemas so it is not included explicitly above. 

export interface User {     

    id: string,         
    firstName: string,  
    lastName: string,   
    email: {
        type: String,
        required: [true, "Please add a value for email"],
        unique: true }     
    password: string,   
    
}