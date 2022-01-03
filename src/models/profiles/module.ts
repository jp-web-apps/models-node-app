import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilesController } from './controller';
import { Profile } from './entity';
import { ProfileService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfilesController],
  providers: [ProfileService],
})
export class ProfileModule { }
