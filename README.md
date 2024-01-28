### Enhanced Readme for DZ Mouhami Frontend Application

Welcome to the repository for the DZ Mouhami Frontend Application! This application serves as the frontend interface for the DZ Mouhami project. Below are the instructions to get started with the development setup.

### Repository Links

- **Frontend Admin pannel Repo:** [https://github.com/mondher0/dz-mouhami-admin-pannel](https://github.com/mondher0/dz-mouhami-admin-pannel)
- **Backend Repo:** [https://github.com/1FarZ1/DZ_MOUHAMI/](https://github.com/1FarZ1/DZ_MOUHAMI/)

### Getting Started

To begin contributing or testing the DZ Mouhami Frontend Application, follow these steps:

1. **Install Dependencies:** First, ensure you have all the necessary dependencies installed. You can do this by running:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run Development Server:** Once the dependencies are installed, you can start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **View in Browser:** Open [http://localhost:3000](http://localhost:3000) in your preferred web browser to see the result.

### Code Documentation

Below is a brief overview of the code structure and organization:

- **`app` folder:** Contains all the routes of the application. Each route is a separate file. The `app` folder also contains the `_app.js` file, which is the entry point of the application.

- **`components` folder:** Houses all the components of the application. It comprises several sub-folders, each dedicated to a feature. Additionally, there's a `ui` folder that holds common UI components.

- **`store` folder:** Manages the Redux store of the application. Inside the `store` folder, there's a separate folder for each slice of the store.

- **`lib` folder:** Contains reusable functions utilized across the application.

- **`public` folder:** Stores public files such as images and fonts.

- **`docker-compose.yml`:** Configuration file for Docker setup.

- **`Dockerfile`:** Contains Docker commands to build and run the application within a Docker container.

-**`jest.config.js`:** Configuration file for Jest testing framework it contains the setup for the test environment and the test coverage.

Feel free to explore the codebase further and contribute as needed. If you have any questions or need assistance, don't hesitate to reach out!

### Wrote with ❤️ by: MONDHER MAMERI
