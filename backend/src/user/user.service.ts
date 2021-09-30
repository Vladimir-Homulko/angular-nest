import { UserDto } from './dto/user-dto';
import { User } from './entities/user-entity';
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

  async update(id: number, userDto: UserDto) {

    const user = await this.findById(id);

    user.name = userDto.name;
    user.surname = userDto.surname;
    user.login = userDto.login;
    user.email = userDto.email;
    user.sex = userDto.sex;
    user.birthday = userDto.birthday;

    if (userDto.password !== '') {
      user.password = userDto.password; 
    }

    console.log(user.password)

    return await this.userRepository.update(id, user);
  }

  findById(id: number) {
    return this.userRepository.findOneOrFail({ id });
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
