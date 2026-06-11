# Employee_Management_CRUD

# Employee Management CRUD Application

## Overview

The Employee Management CRUD Application is a full-stack web application developed using Spring Boot, React.js, and MySQL. It allows users to perform Create, Read, Update, and Delete (CRUD) operations on employee records through a user-friendly interface.

This project demonstrates full-stack development concepts, REST API integration, database management, and frontend-backend communication.

---

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* Maven

### Frontend

* React.js
* Vite
* Axios
* HTML5
* CSS3
* JavaScript (ES6)

### Database

* MySQL

---

## Features

* Add New Employee
* View All Employees
* Update Employee Information
* Delete Employee Records
* RESTful API Architecture
* Responsive User Interface
* MySQL Database Integration
* Exception Handling
* Cross-Origin Resource Sharing (CORS) Support

---

## Project Architecture

### Backend Structure

```text
src/main/java/com/example/employeemanagement
│
├── controller
│   └── EmployeeController.java
│
├── service
│   ├── EmployeeService.java
│   └── EmployeeServiceImpl.java
│
├── repository
│   └── EmployeeRepository.java
│
├── entity
│   └── Employee.java
│
└── EmployeeManagementApplication.java
```

### Frontend Structure

```text
src
│
├── components
│   ├── EmployeeList.jsx
│   ├── AddEmployee.jsx
│   └── UpdateEmployee.jsx
│
├── services
│   └── EmployeeService.js
│
├── App.jsx
└── main.jsx
```

---

## Database Configuration

### Create Database

```sql
CREATE DATABASE employee_management;
```

### Employee Table

```sql
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(150)
);
```

---

## Backend Configuration

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8080
```

---

## API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/employees      | Get All Employees  |
| GET    | /api/employees/{id} | Get Employee By ID |
| POST   | /api/employees      | Create Employee    |
| PUT    | /api/employees/{id} | Update Employee    |
| DELETE | /api/employees/{id} | Delete Employee    |

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/Employee_Management_CRUD.git
```

### Backend Setup

```bash
cd Employee_Backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend Setup

```bash
cd Employee_Frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Learning Outcomes

* Spring Boot REST API Development
* React.js Component-Based Architecture
* MySQL Database Integration
* CRUD Operations Implementation
* Axios API Integration
* Full Stack Application Development
* MVC Design Pattern
* RESTful Web Services

---


GitHub: https://github.com/pratikkanap
