import { ROLE } from '../../constants/role';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 400 })
  name: string;

  @Column({ length: 400 })
  surname: string;

  @Column({ length: 100, unique: true })
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  sex: string;

  @Column()
  birthday: Date;

  @Column({ default: ROLE.USER })
  role: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
