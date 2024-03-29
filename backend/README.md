# Installing the Program on Your Computer

## System Requirements
1. Operating System: Windows, macOS, or Linux
2. Minimum RAM: 4 GB
3. Minimum Disk Space: 10 GB
4. Screen Resolution: At least 1920x1080 pixels

## Installation Steps
1. Install Visual Studio Code or any other Text Editor you prefer.
2. Download and install [Node.js version 20.9.0](https://nodejs.org/en/blog/release/v20.9.0/)
3. Download and install [Golang version 1.21.5](https://go.dev/dl/)
4. Download and install [Xampp version 8.0.30](https://www.apachefriends.org/download.html)
5. Open Terminal or Command Prompt and navigate to the directory where you want to install the project.
6. Clone the project from GitHub using the command:
```git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git```
1. Navigate to the cloned folder. You'll find frontend, backend folders.
2. For Web Application, go to the frontend folder.
3. Use the command `npm install` to install the required dependencies.
4.  Use the command `npm start` to open the website in your browser.
5.  For Web Server, open Xampp and start `Apache` and `MySQL` modules.
6.  Open your browser and go to http://localhost/phpmyadmin/ to create a database named `backend_db` with Collation as `utf8mb4_general_ci`.
7.  For API Server, go to the backend folder.
8.  Open the .env file and verify the correctness of `MYSQL_DNS`, which should be `root:@tcp(localhost:3306)/backend_db?charset=utf8mb4&parseTime=True&loc=Local`.
9. Open the main.go file and and verify the correctness of `r.Run()`, which should be `r.Run("localhost:8081")`
10. Use the command `go get .` to install the required libraries.
11. Use the command `go run .` to start the API Server.
12. Access the website through your browser by visiting [http://localhost:3000/](http://localhost:3000/)