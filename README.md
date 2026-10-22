<div align="center">

# MediCore 🩺

### A Modern Hospital Management System

**Connecting patients, doctors, and hospital administrators through one organized healthcare platform.**

[![React Native](https://img.shields.io/badge/Mobile-React_Native-61DAFB?logo=react&logoColor=20232A)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Admin-Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Laravel](https://img.shields.io/badge/Backend-Laravel-FF2D20?logo=laravel&logoColor=white)](https://laravel.com/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

**Built under the supervision of [Dolphicode](https://github.com/dev-abo-soliman).**

</div>

---

## 📌 Table of Contents

- [About MediCore](#-about-medicore)
- [The Problem](#-the-problem)
- [Project Goals](#-project-goals)
- [Applications](#-applications)
- [User Roles and Permissions](#-user-roles-and-permissions)
- [Core Features](#-core-features)
- [Technology Stack](#-technology-stack)
- [Architecture Overview](#-architecture-overview)
- [Development Approach](#-development-approach)
- [Project Status](#-project-status)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Security Considerations](#-security-considerations)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Project Repository](#-project-repository)
- [Supervision](#-supervision)
- [License](#-license)

---

## 🩺 About MediCore

**MediCore** is a hospital management system project designed to organize essential healthcare workflows and make communication between patients, doctors, and hospital administrators more efficient.

The project consists of two main client applications:

- **Mobile Application:** Designed for patients and doctors.
- **Web Admin Dashboard:** Designed exclusively for hospital administrators.

The system is being developed incrementally, starting with a **Minimum Viable Product (MVP)** and expanding through clearly defined versions. The goal is to build a maintainable, secure, and practical software product while applying real-world software engineering practices.

> **Project status:** MediCore is under active development. The features listed in this README describe the project scope and planned capabilities; not every feature should be assumed to be implemented in the current version.

## 🎯 The Problem

Hospital workflows can become difficult to manage when doctor information, departments, schedules, user accounts, and appointments are handled separately.

MediCore aims to provide a more organized digital workflow by helping to:

- Centralize doctor and department information.
- Make it easier for patients to discover doctors and manage appointments.
- Give doctors a place to review their schedules and bookings.
- Give administrators tools to manage core hospital data.
- Establish a foundation that can be expanded as requirements evolve.

## 🚀 Project Goals

- Build a practical end-to-end software project rather than an isolated demo.
- Separate the mobile experience from the administrative web experience.
- Define clear roles and permissions for patients, doctors, and administrators.
- Design backend APIs that can serve the client applications.
- Use a relational database to organize application data.
- Start with essential workflows and expand through versioned releases.
- Improve code organization, maintainability, testing, and documentation throughout development.

## 📱 Applications

### 1. Mobile Application — Patients & Doctors

**Technology:** React Native + TypeScript

The mobile application is intended to provide role-appropriate experiences for patients and doctors.

#### Patient experience

Planned capabilities include:

- Registering an account and signing in securely.
- Managing personal profile information.
- Browsing available medical departments.
- Discovering doctors and viewing their professional information.
- Viewing doctor availability.
- Booking appointments.
- Reviewing upcoming and previous appointments.
- Cancelling appointments according to system rules.
- Receiving relevant appointment status updates as notification support is introduced.

#### Doctor experience

Planned capabilities include:

- Signing in to a doctor account created through the administrative workflow.
- Managing permitted profile information.
- Viewing assigned appointments.
- Reviewing appointment details.
- Viewing and managing availability within administrator-defined rules.
- Tracking appointment status.

### 2. Web Admin Dashboard — Administrators

**Technology:** Next.js + TypeScript

The web dashboard is intended for authorized administrators to manage the system from one place.

Planned capabilities include:

- Viewing a dashboard with key operational statistics.
- Managing medical departments.
- Creating and managing doctor accounts.
- Assigning doctors to departments.
- Configuring doctor working schedules.
- Managing user accounts.
- Reviewing and managing appointments.
- Viewing essential system activity and summary information as audit features are introduced.

**Access note:** The admin dashboard is intended for administrators only. Patients and doctors use the mobile application.

## 👥 User Roles and Permissions

The system is planned around role-based access control (RBAC).

| Role | Main responsibilities | Intended access |
|---|---|---|
| **Patient** | Manage a personal profile, browse doctors and departments, book and follow appointments | Patient features in the mobile app |
| **Doctor** | Review assigned appointments and manage permitted availability or profile details | Doctor features in the mobile app |
| **Administrator** | Manage departments, doctors, users, schedules, and appointments | Web admin dashboard |

Authorization must be enforced by the backend, not only by hiding or showing screens in the frontend. Users should only be able to access records and actions permitted for their role.

## ✨ Core Features

The following list represents the intended functional scope. Implementation status may vary by release.

### Authentication and accounts
- User registration and sign-in.
- Secure password handling.
- Role-aware access.
- Doctor account creation through the administrative workflow.
- Profile management.

### Department management
- Create, view, update, and remove departments, subject to data-integrity rules.
- Associate doctors with departments.
- Display department information in the mobile application.

### Doctor management
- Create doctor accounts and maintain doctor information.
- Assign doctors to departments.
- Configure working schedules.
- Display doctor profiles and availability to patients.

### Appointment management
- Browse available appointment slots.
- Book appointments.
- View appointment details and status.
- Cancel or update appointments according to authorization and business rules.
- Prevent conflicting bookings and double-booking through backend validation and database-safe operations.

### Administration
- View operational summaries.
- Manage users, doctors, departments, and appointments.
- Apply role-based permissions to administrative actions.

### Future enhancements
Potential enhancements may include notifications, appointment reminders, audit logs, reporting, and additional operational tools. These should be introduced only when their requirements and implementation are defined.

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Mobile | React Native | Cross-platform mobile application |
| Mobile language | TypeScript | Type-safe mobile application development |
| Admin web | Next.js | Web-based administrative dashboard |
| Web language | TypeScript | Type-safe frontend development |
| Backend | PHP + Laravel | API development and application business logic |
| Database | MySQL | Relational data storage |
| Architecture direction | Microservices-oriented | Separating responsibilities into services as the design evolves |
| Version control | Git + GitHub | Source control and collaboration |

> **Architecture note:** “Microservices” is the intended architectural direction. The exact service boundaries, inter-service communication, deployment topology, and infrastructure should be documented here once they are finalized in the implementation. Do not assume that every service is already independently deployed.

## 🏗️ Architecture Overview

At a high level, the system is organized into three layers:

```text
                    ┌─────────────────────────┐
                    │     Mobile App          │
                    │  React Native + TS      │
                    │  Patients & Doctors     │
                    └────────────┬────────────┘
                                 │
                                 │ HTTPS / API
                                 ▼
                    ┌─────────────────────────┐
                    │    Laravel Backend      │
                    │ Authentication, Rules, │
                    │ Validation and APIs     │
                    └────────────┬────────────┘
                                 │
                                 │ Data access
                                 ▼
                    ┌─────────────────────────┐
                    │        MySQL            │
                    │ Relational Application  │
                    │         Data            │
                    └─────────────────────────┘
                                 ▲
                                 │ HTTPS / API
                    ┌────────────┴────────────┐
                    │     Admin Dashboard     │
                    │    Next.js + TypeScript │
                    │   Administrators only   │
                    └─────────────────────────┘
```

This diagram describes the **logical system flow**, not a finalized deployment diagram. If the implementation is split into independently deployable microservices, update the diagram to show the actual services, databases, and communication mechanisms.

### Architectural principles

- **Separation of concerns:** UI, business rules, and persistence should have clear responsibilities.
- **API-first integration:** Client applications communicate with backend endpoints rather than accessing the database directly.
- **Backend validation:** Validate incoming data and enforce business rules on the server.
- **Authorization by role and resource:** Verify both what a user may do and which records they may access.
- **Data integrity:** Protect relationships between users, doctors, departments, schedules, and appointments.
- **Incremental delivery:** Keep the first release focused and expand only after the core workflows are stable.

## 🔄 Development Approach

MediCore follows an **MVP-first, version-by-version** development approach.

### What MVP means in this project

The Minimum Viable Product is the smallest useful release that supports the essential workflows. It is not intended to include every possible hospital feature from day one.

A possible delivery sequence is:

1. **Foundation:** Confirm requirements, define roles, establish the repository structure, and prepare the development environments.
2. **Authentication and access:** Implement account workflows and backend authorization.
3. **Core hospital data:** Implement departments, doctors, and working schedules.
4. **Appointments:** Add availability, booking, status tracking, and conflict prevention.
5. **Admin workflows:** Complete the core dashboard management screens.
6. **Quality and release preparation:** Test key workflows, review security, document setup, and prepare a release.

The sequence may change as requirements and implementation details are validated. Each version should have a defined scope, acceptance criteria, and testing checklist.

## 📍 Project Status

MediCore is a work in progress.

- [ ] Finalize the MVP scope and acceptance criteria.
- [ ] Document the final repository and service structure.
- [ ] Complete authentication and role-based authorization.
- [ ] Complete department and doctor management.
- [ ] Complete doctor schedule management.
- [ ] Complete appointment booking and conflict prevention.
- [ ] Complete the essential patient and doctor mobile workflows.
- [ ] Complete the core administrator dashboard.
- [ ] Add automated tests for critical business rules.
- [ ] Document deployment and production configuration.

Update this checklist as each item is implemented and verified. A checked item should mean the functionality has been implemented and tested, not merely designed.

## 💻 Getting Started

Because MediCore contains multiple applications, setup instructions depend on the exact repository structure and the versions of the tools used. The following steps are a general starting point; verify the project-specific commands and environment variables in each application's configuration.

### Prerequisites

Install the tools required by the parts of the project you intend to run:

- Git
- PHP version compatible with the Laravel project's `composer.json`
- Composer
- Node.js version compatible with the relevant frontend projects
- npm, Yarn, or the package manager specified by the project lockfile
- MySQL
- React Native's required Android/iOS development tools for mobile development

For official installation guidance:

- [Git](https://git-scm.com/)
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [Laravel](https://laravel.com/docs)
- [React Native](https://reactnative.dev/docs/environment-setup)
- [Next.js](https://nextjs.org/docs)
- [MySQL](https://dev.mysql.com/doc/)

### 1. Clone the repository

```bash
git clone https://github.com/dev-abo-soliman/Hospital-MS.git
cd Hospital-MS
```

### 2. Inspect the repository structure

Before installing dependencies, identify the actual application directories and their setup instructions.

```bash
ls
```

Look for files such as `composer.json`, `package.json`, `.env.example`, and the relevant README files. The exact folder names and commands depend on the repository's current structure.

### 3. Configure the backend

Navigate to the Laravel application directory (if it is separate) and install its dependencies:

```bash
composer install
```

If the application provides an example environment file, copy it and configure the local values:

```bash
cp .env.example .env
```

Generate the Laravel application key if the application requires it:

```bash
php artisan key:generate
```

Configure the MySQL connection in the backend environment file. For a typical Laravel setup, the relevant variables look like this:

```dotenv
APP_NAME=MediCore
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=medicore
DB_USERNAME=your_local_mysql_username
DB_PASSWORD=your_local_mysql_password
```

Use the variable names and configuration required by the actual application. Do not commit real credentials or production secrets.

If migrations are configured and the database is ready, run:

```bash
php artisan migrate
```

Start the Laravel development server using the command appropriate for the backend setup:

```bash
php artisan serve
```

### 4. Configure the frontend applications

For each frontend application, navigate to its directory and install dependencies using the package manager indicated by its lockfile. For example, when an npm lockfile is present:

```bash
npm install
```

Use the application's documented environment variables to configure the backend API base URL. Then start the relevant development server using the scripts defined in its `package.json`.

For the Next.js dashboard, a typical development command is:

```bash
npm run dev
```

For the React Native app, follow the project's scripts and the official React Native environment setup for the target platform.

> **Important:** The commands above are general examples, not a guarantee that the repository uses this exact directory structure or script configuration. Check the actual project files before running them. If the backend is split into multiple services, follow the setup instructions for each service.

## ⚙️ Configuration

Keep environment-specific configuration outside source control.

Depending on the implemented features, configuration may include:

- Application environment and base URLs.
- MySQL connection settings.
- Authentication and session/token settings.
- Backend API URLs for the mobile app and admin dashboard.
- Notification provider credentials, if notifications are implemented.
- Logging and monitoring settings for deployed environments.

Never commit API keys, private tokens, production passwords, signing keys, or real patient data.

## 🔐 Security Considerations

Healthcare-related software can process sensitive personal information. Security and privacy must be considered throughout development.

- **Password storage:** Store passwords using Laravel's supported secure hashing mechanisms. Never store plaintext passwords.
- **Authentication:** Use a well-maintained authentication approach appropriate to the application clients.
- **Authorization:** Enforce permissions on the backend for every protected operation.
- **Input validation:** Validate request payloads and reject invalid or unexpected values.
- **Appointment integrity:** Validate availability on the server and use database transactions or appropriate locking where necessary to prevent conflicting bookings.
- **Sensitive data:** Collect and retain only the data needed for defined workflows.
- **Transport security:** Use HTTPS in deployed environments.
- **Secrets management:** Keep credentials in environment configuration or a suitable secret manager, not in Git.
- **Error handling:** Avoid exposing stack traces, credentials, or internal implementation details in production responses.
- **Testing:** Test authentication, authorization boundaries, validation failures, and appointment conflict scenarios.
- **Privacy and compliance:** Review applicable healthcare and personal-data protection requirements before handling real patient information.

This repository should not be treated as production-ready for real patient data until security, privacy, operational, and compliance requirements have been reviewed and validated.

## 🗺️ Roadmap

The roadmap below describes potential milestones. Priorities and dates should be updated as development progresses.

- [ ] **MVP:** Core authentication, departments, doctors, schedules, and appointments.
- [ ] **Patient experience:** Doctor discovery and appointment management.
- [ ] **Doctor experience:** Appointment overview and schedule workflows.
- [ ] **Admin experience:** Core management dashboard.
- [ ] **Quality:** Automated tests, API documentation, and error handling.
- [ ] **Operational readiness:** Deployment documentation, monitoring, backups, and recovery procedures.
- [ ] **Future improvements:** Notifications, reporting, and other features selected based on validated requirements.

## 🤝 Contributing

Contributions, suggestions, and constructive feedback are welcome.

If you would like to contribute:

1. Review the current project scope and open issues.
2. Discuss significant changes before starting large amounts of work.
3. Create a focused branch for your change.
4. Keep changes small and aligned with the project's conventions.
5. Add or update tests when changing application behavior.
6. Update documentation when setup steps, APIs, or features change.
7. Open a pull request with a clear explanation of the change and how it was tested.

Please do not include real patient information, passwords, access tokens, or other secrets in issues, commits, or pull requests.

## 🔗 Project Repository

**GitHub:** [dev-abo-soliman/Hospital-MS](https://github.com/dev-abo-soliman/Hospital-MS)

For questions, feature discussions, or collaboration, please use the repository's available issue and pull-request workflows.

## 🐬 Supervision

MediCore is being developed under the supervision of **Dolphicode**, with a focus on practical software engineering, incremental delivery, and building a complete application from requirements through implementation.

## 📄 License

No license has been specified in this README. Unless a license file is added to the repository, do not assume that the code is available for unrestricted reuse, redistribution, or commercial use.

If you intend to publish the project as open source, add a suitable `LICENSE` file and update this section.

---

<div align="center">

**MediCore — Building better healthcare workflows, one version at a time.** 🩺

Made with 💙 under the supervision of **Dolphicode**

</div>
