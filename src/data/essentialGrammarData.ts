export interface EssentialGrammarExercise {
  id: string;
  type: 'short_form' | 'fill_in_gap' | 'sentence_transform' | 'multiple_choice';
  instruction: string;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  explanationUz: string;
  points: number;
}

export interface EssentialGrammarUnit {
  unitNumber: number;
  title: string;
  category: 'Present' | 'Past' | 'Present Perfect' | 'Passive' | 'Future' | 'Modals' | 'Questions' | 'Pronouns' | 'Articles & Nouns' | 'Adjectives & Adverbs' | 'Prepositions' | 'Clauses';
  cefrLevel: 'A1' | 'A2';
  summaryUz: string;
  grammarRules: {
    title: string;
    formula?: string;
    positive: string[];
    negative: string[];
    question?: string[];
    explanationUz: string;
  }[];
  examples: {
    en: string;
    uz: string;
  }[];
  exercises: EssentialGrammarExercise[];
}

import { ALL_ESSENTIAL_GRAMMAR_UNITS } from './essentialGrammarAllUnits';

export const ESSENTIAL_GRAMMAR_UNITS: EssentialGrammarUnit[] = ALL_ESSENTIAL_GRAMMAR_UNITS;

