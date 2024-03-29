import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalPersonnelService } from './medical-personnel.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MedicalPersonnel } from './entities/medical-personnel.entity';

@Crud({
  model:{
    type: MedicalPersonnel
  }
})

@ApiTags('Medical personnel')
@Controller('medical-personnel')
export class MedicalPersonnelController implements CrudController<MedicalPersonnel>{
  constructor(public service: MedicalPersonnelService) {}
}
