import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage'

const EASTERBUNNY = getImageUrlByNameFromLocalStorage('EasterEggHunt.gif');
const RABIT = getImageUrlByNameFromLocalStorage('rabit.png');
const CHICKEN = getImageUrlByNameFromLocalStorage('chicken.jpeg');
const KONGKIFOT = getImageUrlByNameFromLocalStorage('kongkifot.jpg');
const FEILKONGKIFOT1 = getImageUrlByNameFromLocalStorage('feilkifot1.jpg');
const FEILKONGKIFOT2 = getImageUrlByNameFromLocalStorage('feilkifot2.jpg');
const FEILKONGKIFOT3 = getImageUrlByNameFromLocalStorage('feilkifot3.jpg');
const RAMADAN = getImageUrlByNameFromLocalStorage('ramadan.jpeg');
const MAN_PRAYING = getImageUrlByNameFromLocalStorage('manpraying.jpeg');
const KONGKIFOTSLOTT =
getImageUrlByNameFromLocalStorage('kongKifotSlott.png');

export const personaliaJson = {
    "title": "Påskeeggjakt 2024",
    "showProgressBar": "bottom",
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "completedHtmlOnCondition": [{
        "expression": "{totalScore} > 29",
        "html":
          "Gratulerer, du har fått nok poeng til å få ledetråder til påskeeggene, trykk på lenken: <a href=\"/clues\">her</a>"
      }, {
        "expression": "{totalScore} <= 30",
        "html":
          "Du fikk {totalScore} poeng av {maxScore}. Du må klare minst 30 for å få ledetråd. trykk på lenken for å prøve igjen: <a href=\"/\">her</a>"
      }],
    "pages": [{
        "name":"page1",
    "elements": [{
        "type": "html",
        "html": "<img src=\""+EASTERBUNNY+"\"/>",
    }, {
        "type": "text",
        "name": "username",
        "title": "Skriv inn navnet ditt",
        "isRequired": true
    }]},{ 
        "elements": [
            {
                "type": "html",
                "name": "info",
                
                "html": "<img height=\"100\" width=\"170\" src=\""+KONGKIFOTSLOTT+"\"/>",
            },
            {
            "type": "radiogroup",
            "name": "arabiskbokstav",
            "title": "Hva heter landet Kong kifot er kongen av?",
            "choices": [
                "Bikuben", "Bikubbe", "Bikubia", "Bingen"
            ],
            "correctAnswer": "Bikubia",
            "score": 5
        }],
    },{ "name":"page2",
        "checkErrorsMode": "onValueChanged",
        "elements": [
            {
                "type":"html",
                "name":"info2",
                "expression": "{totalScore}",
                "html":""
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
                        "ل",
                        "و",
                        "ن",
                        "ر",
                    ],
                    "correctAnswer": ["أ","د","ر","س","ل","ن","و"],
                    "score": 5
        }],
    },{ "name":"page3",
    "elements": [{
        "type": "imagepicker",
                "name": "choosepicture",
                "title": "Velg korrekt bilde av kong Kifot",
                "isRequired": true,
                "choices": [
                    {
                        "value": "kongkifot",
                        "imageLink": KONGKIFOT
                    }, {
                        "value": "feilkifot3",
                        "imageLink": FEILKONGKIFOT3
                    }, {
                        "value": "feilkifot2",
                        "imageLink": FEILKONGKIFOT2
                    }, {
                        "value": "feilkifot1",
                        "imageLink": FEILKONGKIFOT1
                    }
                ],
                "correctAnswer": "kongkifot",
                "score": 5
    }],
    },{ "name":"page4",
    "elements": [{
        "type": "html",
        "name": "info",
    },
    {
        "type": "html",
        "name": "info",
        "html": "<div style=\"position: relative; overflow: hidden; padding-top: 56.25%;\"><iframe src=\"https://share.synthesia.io/embeds/videos/f98e0d6e-1437-4e71-b9c9-187cb7d889d0\" loading=\"lazy\" title=\"Synthesia video player - Your AI video\" allow=\"encrypted-media; fullscreen;\" style=\"position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;\"></iframe></div>",
    },
    {
    "type": "radiogroup",
    "name": "arabisk",
    "title": "Hva sier mannen på videoen?",
    "choices": [
        "Hva heter du?", "Hei, hvor er bussen?", "Hva er klokken?", "Jeg vil sove"
    ],
    "correctAnswer": "Hva heter du?",
    "score": 5
    }]
    },{ "name":"page5",
    "elements": [
    {
        "type": "html",
        "name": "info",
        "html": "<img height=\"300\" width=\"470\" src=\""+RAMADAN+"\"/><legend/>",
    },
    {
    "type": "text",
    "name": "ramadan",
    "title": "Hvor mange dager må man faste i Ramadan?",
    "correctAnswer": "30",
    "score": 5
    }],
    },{ "name":"page6",
    "elements": [
        {
            "type": "html",
            "name": "info",
            "html": "<img height=\"300\" width=\"470\" src=\""+MAN_PRAYING+"\"/><legend/>",
        },
        {
        "type": "text",
                "name": "profeter",
                "title": "Hvor mange profeter finnes det?",
                "isRequired": true,
                "choices": [
                    "12", "20", "30", "25"
                ],
                "correctAnswer": "25",
                "score": 5
    }],
    }],
  };