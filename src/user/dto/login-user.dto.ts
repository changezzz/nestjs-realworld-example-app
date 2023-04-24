import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {

  @ApiProperty({type: String})
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({type: String})
  @IsNotEmpty()
  readonly password: string;
}