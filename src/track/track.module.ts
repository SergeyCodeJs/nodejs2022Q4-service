import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TrackRepository } from './track.repository';
import { AlbumRepository } from '../album/album.repository';
import { ArtistRepository } from '../artist/artist.repository';

@Module({
  controllers: [TrackController],
  providers: [TrackService, TrackRepository, AlbumRepository, ArtistRepository],
})
export class TrackModule {}
