import { Redis } from "ioredis";
const client = new Redis({
  host: "redis-17344.c212.ap-south-1-1.ec2.redns.redis-cloud.com",
  password: "2clkxGQnYt2v60lXu0xhji9dddbdyPTj",
  port: 17344,
});
export { client };
