import { defineCollection, z } from 'astro:content';

const logs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('System Admin'),
        tags: z.array(z.string()),
        category: z.string(),
    }),
});

export const collections = {
    logs: logs,
};
