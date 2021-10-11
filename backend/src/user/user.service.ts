import { UserUpdateDto } from './dto/user.update-dto';
import { UserDto } from './dto/user-dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    return await this.userRepository.save(user);
  }

  async update(id: number, userDto: UserUpdateDto) {

    const user = await this.findById(id);

    user.name = userDto.name;
    user.surname = userDto.surname;
    user.login = userDto.login;
    user.email = userDto.email;
    user.sex = userDto.sex;
    user.birthday = userDto.birthday;
    
    if (userDto.password && userDto.password !== '') {
      user.password = userDto.password; 
    } else {
      delete user.password;
    }
    
    return await this.userRepository.update(id, user);
  }

  async findById(id: number) {
    const user = await this.userRepository.findOneOrFail({ id });
    delete user.password;
    return user;
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  findAll() {
    return this.userRepository.find();
  }

  findAllWhereSexMale() {
    return this.userRepository.find({ 
      where: { sex: 'male' } 
    });
  }

  findAllWhereSexFemale() {
    return this.userRepository.find({ 
      where: { sex: 'Female' } 
    });
  }
}
