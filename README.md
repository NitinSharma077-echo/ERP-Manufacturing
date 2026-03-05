# ERP Management System

A full-stack ERP (Enterprise Resource Planning) web application designed to manage business operations such as inventory, products, and system management through a modern web interface.

The project is built with a **Node.js backend** and a **Vite-based frontend**, providing a fast and scalable structure for enterprise applications.

---

## Features

* User authentication
* Dashboard overview
* Inventory management
* Product management
* REST API backend
* Modern frontend interface
* Scalable project structure

---

## Tech Stack

### Backend

* Node.js
* Express.js
* REST API
* Environment configuration with `.env`

### Frontend

* Vite
* JavaScript
* HTML5
* CSS3

---

## Project Structure

```
ERP-M
│
├── backend
│   ├── src
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── images
│   ├── login.png
│   ├── dashboard.png
│   └── inventory.png
│
├── README.md
└── .gitignore
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/erp-system.git
cd erp-system
```

---

## Backend Setup

Navigate to the backend folder and install dependencies.

```
cd backend
npm install
```

Run the backend server:

```
node server.js
```

The backend server will start on the configured port.

---

## Frontend Setup

Open a new terminal and navigate to the frontend folder.

```
cd frontend
npm install
npm run dev
```

The frontend development server will start and you can open it in your browser.

---

## Application Screenshots

### Home Page

![Home Page](images/home.png)

### Register Page

![Register Page](images/register.png)

### System Features

![Features](images/features.png)

## Environment Variables

Create a `.env` file inside the backend folder and configure necessary environment variables such as:

```
PORT=5000
DATABASE_URL=your_database_connection
```

---

## Future Improvements

* Role-based authentication
* Reporting and analytics
* Order management
* Supplier management
* Deployment with Docker
* Production hosting

---

## Author

Developed as part of a full-stack ERP system project.

---

## License

This project is for educational and development purposes.
