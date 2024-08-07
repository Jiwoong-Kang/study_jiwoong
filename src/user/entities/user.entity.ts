import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';
import { InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as gravatar from 'gravatar';

@Entity()
export class User extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public profileImg?: string;

  @BeforeInsert()
  async beforeSaveFunction() {
    try {
      // password 암호화
      const saltValue = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, saltValue);

      //profile 이미지 자동생성
      this.profileImg = gravatar.url(this.email, {
        s: '200',
        r: 'pg',
        d: 'mm',
        protocol: 'https',
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
