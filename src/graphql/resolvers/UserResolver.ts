import {$log, Req} from "@tsed/common";
import {Inject} from "@tsed/di";
import {ResolverService} from "@tsed/graphql";
import {Arg, Mutation, Query} from "type-graphql";
import {UserService} from "../../services/UserService";
import {User} from "../schema/User";
// import {Credential} from "../schema/Credential";
import {Response} from "../schema/Response";
@ResolverService(User)
export class UserResvolver {
  @Inject()
  private userService: UserService;

  @Mutation(() => Response)
  async login() {
    const result = await this.userService.find({});
    return {success: true, message: "sucess", data: result};
  }

  @Mutation(() => Response)
  signUp(@Arg("user") req: User) {
    return {success: true, message: "sucess", data: req};
  }

  @Query(() => Response)
  async getSession(@Req("jwt") req: string) {
    try {
      return req;
    } catch (error) {
      $log.error(error);
      return null;
    }
  }

  @Query(() => User)
  async user(@Arg("id") id: string) {
    const user = await this.userService.findById(id);
    if (user === undefined) {
      throw new Error(id);
    }

    return user;
  }

  @Query(() => [User], {})
  users() {
    return this.userService.find({});
  }
  @Mutation(() => Response)
  async addUser(@Arg("user") user: User): Promise<Response> {
    try {
      const result = await this.userService.add(user);
      // return result as User;
      return {success: true, message: "sucess", data: result};
    } catch (error) {
      // return new User();
      return {success: false, message: error};
    }
  }

  @Mutation(() => Response)
  async deleteUser(@Arg("id") id: string): Promise<Response> {
    try {
      await this.userService.delete(id);
      // return result as User;
      return {success: true, message: "sucess"};
    } catch (error) {
      // return new User();
      return {success: false, message: error};
    }
  }

  @Mutation(() => Response)
  async updateUser(@Arg("user") user: User): Promise<Response> {
    try {
      const result = await this.userService.set(user);
      // return result as User;
      return {success: true, message: "sucess", data: result};
    } catch (error) {
      // return new User();
      return {success: false, message: error};
    }
  }
}
