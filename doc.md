# Google OAuth Demo – Project Overview

---

## Technologies Used

### Programming Languages

- **TypeScript**: Used throughout the project for type safety and modern JavaScript features.
- **SQL**: Used via Prisma ORM for database schema and migrations.

### Frameworks and Libraries

- **Next.js**: React-based framework for server-side rendering and routing.
- **React**: UI library for building user interfaces.
- **NextAuth.js**: Authentication library for Next.js, handling OAuth and session management.
- **Prisma**: ORM for type-safe database access and migrations.
- **Tailwind CSS**: Utility-first CSS framework (configured, but not heavily used in the demo UI).
- **ESLint**: Linting tool for code quality.
- **PostCSS**: CSS processing tool.

### APIs and Services

- **Google OAuth 2.0**: Used for user authentication via Google accounts.
- **Google API Console**: Used to register the application and obtain OAuth credentials (Client ID and Secret).
- **PostgreSQL**: Database for persisting user, session, and token data.

---

## Key Terms and Concepts

### OAuth 2.0

OAuth 2.0 is an industry-standard protocol for authorization. In this project, it allows users to authenticate using their Google account without sharing their password with the application. The flow involves redirecting users to Google, where they grant permission, and then Google redirects back with an authorization code that is exchanged for access and refresh tokens.

### Google API Console

The Google API Console is a developer portal where you register your application, enable APIs, and obtain credentials (Client ID and Secret) required for OAuth 2.0 authentication. These credentials are set as environment variables (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`) in the project.

### Access Tokens and Refresh Tokens

- **Access Token**: A short-lived token used to access Google APIs on behalf of the user. Stored in the `Account` table via Prisma.
- **Refresh Token**: A long-lived token used to obtain new access tokens without user interaction. Also stored in the `Account` table.
- **Session**: Managed by NextAuth and stored in the `Session` table, allowing users to remain logged in.

---

## Project Importance

### Security Benefits

- **No Password Storage**: Users authenticate via Google, so passwords are never handled or stored by the app.
- **Token-based Authentication**: Uses secure, time-limited tokens for API access.
- **Session Management**: NextAuth securely manages user sessions and token storage.
- **Environment Variables**: Sensitive credentials are stored in environment variables, not in code.

### Use Cases

- **User Login for Web Apps**: Any app that wants to allow users to sign in with Google.
- **Personalized Dashboards**: Apps that need user-specific data from Google APIs.
- **Internal Tools**: Secure access for company tools using Google Workspace accounts.

---

## Additional Insights

### Best Practices

- **Type Safety**: TypeScript is used throughout for safer code.
- **Environment Variables**: All secrets and credentials are loaded from environment variables.
- **ORM Usage**: Prisma provides type-safe database access and migrations.
- **Session Context**: The app uses a `SessionProvider` to make authentication state available throughout the UI.
- **Strict Linting**: ESLint is configured for code quality.
- **.gitignore**: Sensitive files like `.env` are excluded from version control.

### Potential Improvements

- **UI/UX Enhancements**: The demo UI is minimal; consider adding user feedback, error handling, and a more polished design.
- **Role-based Access**: Add support for user roles/permissions.
- **API Rate Limiting**: Protect backend endpoints from abuse.
- **Multi-provider Support**: Add more OAuth providers (GitHub, Facebook, etc.).
- **Testing**: Add unit and integration tests for authentication flows.
- **Logging and Monitoring**: Integrate tools for better observability.

---

## How to Run the Project

1. **Clone the Repository**

   ```bash
   git clone <repo-url>
   cd google-oauth-demo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory with the following variables:
  
     ```env
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     NEXTAUTH_SECRET=your-random-secret
     DATABASE_URL=your-database-url
     ```

   - Obtain Google credentials from the [Google API Console](https://console.developers.google.com/).
   - Set up a PostgreSQL database and provide the connection string.
4. **Run Database Migrations**

   ```bash
   npx prisma migrate deploy
   # or
   npx prisma migrate dev
   ```

5. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open the App**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Google API Console](https://console.developers.google.com/)
