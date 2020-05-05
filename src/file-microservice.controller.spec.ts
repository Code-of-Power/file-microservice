import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file-microservice.controller';
import { AppService } from './services/app.service';

describe('AppController', () => {
  let appController: FileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [AppService],
    }).compile();

    appController = app.get<FileController>(FileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
