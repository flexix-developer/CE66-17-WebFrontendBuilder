# Installation Guide

## Installing the Program on Your Computer

### System Requirements
- Operating System: Windows, macOS, or Linux
- Minimum CPU: 1 CPU Core
- Minimum RAM: 4 GB
- Minimum Disk Space: 10 GB
- Screen Resolution: At least 1920x1080 pixels

### Installation Steps
1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Download and install [Node.js version 20.9.0](https://nodejs.org/en/blog/release/v20.9.0/).
3. Download and install [Golang version 1.21.5](https://go.dev/dl/).
4. Download and install [Xampp](https://www.apachefriends.org/download.html).
5. Clone the project from GitHub:
    ```bash
    git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git
    ```
6. Navigate to the project directory:
    ```bash
    cd CE66-17-WebFrontendBuilder
    ```
7. **For Web Application:**
    - Navigate to the frontend folder:
        ```bash
        cd frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the website:
        ```bash
        npm start
        ```
8. **For Web Server:**
    - Start `Apache` and `MySQL` modules in Xampp.
    - Create a database named `backend_db` with Collation as `utf8mb4_general_ci` in [Phpmyadmin](http://localhost/phpmyadmin/).
9. **For API Server:**
    - Navigate to the backend folder:
        ```bash
        cd ../backend
        ```
    - Verify the `.env` file:
        - Ensure `MYSQL_DNS` is set to `root:@tcp(localhost:3306)/backend_db?charset=utf8mb4&parseTime=True&loc=Local`.
    - Verify `main.go`:
        - Ensure `r.Run()` is set to `r.Run("localhost:8081")`.
    - Install required libraries:
        ```bash
        go get .
        ```
    - Start the API Server:
        ```bash
        go run .
        ```
10. Access the website through your browser by visiting [http://localhost:3000/](http://localhost:3000/).

## Installing the Program with Docker

To install the program using Docker, visit the [main branch](https://github.com/flexix-developer/CE66-17-WebFrontendBuilder/tree/main) on GitHub.
