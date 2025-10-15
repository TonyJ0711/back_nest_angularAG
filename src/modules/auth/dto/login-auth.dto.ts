import { IsEmail, IsNotEmpty, max, MaxLength, maxLength, MinLength } from "class-validator";
import { User } from "../interfaces/user.interfaces";

export class LoginAuthDto implements User {

    @IsNotEmpty()
    @IsEmail()
    email: string;
    @MinLength(6)   
    @MaxLength(25)  
    @IsNotEmpty()
    password: string;   

}


