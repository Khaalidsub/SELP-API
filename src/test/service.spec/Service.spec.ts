import {PlatformTest} from "@tsed/common";
import {TestMongooseContext} from "@tsed/testing-mongoose";
import {Server} from "../../Server";
import {UserService} from "../../services/UserService";
import {role} from "../../util/interface";
import {User} from "../../models/User";

describe("User Service", () => {
  beforeAll(TestMongooseContext.bootstrap(Server));
  afterAll(TestMongooseContext.reset);
  beforeAll(PlatformTest.create);
  afterAll(PlatformTest.reset);

  it("should add a user", async () => {
    const instance = PlatformTest.get<UserService>(UserService);
    // const instance = await PlatformTest.get<UserService>(UserService); // get fresh instance
    try {
      const response = await instance.add({
        email: "khaalidsubaan@gmail.com",
        name: "khaalid",
        phoneNumber: "01125601863",
        role: role.student,
        universityId: "blue",
        password: "wer123",
      } as User);
      console.log(response);

      expect.objectContaining<User>(response as User);
    } catch (error) {
      console.log(error);

      expect(error).toThrowError();
    }
  });

  it("should get users", async () => {
    const instance = PlatformTest.get<UserService>(UserService);
    try {
      const result = await instance.find({});
      expect(result);
    } catch (error) {
      console.log(error);
      expect(error).toThrowError();
    }

    // expect.any(response);
  });
});
