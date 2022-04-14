import { Survey, Model } from 'survey-react';
import { useCallback } from 'react';

export const Personalia = () => {

const personaliaJson = {
    title: "Påskeeggjakt",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [{
        "name":"page1",
    elements: [{
        type: "html",
        html: "<div style=\"position: relative; overflow: hidden; padding-top: 56.25%;\"><iframe src=\"https://share.synthesia.io/embeds/videos/ac574f28-113d-4f85-90b7-274645c51fed\" loading=\"lazy\" title=\"Synthesia video player - Your AI video\" allow=\"encrypted-media; fullscreen;\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;\"></iframe></div>",
    }, {
        type: "text",
        name: "username",
        titleLocation: "hidden",
        isRequired: true
    }]},{ 
        elements: [{
            type: "radiogroup",
            name: "Plutselig er det barneteater",
            title: "Hvem ringte på døren til Soufian?",
            choices: [
                "Sjåføren", "Megleren", "Filantropen", "Dansken"
            ],
            correctAnswer: "Dansken"
        }],
    },{ "name":"page2",
        elements: [{
            "type": "ranking",
                    "name": "smartphone-features",
                    "title": "Ranger disse fra tyngst til lettest:",
                    "isRequired": true,
                    "choices": [
                        "Fjær",
                        "Bok",
                        "Stor stein",
                        "Saks",
                        "Bil",
                    ],
                    "correctAnswer": ["Bil","Stor stein","Bok","Saks","Fjær"]
        }],
    },{ "name":"page3",
    elements: [{
        "type": "imagepicker",
                "name": "choosepicture",
                "title": "Hvilket dyr brukes iforbindelse med påsken?",
                "isRequired": true,
                "choices": [
                    {
                        "value": "lion",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                    }, {
                        "value": "giraffe",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                    }, {
                        "value": "panda",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                    }, {
                        "value": "camel",
                        "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                    }
                ],
                "correctAnswer": "panda"
    }],
},{ "name":"page4",
elements: [{
    "type": "file",
            "title": "Please upload your photo",
            "name": "image",
            "storeDataAsText": false,
            "showPreview": true,
            "imageWidth": 150,
            "maxSize": 102400
}],
}],
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }]
  };

  

  const survey = new Model(personaliaJson);
  

  return (<Survey model={survey} />);
}