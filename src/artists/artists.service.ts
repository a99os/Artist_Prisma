import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ArtistDto } from '../auth/dto/auth.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArtistsService {
  constructor(private prismaService: PrismaService) {}

  async create(artistsDto: ArtistDto): Promise<ArtistDto> {
    return await this.prismaService.artists.create({ data: artistsDto });
  }

  async getAll() {
    return await this.prismaService.artists.findMany();
  }

  async getOne(id: number) {
    const artist = await this.prismaService.artists.findUnique({
      where: { artist_id: +id },
    });

    if (!artist) {
      throw new HttpException("Bunday id da artist yo'q", HttpStatus.NOT_FOUND);
    }
    return artist;
  }

  async update(id: number, artistDto: ArtistDto) {
    const artist = await this.prismaService.artists.findUnique({
      where: { artist_id: +id },
    });
    if (!artist) {
      throw new HttpException("Bunday id da artist yo'q", HttpStatus.NOT_FOUND);
    }

    const newArtist = await this.prismaService.artists.update({
      where: { artist_id: +id },
      data: artistDto,
    });
    return newArtist;
  }

  async delete(id: number) {
    const artist = await this.prismaService.artists.findUnique({
      where: { artist_id: +id },
    });
    if (!artist) {
      throw new HttpException("Bunday id da artist yo'q", HttpStatus.NOT_FOUND);
    }
    await this.prismaService.artists.delete({ where: { artist_id: +id } });
    return artist;
  }
}
