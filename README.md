# Booking.com Clone

This project is a full-stack clone of Booking.com built with **Node.js**, **gRPC**, **React**, **Material UI**, **OlaMaps**, **PostgreSQL**, and **Stripe**. It allows users to book listings, leave reviews, and handle payments, with functionalities for user authentication, search filtering, and notifications.

## Project Structure

```plaintext
booking-clone/
├── backend/               # Node.js backend with gRPC and PostgreSQL
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # gRPC service implementations
│   │   ├── models/        # Database models
│   │   ├── proto/         # Protocol buffer files (.proto)
│   │   ├── services/      # Business logic layer
│   │   └── utils/         # Helper functions
├── frontend/              # React frontend with Material UI and OlaMaps
│   ├── public/            # Static files (e.g., index.html)
│   ├── src/               # Frontend source code
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components (e.g., Home, Profile, ListingDetails)
│   └── .env               # Environment variables for frontend
├── infra/                 # Infrastructure and deployment configurations
└── README.md              # Project documentation


Features
User Authentication: Secure user registration and login with JWT.
Search and Filtering: Filter listings by price range, location, and ratings.
Booking: Users can book listings with dynamic availability checks.
Payments: Stripe integration for secure payment processing.
User Profiles: View past bookings and manage payment methods.
Reviews: Leave and view reviews for listings.
Notifications: Email notifications for booking confirmations and cancellations.
Tech Stack
Frontend: React, Material UI, OlaMaps, Stripe
Backend: Node.js, gRPC, PostgreSQL
Infrastructure: AWS ECS, AWS RDS, Docker, GitHub Actions
Installation
Prerequisites
Node.js: Ensure you have Node.js and npm installed.
Docker: To run the project with Docker.
PostgreSQL: You can also use a local PostgreSQL database if not using Docker.
Setup
Clone the repository:

## bash
Copy code
git clone <your-repo-url>
cd booking-clone
Backend Setup:

Navigate to the backend folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create an .env file in backend/ and configure environment variables:
plaintext
Copy code
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
JWT_SECRET=your_jwt_secret
Run migrations (if using an ORM like Sequelize):
bash
Copy code
npx sequelize-cli db:migrate
Start the backend server:
bash
Copy code
npm start
Frontend Setup:

Navigate to the frontend folder:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install
Create an .env file in frontend/ and configure environment variables:
plaintext
Copy code
REACT_APP_STRIPE_KEY=your_stripe_public_key
REACT_APP_API_URL=http://localhost:5000  # Update with your backend API URL
Start the frontend server:
bash
Copy code
npm start
Run with Docker (optional):

At the project root, you can use Docker Compose:
bash
Copy code
docker-compose up --build
Deployment
The project is set up with GitHub Actions for CI/CD. To deploy to AWS:

Configure your AWS CLI credentials.
Push code to the main branch or create a new release.
GitHub Actions will automatically build and deploy to AWS ECS.
