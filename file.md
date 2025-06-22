hello  everyone this is a simple and short presentation of oauth   in Next.js 
 
 so lets start by defining what is oauth again :  
  - OAuth (Open Authorization) is a secure authorization protocol that allows a third-party application to access a user's data from another service, without needing the user’s password. 

 so in this demo here our identity provider here is google that is we will have a simple site that welcomes a user after signing in with google 

 so but before that there are some terms u need to be familiar with that will help us understand  what is actually going on behind the hood 

  - user (You)
  - client (browser app , application )
  - authorization server
   : The service that authenticates the user and issues tokens.

   Authenticates the user (shows Google login page).

   Asks the user for permission (scopes).

   Issues authorization code and access token.

  - resource server 


The server where user data lives (APIs).  that is where the app contents come from 


some technology used 
 - Next.js (App Router ) --> Routing + backend API + frontend views

 - NextAuth.js --> Manages OAuth login, JWT tokens, and sessions

- TypeScript  --> Makes the code safer, with better developer experience


-Google OAuth -->  Provides identity + tokens for login





### using data base to persist user info 

##### tech ued 

| Tool               | Purpose                             |
| ------------------ | ----------------------------------- |
| **PostgreSQL**     | Your relational database            |
| **Prisma**         | ORM to access/manage the database   |
| **NextAuth.js**    | Authentication + session management |
| **Prisma Adapter** | Connects NextAuth to Prisma         |



## 🔍 BEHIND THE SCENES: HOW IT WORKS


When a user signs in using Google:

NextAuth receives user profile info (name, email, image)

If a database is connected via the Prisma Adapter:

It checks if that user already exists

If not, it creates a new user record in your DB

You can now query your own User table for things like:

Get all users

Associate posts/data with a user

Assign roles or permissions

You don’t need to manually create them — Prisma generates all of this for you.  the tables

##### prisma adapter workflow 

Google Login → NextAuth callback → Prisma Adapter → Check DB:
   ├── Does user exist?
   │   ├─ Yes → Sign in
   │   └─ No → Create user in `User` table, then sign in



### overview of what we do
Install & configure Prisma

Set up PostgreSQL

Create the database schema for NextAuth

Run migrations to create tables

Plug Prisma into NextAuth

Test login + view user in database