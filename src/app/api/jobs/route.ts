// app/api/jobs/route.ts
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";

export async function GET() {
  const cache = await redis.get('jobs');
  if (cache) return Response.json(JSON.parse(cache));

  const jobs = await prisma.job.findMany();
  await redis.set('jobs', JSON.stringify(jobs), { EX: 60 }); // expires in 60s

  return Response.json(jobs);
}
