import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis('rediss://default:Aa9KAAIjcDE1MTRkYjAxMmM3NmU0OTY2YmNmZjUzMjQzMjc0Nzc5N3AxMA@cute-hagfish-44874.upstash.io:6379');
