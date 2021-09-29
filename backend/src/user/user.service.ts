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
      
      createAndUpdate(userDto: UserDto) {
            return this.userRepository.save(userDto);
      }

      findById(id: number) {
            return this.userRepository.findOne({ id }); 
      }
}
