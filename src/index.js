const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const typeDefs = require("./schema/typeDefs");
const userResolvers = require("./resolvers/userResolvers");
const employeeResolvers = require("./resolvers/employeeResolvers");

require("dotenv").config();
connectDB();

const app = express();
const server = new ApolloServer({ typeDefs, resolvers: [userResolvers, employeeResolvers] });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => console.log(`Server running at http://localhost:4000${server.graphqlPath}`));
}

startServer();
