var door_closed = [
  {actor: 'gietek', text: 'Zamknięte...'},
  {actor: 'gietek', text: 'W sumie i tak nie wiem, kto tu siedzi.'}
];


var random_text = [
  "Miło było razem pracować! Do zobaczenia za pół roku. Albo i nie :)",
  "Świetlanej kariery w strukturach CP. Życzy kominiarz.",
][(Math.random() * 2) | 0];


var pois = {
  '12:10': door_closed,
  '16:10': door_closed,
  '20:10': door_closed,
  '24:10': door_closed,
  '47:10': door_closed,
  '31:6': [
    {actor: 'gietek', text: 'Maćku'},
    {actor: 'person', text: 'Arturze'},
    {actor: 'gietek', text: 'Przyszedłem się pożegnać'},
    {actor: 'person', text: 'Wybornie'},
    {actor: 'gietek', text: 'Zaiste'}
  ], 
  '27:40': [
    {actor: 'gietek', text: 'Mówcie co chcecie...'},
    {actor: 'gietek', text: 'ale na tym miejscu zawsze siedzi jakiś freak :P'}
  ],
  '31:3': [
    {actor: 'person', text: 'Stary, musisz obczaić tę gierkę…'},
    {actor: 'gietek', text: 'Shut up, stary, przyszedłem się pożegnać.'},
    {actor: 'person', text: '?'},
    {actor: 'gietek', text: 'Dziękuję za to, że dawno temu dałeś mi powera, który wystarczył mi na prawie 2 lata. Szkoda, że później nie współpracowaliśmy bliżej, może bym teraz nie odchodził…'}
  ],
  '37:6': [
    {actor: 'gietek', text: 'W sumie ciekawie się grało w tą Twoją grę...'},
    {actor: 'person', text: 'Jaką grę? To wszystko było szczerze!'},
    {actor: 'gietek', text: 'Jasne.'},
    {actor: 'gietek', text: 'Anyway, powodzenia.'}
  ],
  '37:3': [
    {actor: 'gietek', text: 'Teresy dziś nie ma w pracy'},
    {actor: 'gietek', text: 'Ale dekolt jest...'}
  ],
  '42:9': [
    {actor: 'gietek', text: 'Sala konferencyjna nr 2 im. Niespełnionych Marzeń'},
    {actor: 'gietek', text: 'Tu zazwyczaj staram się zatrudnić pracownika'},
    {actor: 'gietek', text: 'Mam potem depresję przez 2 dni :('},
    {actor: 'gietek', text: 'Tacy są zajebiści...'}
  ],
  '51:9': [
    {actor: 'gietek', text: 'Sala konferencyjna nr 1 im. Utraconych Szans'},
    {actor: 'gietek', text: 'Tu co tydzień odbywają się spotkania ZPM'},
    {actor: 'gietek', text: 'Będące mieszanką cyrku, Monty Pythona i wyjścia na piwo'},
    {actor: 'gietek', text: 'Będzie mi ich brakować :('}
  ],
  '60:10': [
    {actor: 'gietek', text: 'Tu siedzi Marcin'},
    {actor: 'gietek', text: 'Ale ostatnio nikt go nie widział, więc nie wiadomo'}
  ],
  '64:13': [
    {actor: 'gietek', text: 'Szkoda, że nie wszyscy w firmie tak ładnie się uśmiechają'},
    {actor: 'person', text: ':D'}
  ],
  '46:18': [
    {actor: 'gietek', text: 'Tu lepiej nie wchodzić...'},
    {actor: 'gietek', text: 'Bo można znaleźć jakiś archaiczny telewizor, który ktoś kiedyś mi przysłał'},
    {actor: 'gietek', text: 'a ja "zapomniałem" go odebrać...'}
  ],
  '50:22': [
    {actor: 'gietek', text: 'Eeeej, nie wychodźmy jeszcze!'},
    {actor: 'gietek', text: 'Może jeszcze coś fajnego nas tu spotka?'},
  ],
  '50:32': [
    {actor: 'gietek', text: 'Eeeej, nie wychodźmy jeszcze!'},
    {actor: 'gietek', text: 'Może jeszcze coś fajnego nas tu spotka?'},
  ],
  '58:21': [
    {actor: 'gietek', text: 'Luda, czy wiesz, że...'},
    {actor: 'gietek', text: 'Dzięki temu, że odchodzę z firmy, pierwszy raz w życiu szczerze sobie porozmawialiśmy?'},
    {actor: 'gietek', text: 'Było to dla mnie bardzo miłe'},
  ],
  '61:20': [
    {actor: 'gietek', text: 'A wiesz, że ciągle miło wspominam naszą współpracę przy Fundacji Polsat 5 lat temu? :)'}
  ],
  '66:21': [
    {actor: 'gietek', text: 'Powodzenia w ogarnianiu Smartów!'},
    {actor: 'gietek', text: 'Albert zostawił niezłe poletko do zaorania, ale wierzę, że przy pomocy Piotrka sobie doskonale poradzisz'}
  ],
  '61:24': [
    {actor: 'gietek', text: '"With great power comes great responsibility"'},
    {actor: 'person', text: '?'},
    {actor: 'gietek', text: 'To znaczy, że życzę Ci, żebyś swoje nowe obowiązki traktowała z pokorą i nigdy nie stała się zarozumiała w swoich działaniach'},
    {actor: 'person', text: 'Spoko, nie grozi mi to :)'}
  ],
  '64:24': [
    {actor: 'gietek', text: 'Kuchnia!'},
    {actor: 'person', text: 'Kawa!'},
    {actor: 'gietek', text: '&hearts;'},
    {actor: 'person', text: 'Wieeeem :)'}
  ],
  '35:14': [
    {actor: 'gietek', text: 'Szklanki tylko dla gości!'},
    {actor: 'gietek', text: 'Lepiej nie ruszać, bo Luda będzie krzyczeć'}
  ],
  '31:21': [
    {actor: 'gietek', text: 'Kurczę, pracuję tu 5,5 roku'},
    {actor: 'gietek', text: 'A w tym pomieszczeniu jestem pierwszy raz!'},
  ],
  '36:19': [
    {actor: 'gietek', text: 'Ej, nie chce mi się! Spadamy stąd!'}
  ],
  '35:27': [
    {actor: 'gietek', text: 'Szybka kawka i do roboty!'}
  ],
  '27:26': [
    {actor: 'gietek', text: 'Okeeej, to faktycznie moje miejsce.'},
    {actor: 'gietek', text: 'Ale czy nie wydaje Ci się, że kogoś tu brakuje?'},
    {actor: 'gietek', text: 'Sam siedzieć nie będę.'}
  ],
  '28:29': [
    {actor: 'gietek', text: 'No dobra: pojedli, popili...'}
  ],
  '24:35': [
    {actor: 'gietek', text: 'Ktoś będzie musiał kiedyś sprzątnąć ten pierdolnik'},
    {actor: 'gietek', text: 'Dobrze, że już nie ja :)'}
  ],
  '21:39': [
    {actor: 'gietek', text: 'Hmmm... a może bym trochę popracował?'},
    {actor: 'gietek', text: 'Eee, nie. Wolę połazić po firmie i pogadać z ludźmi'}
  ],
  '23:43': [
    {actor: 'person', text: '#$#$#%(*^)...'},
    {actor: 'gietek', text: 'Co?!?'},
    {actor: 'person', text: 'CHUJÓW STO!'}
  ],
  '23:47': [
    {actor: 'gietek', text: 'Może źle to zabrzmi'},
    {actor: 'gietek', text: 'ale cieszę się, że jednak nie mam nic wspólnego z tym Twoim bólem ;)'},
    {actor: 'gietek', text: 'Do zo przy okazji'}
  ],
  '28:45': [
    {actor: 'gietek', text: 'Stary, nawet nie wiesz, jak bardzo Ci zazdroszczę…'},
    {actor: 'person', text: 'Czego?'},
    {actor: 'gietek', text: 'Nie mogę powiedzieć :)'}
  ],
  '27:42': [
    {actor: 'gietek', text: '♫ Gdzie jest Ola? O la la... .♫'}
  ],
  '30:38': [
    {actor: 'gietek', text: 'Kamil, trochę więcej luzu, trochę mniej wkurwu'}
  ],
  '30:42': [
    {actor: 'gietek', text: 'Maatiiiiii!'},
    {actor: 'person', text: 'Coo?'},
    {actor: 'gietek', text: 'Może zróbcie tą getmedią w pehapie...'},
    {actor: 'gietek', text: 'Wtedy wszystko działało :P'},
  ],
  '32:41': [
    {actor: 'gietek', text: 'Od rupaja 2013 jesteś moim idolem ;)'},
  ],
  '32:43': [
    {actor: 'gietek', text: 'Falubaz pany!'},
    {actor: 'person', text: 'Unibax pany!'}
  ],
  '35:43': [
    {actor: 'gietek', text: 'Muszę Ci przyznać...'},
    {actor: 'gietek', text: 'Że masz uścisk dłoni mocny jak imadło :)'}
  ],
  '37:41': [
    {actor: 'gietek', text: 'Powodzenia stary. Wiem, że sobie poradzisz.'},
    {actor: 'person', text: 'No nie wiem...'},
    {actor: 'gietek', text: 'Come on, jak nie Ty to kto?'}
  ],
  '37:39': [
    {actor: 'gietek', text: 'Zenon'},
    {actor: 'gietek', text: 'Zenon...'},
    {actor: 'gietek', text: 'Zenon!'},
    {actor: 'gietek', text: 'ZENON!'},
    {actor: 'gietek', text: 'A no tak, Zenon jest zdalnie.'}
  ],
  '39:45': [
    {actor: 'gietek', text: 'Co za kutas blokuje ciąg komunikacyjny?!?'}
  ],
  '39:46': [
    {actor: 'gietek', text: 'Eeeej, gdzie jest Playstation?!?'}
  ],
  '42:44': [
    {actor: 'gietek', text: 'Mateusz, mogę coś sprawdzić na LG?'}
  ],
  '46:35': [
    {actor: 'person', text: 'The internet is for porn'},
    {actor: 'person', text: 'The internet is for porn'},
    {actor: 'person', text: 'Why you think the net was born?'},
    {actor: 'person', text: 'Porn porn porn'},
    {actor: 'gietek', text: 'Okeeeej :) Nara!'},
  ],
  '46:41': [
    {actor: 'gietek', text: 'Cześć Łukasz, chciałem się pożegnać...'},
    {actor: 'person', text: 'Nieprecyzyjnie się wyrażasz. Mówiąc "chciałem" sugerujesz, że miałeś taki zamiar, ale zrezygnowałeś z jego realizacji. Również "pożegnać" nie powinno być użyte w tym kontekście, bo to słowo sugeruje zakończenie znajomości, a przecież za pół roku wracach do firmy.'},
    {actor: 'person', text: 'Powinieneś powiedzieć...'},
    {actor: 'gietek', text: 'Kurwa, już nieważne.'}
  ],
  '65:36': [
    {actor: 'gietek', text: 'Trenuj, bo jak wrócę, to wiesz...'},
    {actor: 'gietek', text: 'A przegrywasz -2 :)'}
  ],
  // '66:29': [
  //   {actor: 'gietek', text: 'Viet'},
  '4:31': [
    {actor: 'gietek', text: 'Piłkarzyki...'},
    {actor: 'gietek', text: 'Będzie mi ich brakowało'}
  ],
  '1:32': [
    {actor: 'gietek', text: 'Ej...'},
    {actor: 'gietek', text: 'Gdzie jest redakcja? Heloooou?'}
  ],
  '40:37': [
    {actor: 'gietek', text: 'Powodzenia na starych śmieciach!'},
    {actor: 'gietek', text: 'A jak zatęsknisz za qooxdoo, to wracaj :)'}
  ],
  '40:39': [
    {actor: 'gietek', text: 'Dziękuję Ci za wszystkie znalezione "szczególne przypadki" :)'},
    {actor: 'gietek', text: 'Dzięki temu nasze produkty są znacznie lepsze i bardziej przemyślane'}
  ],
  '40:41': [
    {actor: 'gietek', text: 'Cieszę się, że "rzutem na taśmę" udało mi się Cię znaleźć'},
    {actor: 'gietek', text: 'Jesteś kolejnym świetnym pracownikiem tego działu'}
  ],
  '40:43': [
    {actor: 'gietek', text: 'Jesteś z nami dopiero rok, a ja już nie mogę sobie wyobrazić, jak to było, jak Ciebie nie było'},
    {actor: 'gietek', text: 'Będzie mi brakować Waszych dyskusji z Piecioshką i Adamem :)'}
  ],
  '42:38': [
    {actor: 'gietek', text: 'Mareeek, jak włączyć Netię?'},
    {actor: 'gietek', text: 'Nigdy się nie nauczę :('}
  ],
  '4:40': [
    {actor: 'gietek', text: 'Siema Norbi'},
    {actor: 'person', text: 'Cześć Olek'},
    {actor: 'gietek', text: 'Norbi… ile razy mam Ci powtarzać. To ja, Artur. Nie Olek'},
    {actor: 'person', text: 'Spoko Olek, będę pamiętał.'}
  ],
  '60:27': [
    {actor: 'gietek', text: 'Eeeeee....'},
    {actor: 'gietek', text: 'Czy tu nie powinny być drzwi?!?'}
  ],
  '57:41': [
    {actor: 'gietek', text: 'Gdybyś nosił nieco dłuższe koszule...'},
    {actor: 'gietek', text: '... na przykład takie, spod których nie wystaje brzuch...'},
    {actor: 'gietek', text: 'to by było miło'}
  ],
  '65:38': [
    {actor: 'gietek', text: 'Czy wiesz, że...'},
    {actor: 'gietek', text: 'Zostaje Ci w spadku projekt TVP?'},
    {actor: 'gietek', text: '[evil laugh]'}
  ],
  '33:39': [
    {actor: 'gietek', text: 'Gdzie jest Maro?'},
    {actor: 'gietek', text: '<a href="http://arturwrobel.eu/gdzie_maro/" target="_blank">Tutaj!</a>'},
  ],
  '19:18': [
    {actor: 'gietek', text: 'Jak ja się tu kurwa znalazłem, hę?'},
  ]
};


/*

{actor: 'gietek', text: ''},
{actor: 'person', text: ''}

*/