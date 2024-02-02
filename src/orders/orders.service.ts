import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Asset) private assetRepo: Repository<Asset>,
  ){}

  async create(createOrderDto: CreateOrderDto) {

    const order = this.orderRepo.create({
      asset_id: createOrderDto.asset_id,
      price: createOrderDto.price,
      // status: createOrderDto.status
    });
    

    const asset = await this.assetRepo.findOne({where: {id: order.asset_id}});

    if(!asset){
      const newAsset = this.assetRepo.create({
        id: order.asset_id,
        symbol: order.asset_id
      })
      order.asset = newAsset;
    }

    return this.orderRepo.save(order);//usando cascade para salvar novo asset (se não existir)
  }

  findAll() {
    return this.orderRepo.find();
    // return `This action returns all orders`;
  }

  findOne(id: number) {
      return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
