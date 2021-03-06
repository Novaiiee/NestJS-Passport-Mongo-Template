import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";
import { User, UserSchema } from "./user.schema";
import { UserService } from "./user.service";

@Module({
	imports: [MongooseModule.forFeature([{ schema: UserSchema, name: User.name }])],
	exports: [UserService],
	providers: [UserService],
	controllers: [UserController],
})
export class UserModule {}
