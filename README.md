

# Personalized Travel Itinerary Recommendation System

This project is a **Personalized Travel Itinerary Recommendation System** that uses user preferences and clustering to recommend travel destinations and generate personalized itineraries. The system is built using Python for data preprocessing and clustering, Node.js for the backend API, and AWS for database and cloud infrastructure.

## Features
- **User Preferences Clustering**: Cluster users based on their travel preferences (expenses, vibe, favorite activities).
- **AI-Based Destination Recommendation**: Recommend travel destinations based on the user’s cluster.
- **Personalized Itinerary Generation**: Generate a detailed multi-day itinerary tailored to the user's preferences and recommended destination.
- **AWS Integration**: Use AWS RDS for data storage and Elastic Beanstalk for backend deployment.

---

## Table of Contents
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Setup Instructions](#setup-instructions)
  - [1. Cloning the Repository](#1-cloning-the-repository)
  - [2. Backend Setup (Node.js)](#2-backend-setup-nodejs)
  - [3. Python Script Setup](#3-python-script-setup)
  - [4. AWS Configuration](#4-aws-configuration)
  - [5. Running the Application](#5-running-the-application)
- [API Endpoints](#api-endpoints)
  - [POST /generate-itinerary](#post-generate-itinerary)
  - [POST /get-destination](#post-get-destination)
- [AWS Infrastructure](#aws-infrastructure)
- [Future Improvements](#future-improvements)

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Machine Learning**: Python, Scikit-learn (for clustering)
- **Database**: AWS RDS (PostgreSQL or MySQL)
- **Cloud Deployment**: AWS Elastic Beanstalk
- **Language**: JavaScript, Python
- **Dev Tools**: Postman (for API testing), Git

---

## System Architecture
1. **Data Preprocessing**:
   - Extract relevant features from the user data such as `vibe`, `expenses`, and `favorite activities`.
   - Normalize the expenses and encode categorical data (vibe, activities).

2. **Clustering**:
   - Use KMeans clustering to segment users based on their preferences.
   - Assign each user to a cluster for personalized recommendations.

3. **Backend**:
   - Expose RESTful APIs to fetch recommended destinations and generate itineraries.
   - Use Python scripts to handle clustering and recommendation logic.
   
4. **AWS Integration**:
   - Store user preferences and itineraries in AWS RDS.
   - Deploy the Node.js backend on AWS Elastic Beanstalk.

---

## Setup Instructions

### 1. Cloning the Repository
First, clone this repository:
```bash
git clone https://github.com/yourusername/travel-itinerary-recommendation.git
cd travel-itinerary-recommendation
```

### 2. Backend Setup (Node.js)
Install dependencies for the Node.js backend:
```bash
cd backend
npm install
```

Create a `.env` file in the root directory of the `backend` folder and add the following:
```bash
PORT=3000
SECRET_ARN=<your-aws-secret-arn>
RESOURCE_ARN=<your-aws-resource-arn>
```

### 3. Python Script Setup
Ensure you have the required Python dependencies. Create a Python virtual environment and install the dependencies:
```bash
cd python-scripts
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 4. AWS Configuration
1. **Create an AWS RDS Instance**:
   - Set up a PostgreSQL/MySQL database in AWS RDS.
   - Add tables for storing user data and itineraries (refer to the SQL scripts provided in the repo).

2. **Elastic Beanstalk Deployment**:
   - Create an Elastic Beanstalk application to host the Node.js backend.
   - Ensure the Elastic Beanstalk environment has access to your RDS instance by setting appropriate security groups.

### 5. Running the Application
Once you have set up both the backend and the Python scripts:

#### Local Testing:
1. Run the backend Node.js server:
```bash
cd backend
npm start
```

2. You can test the API using Postman (refer to the API Endpoints section below).

#### Deploying to AWS:
1. Deploy the Node.js app to AWS Elastic Beanstalk.
2. Set environment variables (`SECRET_ARN`, `RESOURCE_ARN`) in the Elastic Beanstalk environment.

---

## API Endpoints

### POST /generate-itinerary
Generates a personalized itinerary for the user based on preferences.

- **URL**: `/generate-itinerary`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
      "userId": 1
    }
    ```
- **Response**:
    ```json
    {
      "userId": 1,
      "destination": "Japan",
      "days": [
        { "day": 1, "activities": ["Explore city center", "Visit popular museums"] },
        { "day": 2, "activities": ["Hiking", "Fine dining in evening"] }
      ]
    }
    ```

### POST /get-destination
Fetches the recommended destination based on user preferences.

- **URL**: `/get-destination`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
      "userId": 1
    }
    ```
- **Response**:
    ```json
    {
      "userId": 1,
      "recommendedDestination": "Japan"
    }
    ```

---

## AWS Infrastructure
1. **AWS RDS**:
   - Stores user preferences, clustering results, and itineraries.
   
2. **AWS Elastic Beanstalk**:
   - Hosts the backend Node.js API. Elastic Beanstalk allows easy deployment, scaling, and monitoring.

---

## Future Improvements
1. **Enhancing AI Models**:
   - Integrate collaborative filtering to further personalize recommendations based on user feedback.
   
2. **User Feedback**:
   - Collect feedback from users about recommended itineraries to improve future suggestions.
   
3. **Real-Time Updates**:
   - Implement real-time itinerary adjustments based on user activities or changes in plans.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you need further assistance or modifications!
