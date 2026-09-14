import React from 'react';
import { TacticsQuestion } from '../../types';
import { TacticsQuestionItem } from './TacticsQuestionItem';
import { TacticsNumberingGallery } from './TacticsNumberingGallery';
import { TacticsWriteNumbersList } from './TacticsWriteNumbersList';

interface TacticsTaskData {
  instruction?: string;
  questions: TacticsQuestion[];
}

interface TacticsTaskRendererProps {
  task: TacticsTaskData;
  answers: Record<string, number>;
  onSelectAnswer: (questionId: string, optIdx: number) => void;
  isChecked: boolean;
  onImageClick?: (url: string, title?: string) => void;
}

export const TacticsTaskRenderer: React.FC<TacticsTaskRendererProps> = ({
  task,
  answers,
  onSelectAnswer,
  isChecked,
  onImageClick,
}) => {
  const instruction = (task.instruction || '').toLowerCase();

  // Heuristic 1: "Number the pictures" gallery task
  const isNumberingInstruction =
    instruction.includes('number the picture') ||
    instruction.includes('number the photo') ||
    instruction.includes('number each picture');

  const allHaveImages =
    task.questions.length >= 3 && task.questions.every((q) => !!q.image);

  const allNumberOptions =
    task.questions.length >= 3 &&
    task.questions.every(
      (q) => q.options?.length > 0 && q.options.every((opt) => /^\d+$/.test(opt.trim()))
    );

  const isNumberThePictures = isNumberingInstruction || (allHaveImages && allNumberOptions);

  // Heuristic 2: "Write age / numbers" list task (compact input list)
  const isWriteNumberInstruction =
    instruction.includes('write each child') ||
    instruction.includes('write the number') ||
    instruction.includes('write the age') ||
    instruction.includes('write each person');

  const noQuestionImages = task.questions.every(
    (q) => !q.image && (!q.optionImages || q.optionImages.length === 0)
  );

  const hasHighRangeNumberOptions =
    task.questions.length >= 3 &&
    task.questions.every(
      (q) => q.options?.length >= 5 && q.options.every((opt) => /^\d+$/.test(opt.trim()))
    );

  const isWriteNumbersList =
    (isWriteNumberInstruction && noQuestionImages) ||
    (noQuestionImages && hasHighRangeNumberOptions);

  // Mode 1: Unified Picture Numbering Gallery
  if (isNumberThePictures) {
    return (
      <TacticsNumberingGallery
        questions={task.questions}
        answers={answers}
        onSelectAnswer={onSelectAnswer}
        isChecked={isChecked}
        onImageClick={onImageClick}
      />
    );
  }

  // Mode 2: Compact Number / Age Write List
  if (isWriteNumbersList) {
    const valueLabel = instruction.includes('age') ? "Yosh" : "Raqam";
    return (
      <TacticsWriteNumbersList
        questions={task.questions}
        answers={answers}
        onSelectAnswer={onSelectAnswer}
        isChecked={isChecked}
        valueLabel={valueLabel}
      />
    );
  }

  // Mode 3: Standard Questions List (handles Multiple choice, True/False, and Picture A vs B comparison)
  return (
    <div className="space-y-3.5">
      {task.questions.map((q, idx) => (
        <TacticsQuestionItem
          key={q.id}
          question={q}
          index={idx}
          selectedAnswer={answers[q.id]}
          onSelectAnswer={(optIdx) => onSelectAnswer(q.id, optIdx)}
          isChecked={isChecked}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};
