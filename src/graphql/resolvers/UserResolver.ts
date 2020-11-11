import {$log, BodyParams, Req} from "@tsed/common";
import {Inject} from "@tsed/di";
import {ResolverService} from "@tsed/graphql";
import {Authenticate, Authorize} from "@tsed/passport";
import {Arg, Mutation, Query, Ctx, Authorized} from "type-graphql";
import {UserService} from "../../services/UserService";
import {User} from "../schema/User";
import {Response} from "../schema/Response";
@ResolverService(User)
export class UserResvolver {
  @Inject()
  private userService: UserService;

  @Authenticate("login")
  @Mutation(() => Response)
  async login(@Arg("user") req: User) {
    return {success: true, message: "sucess", data: req};
  }

  @Mutation(() => Response)
  @Authenticate("signup")
  signUp(@Arg("user") req: User) {
    return {success: true, message: "sucess", data: req};
  }

  @Authorize("jwt")
  @Query(() => Response)
  async getSession(@Req("account") req: User) {
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
