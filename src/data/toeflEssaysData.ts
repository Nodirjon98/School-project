import { ToeflTopic } from '../types';
import { TOPICS_1_TO_5 } from './toefl/topics_1_to_5';
import { TOPICS_6_TO_10 } from './toefl/topics_6_to_10';
import { TOPICS_11_TO_15 } from './toefl/topics_11_to_15';
import { TOPICS_16_TO_31 } from './toefl/topics_16_to_31';
import { TOPICS_32_TO_45 } from './toefl/topics_32_to_45';
import { TOPIC_WORD_LISTS } from './toefl/topicWordLists';
import { ALL_USEFUL_WRITING_CHUNKS } from './toefl/usefulChunksMaster';

/**
 * Official ETS TOEFL Essay Model Answers (Score 6.0)
 * Sourced from "Answers to All TOEFL Essay Questions" by ToeflEssays.com
 * Includes vocabulary logic, academic writing chunks, and highlighted argumentative ideas.
 */
export const TOEFL_TOPICS: ToeflTopic[] = [
  ...TOPICS_1_TO_5,
  ...TOPICS_6_TO_10,
  ...TOPICS_11_TO_15,
  ...TOPICS_16_TO_31,
  ...TOPICS_32_TO_45
];

// Attach topic-related word list and global writing chunks to all topics
TOEFL_TOPICS.forEach(topic => {
  const wordList = TOPIC_WORD_LISTS[topic.id] || [];
  topic.topicWordList = wordList;
  topic.essays.forEach(essay => {
    essay.topicWordList = wordList;
  });
});

export { ALL_USEFUL_WRITING_CHUNKS, TOPIC_WORD_LISTS };

export function getToeflTopicById(topicId: string): ToeflTopic | undefined {
  return TOEFL_TOPICS.find(t => t.id === topicId);
}

export function getToeflTopicByNumber(num: number): ToeflTopic | undefined {
  return TOEFL_TOPICS.find(t => t.topicNumber === num);
}

