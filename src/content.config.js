import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const changelog = defineCollection({
	loader: glob({
		pattern: '**/[^_]*.md',
		base: './src/changelog',
		generateId: ({ entry }) => {
			console.log(entry);
			return entry.replace(/\.md$/, '').replace(/\./g, '.');
		},
	}),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		tag: z.enum(['feature', 'improvement', 'fix']),
		featured: z.boolean().optional(),
	}),
});

export const collections = { changelog };
