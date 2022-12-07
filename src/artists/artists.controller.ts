import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistDto } from '../auth/dto/auth.dto';
import { Public } from '../common/decorators';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() artistsDto: ArtistDto) {
    return this.artistsService.create(artistsDto);
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.artistsService.getAll();
  }

  @Public()
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: number) {
    return this.artistsService.getOne(id);
  }

  @Public()
  @Put('/:id')
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') id: number, @Body() artistsDto: ArtistDto) {
    return this.artistsService.update(id, artistsDto);
  }

  @Public()
  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number) {
    return this.artistsService.delete(id);
  }
}
