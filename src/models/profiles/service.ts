import { Injectable } from '@nestjs/common';
import { Profile } from './interface';

@Injectable()
export class ProfileService {
  findAll(): Profile[] {
    const data = [
      { id: 1, name: 'Name 1' },
      { id: 2, name: 'Name 2' },
    ];
    return data;
  }

  findOne(): Profile {
    return { id: 1, name: 'Name 1' };
  }
}
