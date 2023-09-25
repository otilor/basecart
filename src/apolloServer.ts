// apolloServer.ts
import { ApolloServer, gql } from "apollo-server-express";
import express, { Express } from "express";

// Define your GraphQL schema
const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String!
    image: String!
    price: Float
  }

  type Query {
    items: [Item]
  }
`;

const items = [
  { id: "1", name: "Item 1", description: "Description 1" , image: 'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_75c26b19-f902-4c53-9b78-b9efca722b13.jpg', price: 2.99},
  { id: "2", name: "Item 2", description: "Description 2", image: 'https://www.instacart.com/image-server/591x591/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a21fe8c4-88b3-44b5-ba37-dd49ebed6014.jpg', price:3.99},
];

// Define your resolvers
const resolvers = {
  Query: {
    items: () => items,
  },
};

// Create an Express application
const app: Express = express();

// Create an Apollo Server and apply it to the Express app
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  // Define the port for your server
  const port: string | number = process.env.PORT || 4000;

  // Start the server
  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
