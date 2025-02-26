# Employee Management System - GraphQL API

## Project Overview
This project is a **GraphQL-based Employee Management System Backend** developed using **NodeJS, Express, GraphQL, and MongoDB**. The system enables users to perform CRUD operations on employees and user authentication. The API follows GraphQL principles and includes **query and mutation operations** with error handling, validation, and authentication.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (MongoDB Atlas)**
- **Mongoose**
- **GraphQL (Apollo Server / express-graphql)**
- **JWT Authentication**
- **express-validator** (Input validation)
- **Postman** (API testing)
- **GitHub** (Version Control)

## Database Name
```
comp3133_101441732_assigment1
```

## Installation and Setup
### 1. Clone the Repository
```sh
$ git clone https://github.com/Student#_COMP3133_StudentID_Assignment1.git
$ cd Student#_COMP3133_StudentID_Assignment1
```

### 2. Install Dependencies
```sh
$ npm install
```

### 3. Configure Environment Variables
Create a **.env** file in the root directory and add the following:
```
PORT=4000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### 4. Run the Server
```sh
$ npm start
```

---

## API Usage and Testing
### 1. Using GraphQL Playground / GraphiQL
- Open browser and go to: `http://localhost:4000/graphql`
- Execute Queries and Mutations.

### 2. Using Postman
- Import the **Postman Collection** (provided in `postman_collection.json`).
- Run and test all endpoints.
- Validate request and response formats.

### 3. JWT Authentication
- To access protected routes, include the **JWT token** in the `Authorization` header:
```
Authorization: Bearer *********************************************
```

---

## Conclusion
This project demonstrates **GraphQL API development** with **MongoDB**, focusing on user authentication, employee management, and API validation. The backend is secure with JWT authentication and tested using Postman and GraphiQL.


