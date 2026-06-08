import type { NextApiRequest, NextApiResponse } from "next";
import { hasDatabaseUrl, sql } from "@/utils/db";
import { validateMessage } from "@/utils/validators";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const result = validateMessage(req.body);
  if (!result.valid) {
    return res.status(400).json({ message: result.error });
  }

  if (hasDatabaseUrl) {
    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${result.data.name}, ${result.data.email}, ${result.data.message})
    `;
  }

  return res.status(201).json({ message: "Message received." });
}
