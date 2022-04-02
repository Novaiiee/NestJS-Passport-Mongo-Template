import { Controller, Param, Post, UseGuards } from "@nestjs/common";
import { CurrentUser } from "../auth/decorators/user.decorator";
import { JwtGuard } from "../auth/guards/jwt.guard";
import { UserDocument } from "./user.schema";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
	constructor(private userService: UserService) {}
}
