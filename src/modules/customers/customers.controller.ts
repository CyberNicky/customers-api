import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersDto } from './customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async getCustomers(
    @Query('name') name?: string,
    @Query('age') age?: string,
    @Query('gender') gender?: string,
  ) {
    return this.customersService.customers(name, age, gender);
  }

  @Get(':id')
  async getCustomer(@Param('id') id: string) {
    return this.customersService.customer({ id: +id });
  }

  @Post()
  async createCustomer(@Body() data: CustomersDto) {
    return this.customersService.createCustomers(data);
  }

  @Delete('/:id')
  async deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer({ id: +id });
  }

  @Patch('/:id')
  async updateCustomer(@Param('id') id: string, @Body() data: CustomersDto) {
    return this.customersService.updateCustomer({ data, where: { id: +id } });
  }
}
