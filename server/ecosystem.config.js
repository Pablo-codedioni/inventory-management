module.exports = {
  apps: [
    {
      name: "inventory-management", // Nombre de la app en PM2
      script: "npm", // Comando base
      args: "run dev", // Argumentos: correr "npm run dev"
      env: {
        NODE_ENV: "development", // Variables de entorno
        ENV_VAR1: "environment-variable",
      },
    },
  ],
};
// This configuration file is used by PM2 to manage the application.
// It specifies the application name, the script to run, and the environment variables.
// The script is set to run the development server using npm.
// The environment variables can be customized as needed.
// The PM2 process manager will use this configuration to start and manage the application.
// To start the application using this configuration, run the following command:
// pm2 start ecosystem.config.js
// This will start the application in development mode with the specified environment variables.
// PM2 will also keep track of the application logs and allow you to manage the application easily.
// PM2 provides various commands to manage the application, such as:
// pm2 stop <app-name> - Stop the application
// pm2 restart <app-name> - Restart the application
// pm2 delete <app-name> - Delete the application from PM2
// pm2 logs <app-name> - View the application logs
// pm2 list - List all applications managed by PM2
// PM2 also provides options for monitoring the application, scaling it, and managing clusters.
