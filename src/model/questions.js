import EASTERBUNNY from '../images/Easter Egg Hunt GIF - Bugs Bunny Easter Basket Happy - Discover & Share GIFs.gif'
import ALLAH from '../images/Allah.jpeg'
import LION from '../images/lion.jpeg'
import RABIT from '../images/rabit.png'
import CHICKEN from '../images/chicken.jpeg'
import BEAR from '../images/bear.png'


export const personaliaJson = {
    "title": "Påskeeggjakt 2023",
    "showProgressBar": "bottom",
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "completedHtmlOnCondition": [{
        "expression": "{totalScore} > 14",
        "html":
          "You got {totalScore} out of {maxScore} points.</br></br>Congratulation! You did great!"
      }, {
        "expression": "{totalScore} > 7",
        "html":
          "You got {totalScore} out of {maxScore} points.</br></br>Well Done! <i>Your focus determines your reality.</i> And this is the way you passed the quiz."
      }, {
        "expression": "{totalScore} <= 7",
        "html":
          "You got {totalScore} out of {maxScore} points.</br></br><i>In my experience</i>, as Obi-Wan Kenobi said, <i>there's no such thing as luck.</i>"
      }],
    "pages": [{
        "name":"page1",
    "elements": [{
        "type": "html",
        "html": "<img src=\""+EASTERBUNNY+"\"/>",
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
                
                "html": "<img height=\"100\" width=\"170\" src=\""+ALLAH+"\"/>",
            },
            {
            "type": "radiogroup",
            "name": "arabiskbokstav",
            "title": "Hva står det på arabisk?",
            "choices": [
                "Esma", "Josef", "Allah", "Hus"
            ],
            "correctAnswer": "Allah",
            "score": 5
        }],
    },{ "name":"page2",
        "checkErrorsMode": "onValueChanged",
        "elements": [
            {
                "type":"html",
                "name":"info2",
                "expression": "{totalScore}",
                "html":"<img height=\"100\" width=\"170\" src=\""+LION+"\"/><legend/><p>{totalScore}</p>"
            },
            {
            "type": "ranking",
                    "name": "smartphone-features",
                    "title": "Sett bokstavene i riktig rekkefølge",
                    "isRequired": true,
                    "choices": [
                        "س",
                        "د",
                        "أ",
                    ],
                    "correctAnswer": ["أ","س","د"],
                    "score": 5
        }],
    },{ "name":"page3",
    "elements": [{
        "type": "imagepicker",
                "name": "choosepicture",
                "title": "Hvilket dyr brukes iforbindelse med påsken?",
                "isRequired": true,
                "choices": [
                    {
                        "value": "lion",
                        "imageLink": LION
                    }, {
                        "value": "rabit",
                        "imageLink": RABIT
                    }, {
                        "value": "chicken",
                        "imageLink": CHICKEN
                    }, {
                        "value": "bear",
                        "imageLink": BEAR
                    }
                ],
                "correctAnswer": "rabit",
                "score": 5
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
    "correctAnswer": "Hei, hvordan går det?",
    "score": 5
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
    "score": 5
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
                "correctAnswer": "Ash",
                "score": 5
    }],
    }],
  };