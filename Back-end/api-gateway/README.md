Hospital Management System — API Gateway
The API Gateway is the single entry point for the Hospital Management System microservices.

Web and mobile clients communicate only with the API Gateway. The gateway receives incoming requests, identifies the target microservice, forwards the request, and returns the microservice response to the client.

Overview
The system is built using:

Laravel 13
PHP 8.3
Microservices Architecture
REST APIs
The gateway runs on port 8000, while the individual microservices run on their own ports.

Architecture
Client
  │
  ▼
API Gateway :8000
  │
  ├── Auth Service :8001
  ├── Patient Service :8002
  └── Appointment Service :8003
The client does not communicate directly with the microservices. All requests go through the API Gateway.

How It Works
When a client sends a request, the gateway performs the following process:

Reads the service name from the request URL.
Checks whether the service is registered in the gateway configuration.
Rejects unknown services to prevent the gateway from becoming an open proxy.
Builds the target microservice URL.
Forwards the original request to the target service.
Preserves the HTTP method, query parameters, and request body.
Waits for the microservice response.
Returns the response body and HTTP status code to the client.
For example, a request targeting the patient service is forwarded to the Patient Service internally.

Registered Services
Service	Gateway Prefix	Default Port
Auth	/api/auth/...	8001
Patient	/api/patient/...	8002
Appointment	/api/appointment/...	8003
Each service must follow the same URL prefix inside its own microservice.

For example, requests beginning with /api/patient are forwarded to the Patient Service.

Installation
Clone the repository and navigate to the API Gateway directory.

Install the PHP dependencies using Composer, create the Laravel environment file, and generate the application key.

After that, configure the URLs of the Auth, Patient, and Appointment services in the environment configuration.

The default local setup uses:

API Gateway: 8000
Auth Service: 8001
Patient Service: 8002
Appointment Service: 8003
Running the Gateway
Start the Laravel application on port 8000.

Once the gateway is running, clients can communicate with the Hospital Management System through the gateway instead of accessing the microservices directly.

Project Structure
The gateway mainly consists of three important parts:

Gateway Controller
Responsible for receiving incoming requests, resolving the target service, forwarding requests, and returning the service response.

Service Configuration
Contains the list of registered microservices and their corresponding URLs.

This configuration acts as a whitelist and prevents requests from being forwarded to arbitrary destinations.

API Routes
The gateway uses a catch-all API route to support different services and nested paths.

This allows requests such as patient records, appointments, authentication endpoints, and other nested resources to be forwarded correctly.

Request Forwarding
The gateway forwards the important parts of the original request:

HTTP method
Query parameters
JSON request body
API path
Service response status
Service response body
The gateway currently uses a 10-second request timeout when communicating with microservices.

Response Handling
The gateway returns the response received from the target microservice.

This means that if a service returns a successful response, the gateway returns the same response.

If a service returns an error, the gateway passes the service's status code and response body back to the client.

Example Cases
Situation	Gateway Response
Valid service	Microservice response
Unknown service	404 Service not found
Microservice returns an error	Same status and response
Microservice is unavailable	503 Service unavailable — planned
Security
Security is an important part of the gateway architecture.

Service Whitelist
Only services registered in the gateway configuration can receive forwarded requests.

This prevents users from using the gateway as an open proxy.

Internal Microservices
Microservices should not be publicly accessible.

Only the API Gateway should be exposed to external clients.

The recommended architecture is:

Internet
   │
   ▼
API Gateway
   │
   ├── Auth Service
   ├── Patient Service
   └── Appointment Service

Internal Network
The individual services should communicate within the internal network and should not be directly accessible from the public internet.

API Usage
Clients should always communicate with the gateway.

For example:

Patient requests go through /api/patient
Authentication requests go through /api/auth
Appointment requests go through /api/appointment
The gateway then determines which internal service should handle the request.

This gives clients a single API endpoint regardless of how many microservices exist behind it.

Adding a New Microservice
To add a new microservice:

Add its URL to the environment configuration.
Register the service in the gateway configuration.
Make sure the service uses the same API prefix as its gateway service name.
Start the new microservice.
Test the endpoint through the gateway.
For example, if a new service is called billing, the gateway should expose it under the billing API prefix and forward requests to the configured Billing Service.

Error Handling
The gateway currently handles unknown services by returning a 404 response.

Improved service availability handling is planned.

When a microservice is unavailable or cannot be reached, the gateway will return a 503 Service Unavailable response instead of exposing an internal connection error.

Roadmap
Handle microservice connection failures
Return 503 Service Unavailable when a service is down
Add authentication at the gateway
Add Laravel Sanctum authentication
Protect private services with authentication middleware
Keep login and registration endpoints public
Forward authenticated user identity to microservices
Support file uploads
Add request logging
Add rate limiting
Add service health checks
Improve centralized error handling
Authentication — Planned
Authentication will eventually be handled at the API Gateway.

The expected flow is:

Client
  │
  ▼
API Gateway
  │
  ▼
Auth Service
  │
  ▼
Authentication Token
  │
  ▼
Client
For protected requests:

Client
  │
  ▼
API Gateway
  │
  ├── Validate Authentication
  │
  ▼
Target Microservice
  │
  ▼
Response
Authentication endpoints such as login and registration will remain publicly accessible, while protected services will require authentication.

Development Guidelines
When adding or modifying a microservice:

Keep service names consistent.
Keep API prefixes consistent.
Register every service in the gateway configuration.
Do not expose microservices directly to the public internet.
Do not allow arbitrary target URLs.
Keep service URLs in environment variables.
Test every service through the gateway before exposing it to clients.
Troubleshooting
Service Not Found
If the gateway returns 404 Service not found, verify that the requested service is registered in the gateway configuration.

Also make sure that the service name in the URL matches the configured service name.

Service Is Unavailable
If a service cannot be reached, verify that:

The service is running.
The configured service URL is correct.
The service port is available.
The gateway can communicate with the service.
The internal network configuration is correct.
Incorrect Route
Make sure the gateway prefix and the microservice prefix are identical.

For example, the Patient Service should use the patient API prefix consistently across both the gateway and the service itself.

Technologies
Laravel 13
PHP 8.3
REST API
Microservices Architecture
Laravel HTTP Client
Repository
Hospital Management System

The project contains the API Gateway and the Hospital Management System microservices.

