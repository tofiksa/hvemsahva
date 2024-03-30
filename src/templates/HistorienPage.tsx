import React from 'react';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';
import { useNavigate } from 'react-router';

export const HistorienPage = () => {
  const KONGKIFOT = getImageUrlByNameFromLocalStorage('kongkifot.jpg');
  const ONDETOFUS = getImageUrlByNameFromLocalStorage('ondeTofus.jpg');
  const ONDETOFUSEGG = getImageUrlByNameFromLocalStorage('OndeTofusEgg.png');
  const KONGKIFOTHULKER = getImageUrlByNameFromLocalStorage(
    'kongKifotHulker.png',
  );
  const KONGKIFOTSLOTT =
    getImageUrlByNameFromLocalStorage('kongKifotSlott.png');
  const KONGKIFOTGLAD = getImageUrlByNameFromLocalStorage('kongKifotGlad.png');
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg bg-gray-200">
          <img
            className="float-left m-4"
            srcSet={`${KONGKIFOTSLOTT} 320w, ${KONGKIFOTSLOTT} 680w, ${KONGKIFOTSLOTT}   960w, ${KONGKIFOTSLOTT} 1980w`}
            src={KONGKIFOTSLOTT}
            alt="slott"
            height={600}
            width={400}
          />
          <p>
            I en magisk verden langt langt borte var det et kongedømme i et land
            som het <b>Bikubia</b>. I dette landet levde folk stort sett i ro og
            fred, bortsett fra en dag i året. Den store påskeeggdagen. På denne
            dagen pleier alle å samle seg på den store slottsplassen for den
            store påskeeggfestivalen, for da pleier det å være mye god mat og
            drikke. Dessuten er det mye gøy som skjer for de aller minste barna
            også.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200">
          <p>
            Alle menneskene gledet seg til kvelden for da kom også høydepunktet,
            og det var da kong Kifot kom ut fra slottet og ut til folket av
            Bikubia for å vise fram sine påskeegg. Disse påskeeggene var så fine
            og vakre at alle kjempet om å få de beste plassene for å se på
            eggene. Dessuten, så gikk det et rykte om at hvis man var så heldig
            å få øye på eggene på en god dag, så kunne man få de vakreste barn.
          </p>
          <img
            className="float-right m-4 rounded-lg md:w-56"
            srcSet={`${KONGKIFOT} 320w, ${KONGKIFOT} 680w, ${KONGKIFOT}   960w, ${KONGKIFOT} 1980w`}
            src={KONGKIFOT}
            alt="slott"
            height={400}
            width={200}
          />
          <p>
            Kong Kifot var så glad i disse eggene at han passet på at ingen
            kunne ta på de og tok de bare ut en dag i året slik at befolkningen
            av Bikubia kunne se på de.
          </p>
        </div>
        <div className="rounded-lg bg-gray-200">
          <p>
            Vanligvis er eggene låst inne bak 5 cm tykke vegger, voktet av 4
            store glefsende hunder som igjen ble passet på av 3 kjempe store
            ninjaer og 2 små judoutøvere og 1 musefelle. For å ikke snakke om
            alarmsystemet som kun aksepterte kong Kifots håndavtrykk.
          </p>
          <img
            className="float-left m-4"
            srcSet={`${KONGKIFOTGLAD} 320w, ${KONGKIFOTGLAD} 680w, ${KONGKIFOTGLAD}   960w, ${KONGKIFOTGLAD} 1980w`}
            src={KONGKIFOTGLAD}
            alt="slott"
            height={400}
            width={200}
          />
          <p>
            Når kong Kifot var alene med eggene så liker han å se på eggene,
            noen ganger kan han sitte å glane på eggene en hel dag, til
            dronningens fortvilelse. Han var så glad i påskeeggene sine at han
            hadde bygd en statue av de på slottsplassen slik at han kunne se på
            eggene også når han var utenfor slottet. Som konge var han elsket av
            folket sitt, selv om han hadde den litt rare forelskelsen til disse
            eggene, men noen mente at han bare var tullete og syntes ikke at
            eggene var noe særlig.
          </p>
          <p>
            En av disse folkene var den onde Tofus... han syntes ikke at det var
            noe spesielt med eggene. Tvert imot han syntes at denne dagen var
            veldig bortkastet og dessuten ødela den for hans forretning. Han
            solgte nemlig vanlig gårdsegg.
          </p>
          <img
            className="float-left m-4"
            srcSet={`${ONDETOFUS} 320w, ${ONDETOFUS} 680w, ${ONDETOFUS}   960w, ${ONDETOFUS} 1980w`}
            src={ONDETOFUS}
            alt="slott"
            height={400}
            width={200}
          />
          <p>
            {' '}
            Tofus ergret seg over at disse påskeeggene til kong Kifot fikk så
            mye oppmerksomhet, mens ingen besøkte hans eggebutikk. Han hadde
            funnet ut at han hadde tapt tusen kroner den dagen som han kunne ha
            tjent dersom ikke påskeeggene ikke så mye oppmerksomhet. En dag
            bestemte den onde Tofus seg for å stjele påskeeggene fra kong Kifot.
            Så han klekket fram en plan som var idiotsikkert.
          </p>
          <img
            className=" float-right m-4"
            srcSet={`${ONDETOFUSEGG} 320w, ${ONDETOFUSEGG} 680w, ${ONDETOFUSEGG}   960w, ${ONDETOFUSEGG} 1980w`}
            src={ONDETOFUSEGG}
            alt="slott"
            height={400}
            width={200}
          />
          <p>
            {' '}
            Endelig var påskeeggdagen her og alle i Bikubia pyntet seg og gjorde
            seg klare til å se på de fine påskeeggene. Slottsplassen var
            dessuten fylt opp med matboder, karuseller og leker for de aller
            minste barna.
          </p>
          <img
            className="float-left m-4"
            srcSet={`${KONGKIFOTHULKER} 320w, ${KONGKIFOTHULKER} 680w, ${KONGKIFOTHULKER}   960w, ${KONGKIFOTHULKER} 1980w`}
            src={KONGKIFOTHULKER}
            alt="slott"
            height={400}
            width={200}
          />
          <p>
            {' '}
            Plutselig kommer kong Kifot løpende ut fra slottet i skrekk. Han så
            fortvilet mens han prøvde å holde igjen tårene sine.
          </p>
          <p>
            {' '}
            Noen har stjålet påskeeggene!!!!! Kong Kifot tok seg til ansiktene
            mens han hulket og gråt. Hvem kunne gjøre noe så forferdelig? Så
            fikk kong Kifot øye på noe ved statuen av påskeeggene. Der nederst
            ved foten av statuene var det noe hvit som blafret i vinden. Det var
            en lapp!!! Kongen kastet seg mot statuene og røsket opp lappen og
            leste mens ansiktet hans sakte gikk fra frykt til håp. På lappen
            stod det følgende
          </p>
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-black">
            <p>
              Dersom du ønsker å se dine fem påskeegg igjen så må du løse gåtene
              mine. Hilsen Tofus{' '}
            </p>
          </blockquote>
        </div>
      </div>
      <button
        onClick={startQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Start quiz
      </button>
    </div>
  );
};
