import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as cors from "cors";
import * as helmet from "helmet";
import "@tsed/ajv";
import "@tsed/mongoose";
import "@tsed/graphql";
import mongooseConfig from "./config/mongoose";
import {authChecker} from "./util";

export const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  mount: {
    "/": [`${rootDir}/controllers/**/*.ts`],
  },
  componentsScan: [
    `${rootDir}/graphql/**/*.ts`,
    `${rootDir}/protocols/**/*.ts`,
    `${rootDir}/services/**/*.ts`,
    `${rootDir}/models/**/*.ts`,
    `${rootDir}/middlewares/**/*.ts`,
  ],
  mongoose: mongooseConfig,
  graphql: {
    server1: {
      path: "/graphql",
      // resolvers: [],

      buildSchemaOptions: {
        emitSchemaFile: true,
        authChecker: authChecker,
      },
      serverConfig: {
        mocks: true,
        context: ({}) => {
          // $log.info("graph", req.passport);
          // logger: req.logger;
        },
      },

      // serverRegistration: 4000,
      // server: (config: Config) => ApolloServer,
    },
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit() {
    this.app
      .use(helmet())
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );

    return null;
  }
}
