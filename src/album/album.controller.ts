import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumDto } from './dto/album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async getAll(): Promise<AlbumDto[]> {
    return await this.albumService.getAll();
  }

  @Get(':id')
  async getOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<AlbumDto> {
    return await this.albumService.getOne(id);
  }

  @Post()
  async create(@Body() albumDto: AlbumDto) {
    return await this.albumService.create(albumDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() albumDto: AlbumDto,
  ): Promise<AlbumDto> {
    return await this.albumService.update(id, albumDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<AlbumDto> {
    return await this.albumService.delete(id);
  }
}
