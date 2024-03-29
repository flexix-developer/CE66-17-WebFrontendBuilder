# Installing the Program with Docker

## System Requirements
- Operating System: Windows, macOS, or Linux
- Minimum CPU: 2 CPU cores
- Minimum RAM: 8 GB
- Minimum Disk Space: 15 GB
- Screen Resolution: At least 1920x1080 pixels

## Installation Steps
1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
3. Install [Docker Compose](https://docs.docker.com/compose/install/).
4. Clone the project from GitHub:
    ```bash
    git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git
    ```
5. Navigate to the project directory:
    ```bash
    cd CE66-17-WebFrontendBuilder
    ```
6. Configure the API Server to connect to the Database:
    - Navigate to the backend folder:
        ```bash
        cd backend
        ```
    - Open the `.env` file and ensure the correctness of `MYSQL_DNS`, which should be:
        ```
        root:root@tcp(database:3306)/backend_db?charset=utf8mb4&parseTime=True&loc=Local
        ```
    - Open the `main.go` file and ensure the correctness of `r.Run()`, which should be:
        ```go
        r.Run("0.0.0.0:8081")
        ```
7. Return to the project root directory:
    ```bash
    cd ..
    ```
8. Copy `docker-compose.yml` from `.docker` to project root, overwriting if necessary:
    ```bash
    xcopy /y .docker\docker-compose.yml .
   ```
9.  Run Docker Compose to automatically create containers:
    ```bash
    docker-compose up -d
    ```
   or
    ```bash
    docker compose up -d
    ```
10. Access the website through your browser by visiting [http://localhost:3000/](http://localhost:3000/)

# Installing the Program on Your Computer

To install the program directly on your computer, go to the [dev branch](https://github.com/flexix-developer/CE66-17-WebFrontendBuilder/tree/dev) on GitHub.
