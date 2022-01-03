import { Controller, Get, Post, Body } from '@nestjs/common';
import { Profile } from './interface';
import { ProfileService } from './service';

interface InputBody {
  name: string;
}

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfileService) { }

  @Get()
  async findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get()
  async findOne(): Promise<Profile> {
    return this.profileService.findOne();
  }

  @Post()
  async create(@Body() body: InputBody) {
    console.log({ body });
    return body;
  }
}
