import { Module } from '@nestjs/common';
import { FileController } from './file-microservice.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [AppService],
})
export class AppModule {}
