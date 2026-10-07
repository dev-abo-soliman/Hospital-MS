# 🏥 Hospital Management System

A modern **Hospital Management System** designed to digitize and simplify hospital operations, patient management, appointments, medical records, prescriptions, laboratory services, and notifications.

The system is built using a **Microservices Architecture** with a React Native mobile application and Laravel-based backend services.

---

## 📌 Overview

The goal of this project is to build a scalable hospital management platform that helps patients, doctors, and administrators manage healthcare operations through a unified digital system.

The system focuses on:

- 👤 User authentication and authorization
- 🧑‍⚕️ Doctor management
- 🧑‍🦽 Patient management
- 🏥 Departments
- 📅 Appointments
- 🩺 Medical records
- 💊 Prescriptions
- 🧪 Laboratory services
- 🔔 Notifications
- 📊 Administration and system management

---

# 🎯 Project Goals

The main goals of the system are:

- Reduce manual hospital operations.
- Improve patient experience.
- Make appointment management easier.
- Centralize medical information.
- Improve communication between patients and doctors.
- Provide a scalable backend architecture.
- Support multiple hospital services.
- Build a production-ready healthcare platform.

---

# 🏗️ Architecture

The project follows a **Microservices Architecture**.

Instead of building one large backend application, the system is divided into independent services.

```text
                         ┌─────────────────────┐
                         │   React Native App  │
                         │      Frontend       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     API Gateway     │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │    Auth     │       │   Patient   │       │   Doctor    │
       │   Service   │       │   Service   │       │ & Department│
       └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
              │                     │                     │
              ▼                     ▼                     ▼
          MySQL DB              MySQL DB              MySQL DB


              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │ Appointment │       │  Medical    │       │ Prescription│
       │   Service   │       │  Service    │       │   Service   │
       └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
              │                     │                     │
              ▼                     ▼                     ▼
          MySQL DB              MySQL DB              MySQL DB


                         ┌─────────────────────┐
                         │   Laboratory        │
                         │     Service        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                                MySQL DB


                         ┌─────────────────────┐
                         │ Notification Service│
                         └─────────────────────┘