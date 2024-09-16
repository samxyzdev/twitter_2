import expres from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

export async function initServer() {
  const app = expres();
  app.use(bodyParser.json());
  const graphqlServer = new ApolloServer({
    typeDefs: `
        type Query {
        sayHello: String
        sayHelloToMe(name:String!):String
        }
    `,
    resolvers: {
      Query: {
        sayHello: () => `Hello from grapwqh server`,
        sayHelloToMe: (parent: any, { name }: { name: string }) =>
          `Hey ${name}`,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer));
  return app;
}
