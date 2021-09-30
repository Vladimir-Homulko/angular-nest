import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';
import { Body, Controller, Param, Post, Get, UseGuards } from '@nestjs/common';
import { User } from './entities/user-entity';

@UseGuards()
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post()
	createUser(@Body() userDto: UserDto) {
		const user = new User()

		Object.assign(user, userDto)

		this.userService.create(user);
	}

	@Post(':id')
	async updateUser(@Param('id') id: number, @Body() userDto: UserDto) {
		await this.userService.update(id, userDto);
	}

	@Get()
	getAllUsers() {
		return this.userService.findAll();
	}

	@Get(':sex')
	filterBySex(@Param('sex') sex: string) {
		if (sex === 'male') {
			return this.userService.findAllWhereSexMale();
		} else {
			return this.userService.findAllWhereSexFemale();
		}
	}
}
