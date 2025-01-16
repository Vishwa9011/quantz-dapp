import { z } from "zod";

export const resourceConfigSchema = z.object({
   name: z.string(),
   resourceType: z.string(),
   resourceSize: z.string(),
   runCommand: z.string(),
   ports: z.number(),
   httpsRequestRoute: z.string(),
});
