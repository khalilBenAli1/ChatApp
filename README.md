# ChatApp
This is a chat application Where user can send and recieve messages in realtime

## Prerequisites

* Node.js (version 16.20.0)

## Getting Started

### 1. Create a Firebase Project:

* Go to the [Firebase website](https://fiebase.google.com) and create a new project.
* Follow the instructions to set up your project, providing a name and enabling the necessary Firebase services.

### 2.Enable Authentication:

* In the Firebase project dashboard, navigate to the "Authentication" section.
* Enable the authentication methods you want to use in your chat app (e.g., email/password, Google Sign-In, etc.).
* Configure the authentication options according to your app's requirements.

### 3.Enable Realtime Database:

* In the Firebase project dashboard, navigate to the "Database" section.
* Click on "Create Database" and choose the "Realtime Database" option.
* Select the location for your database and set the security rules as per your app's needs.

### 4.Configure Environment Variables:

* Create a .env file in the root directory of your project.
* Add the following environment variables to the .env file:
```
REACT_APP_API_KEY=YOUR_FIREBASE_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
REACT_APP_DATABASE_URL=YOUR_FIREBASE_DATABASE_URL
REACT_APP_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_FIREBASE_APP_ID
REACT_APP_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
```
Replace YOUR_FIREBASE_XXX with the corresponding values from your Firebase project's configuration.

### 5.Start the Development Server:

* In the project's root directory, open a terminal.
* Run the following command to install the project's dependencies:

```
npm install
```
* Once the dependencies are installed, start the development server:

```
npm start
```
* Expo will launch a development server and display a QR code in the terminal and in a new browser window.

### 6.Access the Chat App:

* Install the Expo Go app on your mobile device from the App Store (iOS) or Google Play Store (Android).
* Open the Expo Go app and tap the "Scan QR Code" option.
* Scan the QR code displayed in the terminal or browser window.
* Expo Go will load your chat app on your mobile device, allowing you to interact with it directly.

## Technologies Used

* React
* Expo
* TypeScript
* Firebase Realtime Database
* MobX State Tree

## Project Structure:

(not finished yet)

