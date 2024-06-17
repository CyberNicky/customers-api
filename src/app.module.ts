import { Module } from '@nestjs/common';

import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
