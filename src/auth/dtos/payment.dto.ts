import { IsEmail, IsNumber, IsString } from 'class-validator';

export class Payment {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
}
