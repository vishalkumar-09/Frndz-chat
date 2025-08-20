# Frndz Chat — Video Calling & Real-time Chat App (MERN)  

> A **production-grade language exchange & social platform** built with the **MERN stack**, featuring **real-time chat, video calls (with screen sharing & recording), social/friend system, onboarding, theming, and notifications**.  

---

##  Tech Stack  

- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Frontend:** React (Vite), TanStack Query, Tailwind CSS  
- **Authentication:** JWT-based login & signup flows  
- **Streaming/Chat/Video:** GetStream API  
- **Deployment Ready:** Easily deployable for live usage  

---

##  Key Features  

###  Authentication  
- Secure **JWT authentication** (signup/login)  
- Protected routes  

###  Onboarding Flow  
- Profile completion with **bio, native/learning language, location**  

###  Social & Friends System  
- Friend requests (accept/decline)  
- Persistent friend lists stored in **MongoDB**  

###  Real-Time Chat  
- Messages, reactions, threads, typing indicators, online status  
- Image uploads & emoji reactions  

###  Video Calling  
- One-on-one & group calls  
- **Screen sharing**, **reactions**, and **call recording**  

###  UI Themes  
- **32 distinct themes** for full customization  

###  Custom Hooks & Best Practices  
- Reusable React hooks for production-quality code  

###  Notification System  
- In-app notifications for friend requests & activity  

###  Protected Navigation  
- Only onboarded users can access core app features  

###  API Testing  
- Endpoints tested via **Postman**  
---

##  Project Structure  

###  Backend  
- **Express RESTful API**  
- Routes: User/Auth/Chat/Call  
- Controllers for business logic  
- Models: User, Message, etc.  
- JWT authentication & password hashing (bcrypt)  
- `.env` for secrets/configs  

###  Frontend  
- React app (Vite scaffold)  
- **TanStack Query** for advanced state management  
- **TailwindCSS** with theme selector  
- Protected routes (authentication/authorization)  
- Components: Chat, VideoCall, Auth, Onboarding, Friends, Notifications, Layout  
- Real-time features powered by **Stream API**  

---

##  Setup Instructions  

### 1️. Clone Backend & Frontend  
```bash
git clone https://github.com/vishalkumar-09/Frndz-chat
```
### 2️. Install Dependencies
# Backend
```bash
npm install
```
# Frontend
```bash
npm install
```
### 3️. Set Up Database

Create a MongoDB Atlas free cluster

Add cluster URI & credentials in .env

### 4️. Configure Stream API

Register at GetStream

Get API Key & Secret, add them to .env

### 5️. Add Other Secrets

JWT Secret, etc.

### 6️. Run Servers
# Backend
npm run dev    -->runs with Nodemon

# Frontend
npm run dev    -->Vite default port: 5173

### 7️. Visit App

**Frontend**: http://localhost:5173

**Backend**: http://localhost:5010

###  Usage Flow

->Signup/Login

->Complete Onboarding Profile

->Add & Manage Friends

->Chat in Real-Time

->Invite Friends to Video Calls

->Customize Themes

Receive Notifications & Use Protected Pages

###  Why Build Frndz Chat?

->Sharpen full-stack development skills with advanced real-time features & authentication

->Learn scalable patterns & best practices for team-based projects

 ###  Frndz Chat is your go-to app for real-time video calling, chat, and social connections — built with the MERN stack for production-grade scalability.
