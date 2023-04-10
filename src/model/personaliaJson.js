import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Serializer } from "survey-core";
import "survey-core/defaultV2.min.css";
import {personaliaJson} from './questions'
import "survey-core/survey.i18n";


export const Personalia = () => {

//StylesManager.applyTheme("modern");

// Add a custom `score` property to survey questions
Serializer.addProperty("question", {
    name: "score:number"
  });


function calculateTotalScore(data) {
var totalScore = 0;
Object.keys(data).forEach((qName) => {
    const question = survey.getQuestionByValueName(qName);
    if (question.isAnswerCorrect()) {
    if (!!question.score) {
        totalScore += question.score;
    }
    }
});
return totalScore;
}

function calculateMaxScore(questions) {
    var maxScore = 0;
    questions.forEach((question) => {
      if (!!question.score) {
        maxScore += question.score;
      }
    });
    return maxScore;
  }

const survey = new Model(personaliaJson);
survey.locale = "no";

survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

/* const alertResults = useCallback((sender) => {
const results = JSON.stringify(sender.data);
const totalScore = calculateTotalScore(sender.data);
const maxScore = calculateMaxScore(sender.getAllQuestions());
      
// Save the scores in survey results
sender.setValue("maxScore", maxScore);
sender.setValue("totalScore", totalScore);
console.log(results);
}, []);

survey.onComplete.add(alertResults); */

survey.onCompleting.add((sender) => {
    const totalScore = calculateTotalScore(sender.data);
    const maxScore = calculateMaxScore(sender.getAllQuestions());
    
    // Save the scores in survey results
    sender.setValue("maxScore", maxScore);
    sender.setValue("totalScore", totalScore);
  });


return (<Survey model={survey} />);
}