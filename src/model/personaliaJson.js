import { Survey, Model, StylesManager } from 'survey-react';
import { useCallback } from 'react';

export const Personalia = () => {

    StylesManager.applyTheme("modern");
    

const personaliaJson = {
    "title": "Påskeeggjakt 2023",
    "showProgressBar": "bottom",
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "pages": [{
        "name":"page1",
    "elements": [{
        "type": "html",
        "html": "<div style=\"position: relative; overflow: hidden; padding-top: 56.25%;\"><iframe src=\"https://share.synthesia.io/embeds/videos/d02c8254-a2c1-4506-a3f5-fabbbe439e22\" loading=\"lazy\" title=\"Synthesia video player - Your AI video\" allow=\"encrypted-media; fullscreen;\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;\"></iframe></div>",
    }, {
        "type": "text",
        "name": "username",
        "titleLocation": "hidden",
        "isRequired": true
    }]},{ 
        "elements": [
            {
                "type": "html",
                "name": "info",
                "html": "<iframe src=\"https://open.spotify.com/embed/episode/4VI3hEMCcjfADFyNKbyYMp?utm_source=generator\" width=\"100%\" height=\"152\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>",
            },
            {
            "type": "radiogroup",
            "name": "barneteater",
            "title": "Hør på episoden til Soufian i plutselig barneteater. Hva er Mons for noe?",
            "choices": [
                "En gnom", "En dverg", "Et troll", "En enhjørning"
            ],
            "correctAnswer": "En gnom",
        }],
    },{ "name":"page2",
        "elements": [
            {
                "type":"html",
                "name":"info2",
                "html":`<img src=/ height="100" width="170" /><legend/>`
            },
            {
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
    "elements": [{
        "type": "imagepicker",
                "name": "choosepicture",
                "title": "Hvilket dyr brukes iforbindelse med påsken?",
                "isRequired": true,
                "choices": [
                    {
                        "value": "cat",
                        "imageLink": ``
                    }, {
                        "value": "rabit",
                        "imageLink": ``
                    }, {
                        "value": "trex",
                        "imageLink": ``
                    }, {
                        "value": "bear",
                        "imageLink": ``
                    }
                ],
                "correctAnswer": "rabit"
    }],
    },{ "name":"page4",
    "elements": [{
        "type": "html",
        "name": "info",
        "html": `<img src=/ height="300" width="150" /><legend/>`,
    },
    {
        "type": "html",
        "name": "info",
        "html": "<div style=\"position: relative; overflow: hidden; padding-top: 56.25%;\"><iframe src=\"https://share.synthesia.io/embeds/videos/a2666ba5-f600-4081-92eb-6bae2b4c4519\" loading=\"lazy\" title=\"Synthesia video player - Your AI video\" allow=\"encrypted-media; fullscreen;\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;\"></iframe></div>",
    },
    {
    "type": "radiogroup",
    "name": "arabisk",
    "title": "Hva sier kvinnen på videoen?",
    "choices": [
        "Hei, hvordan går det?", "Hei, hvor er bussen?", "Hei, hva er klokken?", "Jeg vil sove"
    ],
    "correctAnswer": "Hei, hvordan går det?"
    }]
    },{ "name":"page5",
    "elements": [
    {
        "type": "html",
        "name": "info",
        "html": `<img src=/ height="250" width="170" /><legend/>`,
    },
    {
    "type": "radiogroup",
    "name": "hovedstaden",
    "title": "Hva heter hovedstaden i Norge?",
    "choices": [
        "Oslo", "Sverige", "Stockholm", "Bergen"
    ],
    "correctAnswer": "Oslo",
    }],
    },{ "name":"page6",
    "elements": [
        {
            "type": "html",
            "name": "info",
            "html": `<img src=/ height="150" width="170" /><legend/>`,
        },
        {
        "type": "radiogroup",
                "name": "pokemon",
                "title": "Hvem er på bildet?",
                "isRequired": true,
                "choices": [
                    "Johnny Test", "Sonic", "Ash", "Kattegutt"
                ],
                "correctAnswer": "Ash"
    }],
    }],
    "completedHtml": "<h4>Du svarte riktig på <b>{correctAnswers}</b> av <b>{questionCount}</b> spørsmål.</h4>",
    "completedHtmlOnCondition": [{
        "expression": "{correctAnswers} == 0",
        "html": "<h4>Beklager, du svarte feil på alle.</h4>"
    }, {
        "expression": "{correctAnswers} == {questionCount}",
        "html": "<h4>Gratulerer! Du svarte riktig på allesammen!</h4>"
    }]
  };

  

  const survey = new Model(personaliaJson);
  survey.locale = "no";
  
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
    
  }, []);

  survey.onComplete.add(alertResults);

  return (<Survey model={survey} />);
}