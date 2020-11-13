import {PlatformTest} from "@tsed/common";
import "@tsed/platform-express";
import {ApolloServerTestClient, createTestClient} from "apollo-server-testing";
import {expect} from "chai";
import {GraphQLService} from "@tsed/graphql";
import {Server} from "../../../Server";
import {ADD_USER} from "../samples/UserSchema";
import {role} from "../../../util/interface";

describe("User Resolver", () => {
  let request: ApolloServerTestClient;
  before(PlatformTest.bootstrap(Server));
  before(() => {
    const server = PlatformTest.get<GraphQLService>(GraphQLService).get("server1")!;
    request = createTestClient(server);
  });
  after(PlatformTest.reset);

  it("should get recipes", async () => {
    const response = await request.mutate({
      mutation: ADD_USER,
      variables: {
        user: {
          email: "khaalidsubaan@gmail.com",
          name: "khaalid",
          phoneNumber: "01125601863",
          role: role.student,
          universityId: "blue",
          password: "wer123",
        },
      },
    });

    expect(response.data).to.deep.eq({
      data: {
        addUser: {
          success: true,
        },
      },
    });
  });
});
