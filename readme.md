# DenoReact Todo App

This repository contains a simple Todo application built using Deno, React, TypeScript, and Oak. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on a list of tasks.

## Getting Started

Follow the steps below to set up and run the DenoReact Todo App on your local machine:

### Prerequisites

- [Deno](https://deno.land/#installation) - Ensure Deno is installed on your system.
- [Node.js](https://nodejs.org/) - Node.js is required to build the React frontend.
- [npm](https://www.npmjs.com/) - npm is the package manager for Node.js.

### Installation

- Clone the repository: git clone git clone https://github.com/AhmedKhaleda998/Deno-Todo.git
- cd Deno-Todo
- Install the dependencies: deno install --allow-net --unstable --allow-read --allow-write --allow-plugin --name=deno_todo_server app.ts
- Build the React frontend: cd frontend-app npm install npm run build
- Start the Deno server: deno_todo_server
- Open your web browser and navigate to http://localhost:3000 to access the Todo react application and http://localhost:8000 to access the Deno Todo application.

## Endpoints

The following API endpoints are available:

- `GET /todos`: Get a list of all todos.
- `GET /todos/:id`: Get details of a specific todo.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update an existing todo.
- `DELETE /todos/:id`: Delete a todo.

## Project Structure

The project structure is organized as follows:

- `Deno/`: Contains the Deno backend source code.
  - `routes/`: Express route definitions.
  - `helpers`: MongoDB connection setup.
  - `app.ts`: Main application file where Oak is configured.
- `frontend-app/`: Contains the React frontend source code.
  - `src/`: React components and application logic.
  - `public/`: Public assets and HTML template.
- `README.md`: Project documentation (you're reading it!).

## Contributing

Thank you for considering contributing to the DenoReact Todo App! If you have any questions or need assistance, feel free to open an issue or contact us at ahmedkhaleda998877@gmail.com.

Happy coding!
