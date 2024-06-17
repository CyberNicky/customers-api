import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { PrismaService } from 'src/prisma.service';
import { CustomersService } from './customers.service';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [PrismaService, CustomersService],
})
export class CustomersModule {}
