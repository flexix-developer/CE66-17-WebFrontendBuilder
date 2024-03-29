# Installing the Program with Docker

## System Requirements
1. Operating System: Windows, macOS, or Linux
2. Minimum RAM: 8 GB
3. Minimum Disk Space: 15 GB
4. Screen Resolution: At least 1920x1080 pixels

## Installation Steps
1. Install Visual Studio Code or any other Text Editor you prefer.
2. Install Docker Desktop, which can be downloaded from [Docker's official website](https://www.docker.com/products/docker-desktop/)
3. Install Docker Compose, which can be downloaded from [Docker's official documentation](https://docs.docker.com/compose/install/)
4. Open Terminal or Command Prompt and navigate to the directory where you want to install the project.
5. Clone the project from GitHub using the command:
`git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git`
6. After cloning, you will find frontend, backend folders, and a docker-compose.yml file.
7. Configure the API Server to connect to the Database by navigating to the backend folder.
8. Open the .env file and verify the correctness of `MYSQL_DNS`, which should be `root:root@tcp(database:3306)/backend_db?charset=utf8mb4&parseTime=True&loc=Local`
9. Open the main.go file and and verify the correctness of `r.Run()`, which should be `r.Run("0.0.0.0:8081")`
10. Use the command `docker-compose up -d` or `docker compose up -d` to automatically create containers.
11. Access the website through your browser by visiting [http://localhost:3000/](http://localhost:3000/)