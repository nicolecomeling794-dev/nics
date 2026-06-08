import type { NextApiRequest, NextApiResponse } from "next";
import type { Profile } from "@/types";

const profile: Profile = {
  name: "MyPortfolio",
  role: "Full-stack developer",
  summary: "A portfolio system built with React, Next.js API routes, and PostgreSQL.",
  location: "Philippines",
  email: "hello@example.com"
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  return res.status(200).json({ profile });
}
