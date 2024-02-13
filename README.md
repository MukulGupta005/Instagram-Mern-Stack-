# Instagram MERN Stack Clone

A MERN stack implementation of a simple Instagram clone. This project uses MongoDB, Express, React, and Node.js to create a full-stack web application.

## Features

- User authentication and authorization using JWT
- Create, read, update, and delete posts
- View posts by a specific user
- View all posts
- Delete user account and all associated posts

## Getting Started

To get started with this project, first clone the repository:

```bash
git clone https://github.com/MukulGupta005/Instagram-Mern-Stack.git
```

Next, navigate to the project directory and install the dependencies:

```bash
cd Instagram-Mern-Stack
npm install
```

To start the development server, run the following command:

```bash
npm start
```

This will start the server on port 5000. You can then view the application in your web browser by visiting http://localhost:5000.

## Endpoints

### /users

This endpoint returns a list of users in the database.

**Response:**
- 200 OK - Returns a list of users in JSON format.

### /myposts

This endpoint returns a list of posts created by the authenticated user.

**Request:**
- Authorization header with a valid JWT token.

**Response:**
- 200 OK - Returns a list of posts in JSON format.

### /posts

This endpoint returns a list of all posts in the database.

**Response:**
- 200 OK - Returns a list of posts in JSON format.

### /createpost

This endpoint creates a new post in the database.

**Request:**
- Authorization header with a valid JWT token.
- `title` and `body` fields in the request body.

**Response:**
- 201 Created - Returns the newly created post in JSON format.

### /delpost/:postId

This endpoint deletes a post from the database.

**Request:**
- Authorization header with a valid JWT token.
- postId parameter in the URL.

**Response:**
- 200 OK - Returns a JSON object with a redirect property set to /posts.

### /deluser

This endpoint deletes the authenticated user and all associated posts from the database.

**Request:**
- Authorization header with a valid JWT token.

**Response:**
- 200 OK - Returns a JSON object with a message indicating that the user has been deleted.

## Technologies Used

- MongoDB
- Express
- React
- Node.js
- JWT
- Mongoose

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

Mukul Gupta - [@MukulGupta005](https://twitter.com/MukulGupta005) - mukulgupta005@gmail.com

Project Repository - [https://github.com/MukulGupta005/Instagram-Mern-Stack](https://github.com/MukulGupta005/Instagram-Mern-Stack)
