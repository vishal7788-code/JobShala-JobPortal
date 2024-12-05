export const USER_API_END_POINT =
  process.env.NODE_ENV === "production"
    ? "https://jobshala-backend.onrender.com/api/v1/user"
    : "http://localhost:8000/api/v1/user";

export const JOB_API_END_POINT =
  process.env.NODE_ENV === "production"
    ? "https://jobshala-backend.onrender.com/api/v1/job"
    : "http://localhost:8000/api/v1/job";

export const APPLICATION_API_END_POINT =
  process.env.NODE_ENV === "production"
    ? "https://jobshala-backend.onrender.com/api/v1/application"
    : "http://localhost:8000/api/v1/application";
