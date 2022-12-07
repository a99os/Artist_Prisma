import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
} from 'class-validator';
export class AuthDto {
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class ArtistDto {
  @IsNotEmpty()
  @IsString()
  readonly artist_name: string;
}

export class AlbumsDto {
  @IsNotEmpty()
  @IsString()
  readonly album_name: string;
  @IsNotEmpty()
  @IsDateString()
  readonly release_date: string;
  @IsNotEmpty()
  @IsNumber()
  readonly artist_id: number;
  @IsNotEmpty()
  @IsString()
  readonly genre: string;
}
