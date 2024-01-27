import scales from "../../../../services/scales.json";
//TODO: currently not used;
const isCorrect = ({correctDegree, answer}) => answer.includes(scales[scale][correctDegree - 1]);

const checkAnswer = (isCorrect) => ({correctDegree , answer, manual, specificGrade, playNextNote,
                         increaseQuestionCount,increaseCorrectCount}) =>{
    increaseQuestionCount();
    specificGrade[correctDegree-1][0] += 1;
    const correct = !answer ? manual : isCorrect({});
    playNextNote();
    if (correct) {
        increaseCorrectCount();
        specificGrade[correctDegree-1][1] += 1;
    }
    if (!answer) return '';
    if (correct) return 'correct';
    return `wrong played: ${scales[scale][correctDegree - 1]} you pressed: ${answer[0]}`;
}

export default checkAnswer;
