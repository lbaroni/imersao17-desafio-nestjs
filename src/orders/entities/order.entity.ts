import { Asset } from "src/assets/entities/asset.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum OrderStatus {
    PENDING = 'pending',
    OPEN = 'open',
    CLOSED = 'closed',
  }

@Entity()
export class Order {
    @PrimaryGeneratedColumn("increment")
    id: number
 
    @Column("decimal")
    price: number

    @Column()
    status: OrderStatus = OrderStatus.PENDING;

    @ManyToOne(() => Asset, {cascade:['insert'], eager:true})
    @JoinColumn({ name: 'asset_id' })
    asset: Asset

    @Column()
    asset_id: string
}
