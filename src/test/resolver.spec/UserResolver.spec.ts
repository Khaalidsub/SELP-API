import {PlatformTest} from "@tsed/common";
import "@tsed/platform-express";
import {ApolloServerTestClient, createTestClient} from "apollo-server-testing";
import {GraphQLService} from "@tsed/graphql";
import {Server} from "../../Server";
import {ADD_USER, FETCH_USERS} from "../UserSchema";
import {role} from "../../util/interface";
import {User} from "../../models/User";

describe("User Resolver", () => {
  let request: ApolloServerTestClient;
  beforeAll(PlatformTest.bootstrap(Server));
  beforeAll(() => {
    const server = PlatformTest.get<GraphQLService>(GraphQLService).get("server1")!;
    request = createTestClient(server);
  });
  afterAll(PlatformTest.reset);

  it("should add user", async () => {
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

    expect.objectContaining<User>(response.data);
  });

  it("should get users", async () => {
    const response = await request.query({
      query: FETCH_USERS,
    });

    expect.objectContaining<User[]>(response.data);
  });
});
