import React, { useEffect, useState } from 'react';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';
import { useNavigate } from 'react-router';

export const HistorienPage = () => {
  const [kongkifot, setKongkifot] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    //setSpinner(true);
    async function fetchData() {
      await setKongkifot(getImageUrlByNameFromLocalStorage('kongkifot.jpg'));
    }
    fetchData();
  }, [kongkifot]);

  //const KONGKIFOT = getImageUrlByNameFromLocalStorage('kongkifot.jpg');
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
          {spinner && (
            <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
              <svg
                className="w-16 h-16 animate-spin text-gray-900/50"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className=" text-black"
                ></path>
              </svg>
            </div>
          )}
          {kongkifot && (
            <img
              className="float-right m-4 rounded-lg md:w-56"
              srcSet={`${kongkifot} 320w, ${kongkifot} 680w, ${kongkifot}   960w, ${kongkifot} 1980w`}
              src={kongkifot}
              alt="slott"
              height={400}
              width={200}
            />
          )}
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
