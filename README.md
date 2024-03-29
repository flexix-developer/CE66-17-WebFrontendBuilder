# Installation Guide

## Installing the Program with Docker

### System Requirements
- Operating System: Windows, macOS, or Linux
- Minimum CPU: 2 CPU cores
- Minimum RAM: 8 GB
- Minimum Disk Space: 15 GB
- Screen Resolution: At least 1920x1080 pixels

### Installation Steps
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Install [Docker Compose](https://docs.docker.com/compose/install/)
3. Clone the repository:
    ```bash
    git clone https://github.com/flexix-developer/CE66-17-WebFrontendBuilder.git
    ```
4. Navigate to the project directory:
    ```bash
    cd CE66-17-WebFrontendBuilder
    ```
5. Run Docker Compose:
    ```bash
    docker compose up -d
    ```
   or
    ```bash
    docker-compose up -d
    ```

6. Access the website through your browser by visiting [http://localhost:3000/](http://localhost:3000/)

## Installing the Program on Your Computer

1. Go to the [dev branch](https://github.com/flexix-developer/CE66-17-WebFrontendBuilder/tree/dev) on GitHub or visit `https://github.com/flexix-developer/CE66-17-WebFrontendBuilder/tree/dev`

### Additional Notes
- Docker is recommended for users looking for a quick setup with minimal configuration.
- For those who prefer installing directly on their system, accessing the dev branch is recommended.
- If you are unable to log in to the system, please wait for approximately 5 minutes as the database setup might still be in progress.