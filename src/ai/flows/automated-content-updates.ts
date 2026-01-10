'use server';

/**
 * @fileOverview A flow to automatically update study material with the latest official information for the SESA-PR exam.
 *
 * - automatedContentUpdate - A function that updates study material content.
 * - AutomatedContentUpdateInput - The input type for the automatedContentUpdate function.
 * - AutomatedContentUpdateOutput - The return type for the automatedContentUpdate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedContentUpdateInputSchema = z.object({
  studyMaterial: z
    .string()
    .describe('The current study material content.'),
  officialCommunication: z
    .string()
    .describe('The latest official communication regarding the SESA-PR exam.'),
});
export type AutomatedContentUpdateInput = z.infer<typeof AutomatedContentUpdateInputSchema>;

const AutomatedContentUpdateOutputSchema = z.object({
  updatedStudyMaterial: z
    .string()
    .describe('The updated study material content.'),
  summary: z.string().describe('A summary of the changes made.'),
});
export type AutomatedContentUpdateOutput = z.infer<typeof AutomatedContentUpdateOutputSchema>;

export async function automatedContentUpdate(
  input: AutomatedContentUpdateInput
): Promise<AutomatedContentUpdateOutput> {
  return automatedContentUpdateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedContentUpdatePrompt',
  input: {schema: AutomatedContentUpdateInputSchema},
  output: {schema: AutomatedContentUpdateOutputSchema},
  prompt: `You are an expert in updating study materials for the SESA-PR exam.

You will receive the current study material content and the latest official communication regarding the exam.

Your task is to update the study material based on the official communication.

If the official communication contains updates, revise the study material and provide a summary of the changes made.
If no updates are necessary, return the original study material and indicate that no changes were made.

Current Study Material:
{{{studyMaterial}}}

Latest Official Communication:
{{{officialCommunication}}}

Provide the updated study material and a summary of changes. Return the original study material if no changes are needed.
`,
});

const automatedContentUpdateFlow = ai.defineFlow(
  {
    name: 'automatedContentUpdateFlow',
    inputSchema: AutomatedContentUpdateInputSchema,
    outputSchema: AutomatedContentUpdateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
