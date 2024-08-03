/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://interview_owner:OagMSyFTQ18o@ep-plain-grass-a545jl3p.us-east-2.aws.neon.tech/interview?sslmode=require',
    }
  };