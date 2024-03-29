export const state = () => ({
  navigationItems: [
    {
      name: 'aktuality',
      anchor: 'aktuality'
    },
    {
      name: 'o nás',
      anchor: 'onas'
    },
    {
      name: 'co děláme',
      anchor: 'codelame'
    },
    {
      name: 'náš tým',
      anchor: 'nastym'
    },
    {
      name: 'v co věříme',
      anchor: 'verime'
    },
    {
      name: 'kontakt',
      anchor: 'kontakt'
    },
  ],
  events: [
    {
      image: 'house_icon.png',
      heading: 'Bohoslužby',
      description: 'Kdo hledá opravdové řešení svých trápení nebo pravdivé odpovědi na základní otázky po smyslu života, je srdečně zván.',
      adress: '🕒 Neděle, od 9:30 <br /> 🗺️ Popská 3, Opava',
      href: ''
    },
    {
      image: 'mic_icon.png',
      heading: 'Semináře',
      description: 'Několikrát do roka organizujeme semináře speciálně zaměřené na oblasti, ve kterých bývají lidé nejvíce zraněni.',
    },
    {
      image: 'hands_icon.png',
      heading: 'Tématické diskuze',
      description: 'Diskuze nad Biblí v rodinném prostředí. Lidé se mouhou sdílet, říct své zkušenosti s Bohem, ale také co je trápí a v čem bojují.',
      adress: '🕒 Úterý, od 17:00 <br /> 🗺️ Popská 3, Opava',
      href: ''
    }
  ],
  teams: [
    {
      image: 'member_1.png',
      name: 'Miloš eliaš',
      position: 'Starší sboru'
    },
    {
      image: 'member_2.png',
      name: 'Miroslav Wolinger',
      position: 'Starší sboru'
    },
    {
      image: 'member_3.png',
      name: 'David eliáš',
      position: 'Vedoucí chval'
    }
  ],
  believes: [
    {
      image: 'book_icon.svg',
      heading: 'Bible',
      text: 'Církev Studna Živé vody je společenstvím lidí, kteří chtějí svou víru žít naplno. Základem naší víry je Bible. Bible, a pouze Bible, je autoritativní Boží slovo. Jen ona je konečnou autoritou při určování všech pravd.'
    },
    {
      image: 'rio_icon.svg',
      heading: 'Ješíš kristus',
      text: 'Na Zemi byl Ježíš 100% Bůh a 100% člověk. Je jediným mužem, který kdy žil bez hříchu. Jako Ježíšovi následovníci chceme žít podle největšího Božího přikázání: milovat Boha a lidi kolem sebe.'
    },
    {
      image: 'three_icon.svg',
      heading: 'Trojice',
      text: 'Existuje jeden Bůh, věčně existující ve třech osobách: Otec, Syn a Duch svatý. Tito tři jsou si rovni.'
    },
    {
      image: 'water-hand_icon.svg',
      heading: 'Spása',
      text: 'Jsme zachráněni milostí skrze víru v Ježíše Krista. Spása je dar od Boha, není výsledkem našich dobrých skutků ani žádného lidského úsilí.'
    }
  ]
})
