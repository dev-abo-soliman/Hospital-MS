<h1 align="center">🏥 Hospital Management System</h1>
<h3 align="center">Mobile App (Frontend)</h3>

<p align="center">
  A cross-platform, role-based mobile app for a single-hospital management system,<br>
  built with React Native (Expo) and TypeScript on top of a Laravel microservices backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/React_Native-20232A?logo=react&logoColor=61DAFB" alt="React Native">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/React_Query-FF4154?logo=reactquery&logoColor=white" alt="React Query">
  <img src="https://img.shields.io/badge/Laravel_Backend-FF2D20?logo=laravel&logoColor=white" alt="Laravel Backend">
  <img src="https://img.shields.io/badge/status-Release_1_in_progress-orange" alt="Status">
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Features by Role](#-features-by-role)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Architecture Notes](#-architecture-notes)
- [Security Rules](#-security-rules)
- [Testing](#-testing)
- [Roadmap](#-roadmap)
- [Conventions](#-conventions)
- [Author](#-author)

---

## 🔎 Overview

|                     |                                                              |
| ------------------- | ------------------------------------------------------------ |
| **Scope**           | One hospital, low user load                                  |
| **Platforms**       | Android and iOS (via Expo)                                   |
| **Backend**         | PHP Laravel microservices behind an API Gateway (REST + JWT) |
| **Roles**           | `PATIENT`, `DOCTOR`, `ADMIN`                                 |
| **Current release** | Release 1: Auth, Patient, Doctor & Department, Appointment   |

The project started as a learning project, but it is built with production-grade standards for security, testing, and structure.

The app is **role-based**: after login, each user sees only the screens that belong to their role. All validation and authorization are enforced on the **server**; the app only mirrors those rules for a better user experience.

---

## 📱 Screenshots

> Screenshots will be added as the screens are completed.

<!--
  Add your images to docs/screenshots/, then remove this comment wrapper.

| Login | Doctors | Booking |
|---|---|---|
| <img src="docs/screenshots/login.png" width="220"> | <img src="docs/screenshots/doctors.png" width="220"> | <img src="docs/screenshots/booking.png" width="220"> |
-->

---

## 🧰 Tech Stack

| Library                                                       | Purpose                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------ |
| **Expo** + **React Native**                                   | App runtime and tooling, with no paid services needed        |
| **TypeScript**                                                | Type safety across the whole app                             |
| **expo-router**                                               | File-based navigation, with route groups per role            |
| **axios**                                                     | API client with interceptors (attach token, auto refresh)    |
| **expo-secure-store**                                         | Secure storage for access and refresh tokens                 |
| **@tanstack/react-query**                                     | Server state, caching, and loading / error / empty states    |
| **zustand**                                                   | Lightweight session state (current user, role, auth status)  |
| **react-hook-form** + **zod**                                 | Forms and validation; zod schemas also define API data types |
| **date-fns**                                                  | Date and time handling for appointments                      |
| **@react-native-community/datetimepicker**                    | Date and time picking in the booking screen                  |
| **react-native-safe-area-context** / **react-native-screens** | Required by expo-router                                      |
| **jest-expo** + **@testing-library/react-native**             | Unit and component tests                                     |

**Intentionally not used (for now):**

- A UI kit such as NativeWind or React Native Paper. We start with `StyleSheet` and a simple theme file.
- Any mocking library. Mock data lives in the `services` layer.

---

## 👥 Features by Role

Every screen handles three states: **loading**, **error**, and **empty**.

<details open>
<summary><b>🌐 Shared</b></summary>

<br>

- Splash screen
- Patient registration (public signup creates patients only)
- Login
- Forgot / change password
- Logout (from Settings)

</details>

<details>
<summary><b>🧑‍🤝‍🧑 Patient</b></summary>

<br>

- Home
- Departments
- Doctors list (filter + search) and doctor details
- Book an appointment
- My appointments and appointment details
- Profile

</details>

<details>
<summary><b>🩺 Doctor</b></summary>

<br>

- Home (today's appointments)
- Appointments schedule
- Appointment details (basic patient info + change status)
- Professional profile

</details>

<details>
<summary><b>🛠️ Admin</b></summary>

<br>

- Home
- Manage departments
- Manage doctors (create the account, link it to a department and schedule)
- Manage users (activate / deactivate)
- All appointments

</details>

> **If time is tight,** these screens are postponed: forgot password, patient appointment details, doctor professional profile, admin home, and user management. The admin starts with three screens: departments, doctors, and appointments.

---

## 🗂️ Project Structure

<details>
<summary><b>Click to expand</b></summary>

<br>

```
hospital-app/
├── app/                      # Routes (expo-router)
│   ├── (auth)/               # login, register, forgot password
│   ├── (patient)/            # patient screens
│   ├── (doctor)/             # doctor screens
│   ├── (admin)/              # admin screens
│   └── _layout.tsx           # root layout + auth guard
├── components/               # Reusable UI (Button, Input, Card, StateViews)
├── services/                 # API calls, one file per backend service
│   ├── api.ts                # axios instance + interceptors
│   ├── auth.service.ts
│   ├── doctor.service.ts
│   ├── patient.service.ts
│   └── appointment.service.ts
├── store/                    # zustand stores (session)
├── types/                    # TypeScript types and zod schemas (API contract)
├── constants/                # theme, colors, config
├── hooks/                    # custom hooks (queries, mutations)
├── utils/                    # helpers (formatters, error mapping)
└── __tests__/                # tests
```

> This layout is the planned structure and may be refined as screens are built.

</details>

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS) and npm
- **Expo Go** app on your phone (Android or iOS)
- Phone and computer on the **same network**

### Installation

```bash
git clone <your-repo-url>
cd Hospital-MS/Front-end/hospital-app
npm install
```

### Run

```bash
npx expo start
```

Scan the QR code with Expo Go.

### Scripts

| Command            | Description            |
| ------------------ | ---------------------- |
| `npx expo start`   | Start the dev server   |
| `npm test`         | Run tests              |
| `npx tsc --noEmit` | Type-check the project |

---

## 🔐 Environment Variables

Create a `.env` file in the project root (**never commit it**):

```env
EXPO_PUBLIC_API_URL=http://<YOUR_COMPUTER_LAN_IP>:<GATEWAY_PORT>/api
EXPO_PUBLIC_USE_MOCK=true
```

| Variable               | Description                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| `EXPO_PUBLIC_API_URL`  | Base URL of the API Gateway. On a real device, use your computer's LAN IP, **not** `localhost` |
| `EXPO_PUBLIC_USE_MOCK` | `true` uses mock data from the `services` layer; `false` calls the real backend                |

---

## 🏛️ Architecture Notes

<details>
<summary><b>Mock-first development</b></summary>

<br>

The frontend can run on mock data until the API contract is final. Mock data **must match the contract exactly** (same fields, same response and error shapes), so switching to the real API means changing the service functions only, not the screens.

</details>

<details>
<summary><b>Auth flow</b></summary>

<br>

1. The user logs in and receives an **access token** and a **refresh token**.
2. Both tokens are stored in `expo-secure-store`.
3. An axios request interceptor attaches the access token to every request.
4. On `401`, a response interceptor calls the refresh endpoint once, then retries the original request.
5. If refresh fails, the session is cleared and the user returns to the login screen.

</details>

<details>
<summary><b>Role-based navigation</b></summary>

<br>

The root layout reads the user's role from the session store and redirects to the matching route group: `(patient)`, `(doctor)`, or `(admin)`. A user cannot open another role's routes.

</details>

<details>
<summary><b>Unified responses</b></summary>

<br>

All endpoints return a unified success and error shape (defined in the API contract). The API client maps errors to user-friendly messages in one place.

</details>

---

## 🛡️ Security Rules

These rules are fixed and apply to the whole project:

- A patient must never see another patient's data by changing an ID. The server enforces this.
- The admin does **not** automatically get access to medical records.
- All validation and permissions are enforced on the server; the app is not a security boundary.
- Tokens are stored only in secure storage, never in plain storage or logs.
- No secrets in the repository; use `.env` and keep it in `.gitignore`.

---

## 🧪 Testing

- Unit tests for utilities, validation schemas, and the auth / refresh logic.
- Component tests for forms and for loading / error / empty states.
- Manual testing on a **real device** before each release.

```bash
npm test
```

---

## 🗺️ Roadmap

### Release 1 (current)

- [ ] Project setup (TypeScript, navigation, theme, API client)
- [ ] Secure token storage, session expiry handling, refresh
- [ ] Auth screens
- [ ] Patient screens
- [ ] Doctor screens
- [ ] Admin screens
- [ ] Loading / error / empty states on every screen
- [ ] Integration with the real APIs
- [ ] Testing on a real device

### Later releases

| Release | Scope                                        |
| ------- | -------------------------------------------- |
| **2**   | Medical / clinical records and prescriptions |
| **3**   | Laboratory and notifications                 |
| **4**   | Reports, payments, and insurance             |

### Before real use

Staging environment, database backups (with a tested restore), HTTPS, a pilot with real users in one department, then launch. Hosting for real patient data must be a small paid server, after reviewing the Egyptian data protection law.

---

## 📐 Conventions

- TypeScript strict mode; no `any` unless justified.
- One screen = one route file; logic goes in hooks, UI in components.
- API data types come from the contract and zod schemas, not guessed.
- Small, focused commits with clear messages.

---

## 👤 Author

**Mahmoud Mohamed** (Dolphicode)
