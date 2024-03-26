# Setting Up the Database on Your Computer

To properly configure and set up the database for the project on your computer, follow these steps:

## Prerequisites
Ensure that you have MySQL installed on your computer. You can download and install MySQL from the official website: [MySQL Downloads](https://dev.mysql.com/downloads/)

## Configuration Steps

1. **Start MySQL Server**: Start the MySQL server on your computer. This can usually be done through the MySQL Workbench or by starting the MySQL service directly.

2. **Create Database**: Open your preferred MySQL client (such as MySQL Workbench, phpMyAdmin, or the MySQL command line interface) and create a new database. You can name it according to your preference, e.g., `my_database`.

3. **Configure Connection Details**: Depending on your development environment and preferences, update the database connection details in the project configuration files.

   - **Backend**: Navigate to the backend directory of the cloned project. Open the `.env` file using a text editor and update the `MYSQL_DNS` variable with your MySQL connection details. The format should be:
     ```
     username:password@tcp(hostname:port)/database_name?charset=utf8mb4&parseTime=True&loc=Local
     ```
     Replace `username`, `password`, `hostname`, `port`, and `database_name` with your MySQL credentials and database details.

4. **Apply Database Schema (if applicable)**: If your project requires specific database tables or schema, ensure that you apply them to the newly created database. This can include running SQL scripts or migrations provided with the project.

5. **Verify Connection**: Test the connection to the database from your project to ensure that it's configured correctly.

## Testing the Setup

To verify that the database setup is successful, you can run your project and perform actions that interact with the database. This may include creating, reading, updating, or deleting records, depending on the functionality of your project.

By following these steps, you should have successfully set up the database for the project on your computer.


# Setting Up the Database with Docker

To properly configure and set up the database for the project using Docker, follow these steps:

## Prerequisites
Ensure that you have Docker and Docker Compose installed on your computer. You can download and install them from the official Docker website: [Get Docker](https://www.docker.com/get-started)

## Configuration Steps

1. **Clone the Project**: Clone the project repository from GitHub to your local machine using the following command:
`git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git` Navigate to the cloned project directory.

2. **Navigate to Backend Directory**: Open your terminal or command prompt and navigate to the `backend` directory of the cloned project.

3. **Edit .env File**: Open the `.env` file located in the `backend` directory using a text editor.

4. **Configure MySQL Connection**: In the `.env` file, locate the `MYSQL_DNS` variable and edit it to match your MySQL connection details. The format should be as follows:
`username:password@tcp(database:3306)/database_name?charset=utf8mb4&parseTime=True&loc=Local` Replace `username`, `password`, and `database_name` with your MySQL credentials and database name.

5. **Adjust API Server Host (Optional)**: If necessary, open the `main.go` file located in the `backend` directory using a text editor. Adjust the host from `"localhost:8081"` to `"0.0.0.0:8081"` to ensure the API server is accessible from outside the Docker container.

6. **Start Docker Compose**: Run the following command to start Docker Compose and create the necessary containers:
`docker-compose up -d` or `docker compose up -d` This command will create and start the containers defined in the `docker-compose.yml` file in detached mode.

7. **Verify Connection**: Test the connection to the database from your project to ensure that it's configured correctly.

## Testing the Setup

To verify that the database setup is successful, you can run your project and perform actions that interact with the database. This may include creating, reading, updating, or deleting records, depending on the functionality of your project.

By following these steps, you should have successfully set up the database for the project using Docker.




