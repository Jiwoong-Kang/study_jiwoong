import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public productImg: string;

  @Column()
  public price: number;

  @Column()
  public stock: number;

  @Column({ default: true })
  public isSale: boolean;
}
