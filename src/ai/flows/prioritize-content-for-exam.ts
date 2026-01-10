'use server';

/**
 * @fileOverview Analyzes the SESA-PR 2026 edital to prioritize the most relevant content for study.
 *
 * - prioritizeContentForExam - A function that handles the content prioritization process.
 * - PrioritizeContentInput - The input type for the prioritizeContentForExam function.
 * - PrioritizeContentOutput - The return type for the prioritizeContentForExam function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeContentInputSchema = z.object({
  editalText: z
    .string()
    .describe('The complete text of the SESA-PR 2026 edital.'),
});
export type PrioritizeContentInput = z.infer<typeof PrioritizeContentInputSchema>;

const PrioritizeContentOutputSchema = z.object({
  prioritizedContent: z
    .string()
    .describe(
      'A summary of the most relevant content from the edital, prioritized for study based on the FAFIPA exam.'
    ),
});
export type PrioritizeContentOutput = z.infer<typeof PrioritizeContentOutputSchema>;

export async function prioritizeContentForExam(input: PrioritizeContentInput): Promise<PrioritizeContentOutput> {
  return prioritizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeContentPrompt',
  input: {schema: PrioritizeContentInputSchema},
  output: {schema: PrioritizeContentOutputSchema},
  prompt: `You are an expert in test preparation, specializing in the FAFIPA exam style.

  Analyze the following text from the SESA-PR 2026 edital and identify the most important topics and concepts that a student should focus on to maximize their chances of success on the exam.

  Edital Text: {{{editalText}}}

  Prioritized Content:`, // No Handlebars if-else logic.
});

const prioritizeContentFlow = ai.defineFlow(
  {
    name: 'prioritizeContentFlow',
    inputSchema: PrioritizeContentInputSchema,
    outputSchema: PrioritizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
