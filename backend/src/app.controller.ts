import { User } from './user/entities/user-entity';
import { UserService } from './user/user.service';
import { UserDto } from './user/dto/user-dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
	constructor(
		private readonly userService: UserService,
	) { }

	@Post('registration')
	async registration(@Body() userDto: UserDto) {
		const user = new User();

		Object.assign(user, userDto);

		this.userService.create(user);
	}
}
