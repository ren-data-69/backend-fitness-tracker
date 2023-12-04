module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://fitness-tracker-sujal.vercel.app",
      ], // Add your allowed origins
      credentials: true, // Allow credentials (optional)
      methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"], // Specify allowed methods
      headers: ["Content-Type", "Authorization"], // Specify allowed headers
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
