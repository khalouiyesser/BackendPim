import { IsEmail, IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class SignupDto {


  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsEmail()
  email: string;



  @IsString()
  @IsOptional()
  @MinLength(6)
  @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
  password: string;


  @IsString()
  @IsOptional()
  photoUrl : string


  @IsString()
  @IsOptional()
  phoneNumber : string

  @IsString()
  @IsOptional()
  idGoogle: string;


}
