import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { AssetsModule } from './assets/assets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './assets/entities/asset.entity';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({ 
         type: 'sqlite'
        ,database: 'database/db'
        ,entities: {Asset,Order}
        ,synchronize: true
      })
      ,OrdersModule
      ,AssetsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
