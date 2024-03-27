import { React, useCallback } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Serializer } from "survey-core";
import "survey-core/defaultV2.min.css";
import {personaliaJson} from './questions'
import "survey-core/survey.i18n";


export const Personalia = () => {

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

function saveSurveyResults(url, json) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      console.log("updated!!")
    } else {
      console.log("not updated!!! ", response)
    }
  })
  .catch(error => {
    // Handle error
  });
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

const surveyComplete = useCallback((sender) => {
  saveSurveyResults(
    "/api/add",
    sender.data
  )
}, []);

survey.onCompleting.add((sender) => {
    const totalScore = calculateTotalScore(sender.data);
    const maxScore = calculateMaxScore(sender.getAllQuestions());
    
    // Save the scores in survey results
    sender.setValue("maxScore", maxScore);
    sender.setValue("totalScore", totalScore);
  });

survey.onComplete.add(surveyComplete);
return (<Survey model={survey} />);
}