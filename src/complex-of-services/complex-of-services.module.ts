import { Module } from '@nestjs/common';
import { ComplexOfServicesService } from './complex-of-services.service';
import { ComplexOfServicesController } from './complex-of-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplexOfServices } from './entities/complex-of-services.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ComplexOfServices])],
  controllers: [ComplexOfServicesController],
  providers: [ComplexOfServicesService]
})
export class ComplexOfServicesModule {}
