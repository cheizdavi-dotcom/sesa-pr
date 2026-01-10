'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized study schedule.
 *
 * - generateStudySchedule - A function that generates a personalized study schedule.
 * - GenerateStudyScheduleInput - The input type for the generateStudySchedule function.
 * - GenerateStudyScheduleOutput - The return type for the generateStudySchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStudyScheduleInputSchema = z.object({
  jobRole: z.string().describe('The job role selected by the user in SESA-PR.'),
  examDate: z.string().describe('The date of the SESA-PR exam (e.g., March 2026).'),
  contentPrioritization: z
    .string()
    .describe(
      'The prioritized content for the exam, based on the FAFIPA exam pattern.'
    ),
});
export type GenerateStudyScheduleInput = z.infer<typeof GenerateStudyScheduleInputSchema>;

const GenerateStudyScheduleOutputSchema = z.object({
  studySchedule: z
    .string()
    .describe(
      'A personalized study schedule tailored to the user s job role and exam date.'
    ),
});
export type GenerateStudyScheduleOutput = z.infer<typeof GenerateStudyScheduleOutputSchema>;

export async function generateStudySchedule(
  input: GenerateStudyScheduleInput
): Promise<GenerateStudyScheduleOutput> {
  return generateStudyScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStudySchedulePrompt',
  input: {schema: GenerateStudyScheduleInputSchema},
  output: {schema: GenerateStudyScheduleOutputSchema},
  prompt: `You are an expert study schedule generator for the SESA-PR exam.

  Based on the user's job role, exam date, and content prioritization, generate a personalized study schedule.

  Job Role: {{{jobRole}}}
  Exam Date: {{{examDate}}}
  Content Prioritization: {{{contentPrioritization}}}

  Ensure the study schedule is clear, concise, and easy to follow. Provide a schedule that maximizes study efficiency within the available timeframe.
  The schedule should be tailored to the content prioritization so that the most important topics are studied first.
`,
});

const generateStudyScheduleFlow = ai.defineFlow(
  {
    name: 'generateStudyScheduleFlow',
    inputSchema: GenerateStudyScheduleInputSchema,
    outputSchema: GenerateStudyScheduleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
