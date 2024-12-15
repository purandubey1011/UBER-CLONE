# User Authentication API Documentation

This documentation provides details about the `/users/register` and `/users/login` endpoints for managing user authentication.

---

## **Endpoints Overview**
1. `/users/register` - Registers a new user and returns a JWT token.
2. `/users/login` - Authenticates an existing user and returns a JWT token.

---

## **1. User Registration**

### **Endpoint**: `/users/register`
### **Method**: `POST`

### **Description**:
This endpoint is used to register a new user. It validates the input data, securely hashes the user's password, and stores the information in the database. Upon success, it generates a JWT token and returns user data.

---

### **Request Specifications**

#### **Request Body**:
| Field               | Type   | Requirement             | Description                            |
|---------------------|--------|-------------------------|----------------------------------------|
| `fullname.firstname` | string | Required (min: 3 chars) | First name of the user                |
| `fullname.lastname`  | string | Required (min: 3 chars) | Last name of the user                 |
| `email`             | string | Required (min: 5 chars) | Valid email address of the user       |
| `password`          | string | Required (min: 6 chars) | Secure password for the user's account|

---

#### **Example Request**:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
