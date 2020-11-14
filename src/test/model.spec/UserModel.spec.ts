import {PlatformTest} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {TestMongooseContext} from "@tsed/testing-mongoose";

import {User} from "../../models/User";
import {role} from "../../util/interface";

describe("UserModel", () => {
  beforeEach(TestMongooseContext.create);
  afterEach(TestMongooseContext.reset);

  it("should run pre and post hook", async () => {
    const userModel = PlatformTest.get<MongooseModel<User>>(User);

    // GIVEN
    const user = new userModel({
      email: "khaalidsubaan@gmail.com",
      name: "khaalid",
      phoneNumber: "01125601863",
      role: role.student,
      universityId: "blue",
      password: "wer123",
    });

    // WHEN
    await user.save();

    // THEN
    expect(user.pre).toEqual("hello pre");
    expect(user.post).toEqual("hello post");
  });
});
