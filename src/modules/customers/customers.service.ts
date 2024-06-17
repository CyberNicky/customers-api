import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async customer(id: Prisma.CustomersWhereUniqueInput) {
    return await this.prisma.customers.findUnique({ where: id });
  }

  async customers(name?: string, age?: string, gender?: string) {
    const filters: any = {};

    if (name) {
      filters.name = { contains: name };
    }

    if (age) {
      filters.age = +age;
    }

    if (gender) {
      filters.gender = gender;
    }

    return this.prisma.customers.findMany({
      where: filters,
    });
  }

  async createCustomers(data: Prisma.CustomersCreateInput) {
    return this.prisma.customers.create({
      data,
    });
  }
  async updateCustomer(params: {
    where: Prisma.CustomersWhereUniqueInput;
    data: Prisma.CustomersUpdateInput;
  }) {
    return this.prisma.customers.update(params);
  }
  async deleteCustomer(id: Prisma.CustomersWhereUniqueInput) {
    return await this.prisma.customers.delete({ where: id });
  }
}
