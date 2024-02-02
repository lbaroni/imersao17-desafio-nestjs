import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsService {

  constructor(
    @InjectRepository(Asset) private assetRepo: Repository<Asset>,
  ){}

  create(createAssetDto: CreateAssetDto) {
    const asset = this.assetRepo.create(createAssetDto);
    return this.assetRepo.save(asset);
    // return 'This action adds a new asset';
  }

  findAll() {
    return this.assetRepo.find();
    // return `This action returns all assets`;
  }

  findOne(id: string) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
