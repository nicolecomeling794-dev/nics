import type { NextApiRequest, NextApiResponse } from "next";
import { fallbackProjects } from "@/data/projects";
import { hasDatabaseUrl, sql } from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (!hasDatabaseUrl) {
      return res.status(200).json({ projects: fallbackProjects });
    }

    const { rows } = await sql`
      SELECT
        id,
        title,
        description,
        tech_stack AS "techStack",
        image_url AS "imageUrl",
        github_link AS "githubLink",
        live_link AS "liveLink"
      FROM projects
      ORDER BY id DESC
    `;

    return res.status(200).json({ projects: rows });
  }

  if (req.method === "POST") {
    return res.status(501).json({ message: "Project creation is reserved for the admin dashboard." });
  }

  if (req.method === "DELETE") {
    return res.status(501).json({ message: "Project deletion is reserved for the admin dashboard." });
  }

  return res.status(405).json({ message: "Method not allowed." });
}
