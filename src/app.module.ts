import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './models/profiles/entity';
import { ProfileModule } from './models/profiles/module';

const database = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'containers-us-west-21.railway.app',
  port: 7091,
  username: 'root',
  password: 'GayCc1g1ep29qYtwe5Dd',
  database: 'railway',
  entities: [Profile],
  synchronize: true,
});

@Module({
  imports: [database, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
