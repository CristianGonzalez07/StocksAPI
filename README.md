
# StocksAPI

  

StocksAPI is an API designed to authenticate users and allow them to manage favorite stocks related to the stock market. With this API, users can register, login, and add or remove actions from their favorites list.

  

## Getting Started

  
  

#### Prerequisites

* Make sure you have Node.js 14.16.1 or higher installed on your system. You can download from the official Node.js site: https://nodejs.org/en/download/releases/

  

* Make sure you have Mysql 8.0.15 or higher installed on your system. You can download this release from the official Mysql site: https://dev.mysql.com/downloads/mysql/

  

* Make sure you have ts-node installed on your system. You can you can do it in the following way:

  

```bash

npm install -g ts-node

```

### Installation

  

1. Clone the repository to your local machine:

```bash

git clone https://github.com/CristianGonzalez07/StocksAPI.git

```

2. Navigate to the project directory:

```bash

cd StocksAPI

```

3. Install the necessary dependencies by running the following command:

```bash

npm install

```

4. Create a .env file in the root of the project with the following structure:

```bash

DB_HOST=your_host

DB_USER=your_user

DB_PASSWORD=your_password

DB_NAME=your_database_name

PORT=your_port

```

### Usage

  

1. Start the server:

```bash

npm start

```

2. Once the server is running, you can access the API endpoints using a tool like cURL or Postman. The base URL for the API is http://localhost:3000/
```bash

user:"user test"
password:"1234"

```
  

3. You can read the documentation at http://localhost:3000/docs

4. If you want to do a quick test, import into your db the sql files inside the dbBackup folder. You can use the test user with the following credentials:
  

### LICENSE

  

StocksAPI is licensed under the [MIT License](https://mit-license.org/).

  

### Contact

  

If you have any questions or suggestions, feel free to contact the project owner:

  

* Name: Cristian Gonzalez

* GitHub: CristianGonzalez07

* Email: cristian.gonzalez.dev.01@gmail.com

  

Thank you for using StocksAPI!