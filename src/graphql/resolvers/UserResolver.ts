import {$log, BodyParams, Req} from "@tsed/common";
import {Inject} from "@tsed/di";
import {ResolverService} from "@tsed/graphql";
import {Arg, Mutation, Query, Ctx, Authorized} from "type-graphql";
import {UserService} from "../../services/UserService";
import {User} from "../schema/User";
import {Credential} from "../schema/Credential";
import {Response} from "../schema/Response";
@ResolverService(User)
export class UserResvolver {
  @Inject()
  private userService: UserService;

  @Mutation(() => Response)
  async login(@Arg("credential") req: Credential) {
    const result = await this.userService.find({});
    return {success: true, message: "sucess", data: result};
  }

  @Mutation(() => Response)
  signUp(@Arg("user") req: User) {
    return {success: true, message: "sucess", data: req};
  }

  @Query(() => Response)
  async getSession(@Req("jwt") req: String) {
    try {
      return req;
    } catch (error) {
      $log.error(error);
      return null;
    }
  }

  @Query((returns) => User)
  async user(@Arg("id") id: string) {
    const user = await this.userService.findById(id);
    if (user === undefined) {
      throw new Error(id);
    }

    return user;
  }

  @Query((returns) => [User], {})
  users() {
    return this.userService.find({});
  }
  @Mutation((User) => Response)
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

  @Mutation((User) => Response)
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
