export function balanceAnswerPositions(groups) {
  groups.forEach((group, groupIndex) => {
    const questions = group.questions || group.quiz || [];
    questions.forEach((question, questionIndex) => {
      // 1. Strip any existing A. B. C. D. prefixes
      const cleanedOptions = question.options.map(opt => opt.replace(/^[A-D]\.\s*/, ''));
      
      const count = cleanedOptions.length;
      if (count === 0) return;
      
      const shift = (groupIndex + questionIndex) % count;
      
      // 2. Shift options
      const shiftedOptions = [...cleanedOptions.slice(shift), ...cleanedOptions.slice(0, shift)];
      
      // 3. Re-prepend A., B., C., D. based on the new positions
      question.options = shiftedOptions.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);
      
      // 4. Adjust the correct index
      question.correct = (question.correct - shift + count) % count;
    });
  });
  return groups;
}