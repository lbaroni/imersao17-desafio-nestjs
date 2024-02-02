import { Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError } from "typeorm"

@Entity()
export class Asset {
    @PrimaryColumn()
    id: string
    @Column()
    symbol: string
}
