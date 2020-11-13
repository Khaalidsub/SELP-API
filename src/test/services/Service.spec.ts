import {expect} from "chai";
import {PlatformTest} from "@tsed/common";

import {UserService} from "../../services/UserService";
import {role} from "../../util/interface";
import {User} from "../../models/User";
import {it} from "mocha";

describe("User Service", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do add a user", async () => {
    // const instance = PlatformTest.get<UserService>(UserService);
    const instance = await PlatformTest.invoke<UserService>(UserService); // get fresh instance
    const response = await instance.add({
      email: "khaalidsubaan@gmail.com",
      name: "khaalid",
      phoneNumber: "01125601863",
      role: role.student,
      universityId: "blue",
      password: "wer123",
    } as User);
    console.log(response);

    expect(response as User).to.be.instanceof(User);
  });

  it("should get something", async () => {
    const instance = PlatformTest.get<UserService>(UserService);
    const response = await instance.find({});
    expect(response).to.be.an("array");
  });
});
