
//get the searchdata.js absolute URL
var scripts = document.getElementsByTagName('script');

//load the current running script (which has to be this script as its running right now)
var absURL = scripts[scripts.length-1].src;

//remove the JS file name
absURL = absURL.substring(0,absURL.lastIndexOf("/")+1);

var promotion = {
  "banksparing" : {"header": "Det er lurt å spare i bank!",
            "text": "Da får du nemlig rente på pengene dine!", 
            "name": "Den som sparer, han har!", 
            "url": "http://www.storebrand.no/site/stb.nsf/Pages/sparekonto.html"},            
  "pensjon" : {"header": "Få gode råd om hvordan du får bedre pensjon",
            "text": "Jo tidligere du kommer i gang, jo mer har du å hente på sparingen. Her kan du enkelt finne den spareformen som er mest effektiv for deg.", 
            "name": "kategori/pensjon.html", 
            "url": absURL+"../brukertest/vanlig/kategori/pensjon.html"},
  "lån" : {"header": "Vet du hva du får i bank og lån",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "søk" : {"header": "Vet du hva du får i pensjon",
           "text": "Write something here", 
           "name": "Write something here", 
           "url":"dummy.html"},
  "eiendom" : { "header": "Storebrand Eiendom er en av Norges største eiendomsforvaltere.",
                "text": "Vi eier kjøpesentre, kontorbygg og lagerbygg.",
                "name": "Se tjenestene våre",
                "url": "dummy.html"},
  "Rapporter" : { "header": "Q2 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},  
  "Rapporter" : { "header": "Q3 rapporten er klar.",
                "text": "En god periode med godt resultat er stikkordene fra pressen",
                "name": "Finn rapportene her",
                "url": "dummy.html"},                 
  "Kalkulator" : { "header": "Bilkalulator.",
                "text": "Vi har beste pris",
                "name": "Finn rapportene her",
                "url": "dummy.html"}, 
  "kontorbygg" : { "header": "Storebrand Eiendom forvalter mange kontorbygg.",
                "text": "Lei kontor fra oss!",
                "name": "Se kontorbyggene våre",
                "url": "dummy.html"}                
};

var typeaheads = {
  "anbefalte" :
    [    
      {"name": "Fond"},
      {"name": "Fondssparing"},    
      {"name": "Bank"},
      {"name": "Banksparing"},
      {"name": "Forsikring"},
      {"name": "Bilhenger"},
      {"name": "Pensjon"},
      {"name": "Apekatt"}
    ],
    "direkte" : [
      {"name": "Kundefordeler","url":absURL+"../brukertest/vanlig/tema3/kundefordeler.html"},
      {"name": "Fond","url" : "http://www.storebrand.no/site/stb.nsf/Pages/forsideperson.html"},
      {"name": "Fondslister","url":"http://www.storebrand.no/site/stb.nsf/Pages/fondsliste-utvalgte-fond.html"},
      {"name": "Lær mer om fondsparing","url":"http://www.storebrand.no/site/stb.nsf/pages/fond_sparing.html"},
      {"name": "Bærekraft","url":"http://www.storebrand.no/site/stb.nsf/Pages/forsidebarekraft.html"},
      {"name": "Kjøp fond","url":"https://www2.storebrand.no/fondweb/productinfo.html"},
      {"name": "Sparing i  fond","url":"https://www2.storebrand.no/fondweb/productinfo.html"},
      {"name": "Våre anbefalte fond","url":"https://www2.storebrand.no/spareveileder/general.html"},
      {"name": "Delphi","url":"https://www.delphi.no/site/delphino.nsf/Pages/hjem.html"} ,
      {"name": "Lær om pensjon","url" : absURL+"../brukertest/vanlig/kategori/pensjon.html"},
      {"name": "Pensjonskalkulator","url":absURL+"../brukertest/vanlig/verktoy/pensjonstall.html"},
      {"name": "Pensjonssparing","url":absURL+"../brukertest/vanlig/artikkel/pensjonssparing.html"},
      {"name": "Sparing til pensjon","url":absURL+"../brukertest/vanlig/artikkel/pensjonssparing.html"},
      {"name": "Egen sparing pensjon","url":absURL+"../brukertest/vanlig/produkt/egensparingpensjon.html"},
      {"name": "Banksparing","url" : absURL+"../brukertest/vanlig/kategori/sparing.html"},
      {"name": "Sparing i bank","url" : absURL+"../brukertest/vanlig/kategori/sparing.html"},
      {"name": "Bank og LÅn","url":absURL+"../brukertest/vanlig/kategori/bankoglaan.html"},
      {"name": "Bolig lån","url":absURL+"../brukertest/vanlig/produkt/boliglaan.html"},
      {"name": "Bolig lån for unge","url":absURL+"../brukertest/vanlig/produkt/boliglaanunge.html"},
      {"name": "Lånekalkulator","url":absURL+"../brukertest/vanlig/verktoy/laanekalkulator.html"},
      {"name": "Dagens Lånerenter","url":absURL+"../brukertest/vanlig/artikkel/dagenslaanerenter.html"},
      {"name": "Søke boliglån","url":absURL+"../brukertest/vanlig/artikkel/sokeboliglaan.html"},
      {"name": "Vilkår for boliglån","url":absURL+"../brukertest/vanlig/artikkel/vilkaarboliglaan.html"},
      {"name": "Tips om forsikring","url":absURL+"../brukertest/vanlig/kategori/forsikring.html"},
      {"name": "Spar penger på forsikring","url":absURL+"../brukertest/vanlig/kategori/forsikring.html"},
      {"name": "Bilforsikring","url":absURL+"../brukertest/vanlig/produkt/bilforsikring.html"},
      {"name": "Bil og kjøretøy","url" : absURL+"../brukertest/vanlig/tema2/bilogkjoretoy.html"},
      {"name": "Hus og hjem","url" : absURL+"../brukertest/vanlig/tema2/husoghjem.html"},
      {"name": "At om bilforsikring","url" : absURL+"../brukertest/vanlig/artikkel/bilforsikring.html"},
      {"name": "Bonus på Kjøretøy","url" : absURL+"../brukertest/vanlig/artikkel/bonuskjoretoy.html"}
     ]
};

var searchData ={
  search: {
    typeahead: {
      direkte: [
        {
          query: "sparing",
          name: "Alt du trenger å vite om sparing",
          url: "/site/3/privat/sparing"
        },
        {
          query: "Pensjon",
          name: "Hovedside for pensjon",
          url: "/site/3/privat/pensjon"
        },
        {
          query: "bank",
          name: "Bank og lån",
          url: "/site/3/privat/bank-l%C3%A5n"
        },
        {
          query: "lån",
          name: "Bank og lån",
          url: "/site/3/privat/bank-l%C3%A5n"
        },
        {
          query: "Pensjon",
          name: "Pensjon med stor P",
          url: "/site/3/search"
        },
        {
          query: "forsikring",
          name: "Forsikring er også bra",
          url: "/site/3/test/min-f%C3%B8rste-artikkelside"
        },
        {
          query: "pensjon",
          name: "Lær mer om pensjon",
          url: "/site/3/test/min-f%C3%B8rste-artikkelside"
        },
        {
          query: "pensjon",
          name: "Pensjon med liten p",
          url: "/site/3/menyer/test/desktop/toppmeny/privat/produkter/bank-og-l%C3%A5n"
        },
        {
          query: "pensjonssparing",
          name: "Pensjonssparing",
          url: "/site/3/menyer/test/desktop/toppmeny/privat/produkter/bank-og-l%C3%A5n"
        },
        {
          query: "Veihjelp",
          name: "Veihjelp",
          url: "/site/3/privat/verkt%C3%B8ylinje"
        },
        {
          query: "Meldskade",
          name: "Meld skade",
          url: "/site/3/privat/verkt%C3%B8ylinje"
        },
        {
          query: "apekatt",
          name: "Meld skade",
          url: "/site/3/privat/verkt%C3%B8ylinje"
        }
      ]
    },
    promotion: {
      pensjon: [
        {
          header: "Hovedside for pensjon",
          text: "Her finner du svar og informasjon til alt du trenger å vite om pensjon",
          name: "Lær alt om pensjon",
          url: "/site/3/privat/pensjon"
        },
        {
          header: "Det er lurt å spare i bank!",
          text: "Da får du nemlig rente på pengene dine!",
          name: "Den som sparer, han har!",
          url: "/site/3/test/min-f%C3%B8rste-artikkelside"
        }
      ],
      pensjonssparing: [
        {
          header: "Det er lurt å spare i bank!",
          text: "Da får du nemlig rente på pengene dine!",
          name: "Den som sparer, han har!",
          url: "/site/3/test/min-f%C3%B8rste-artikkelside"
        },
        {
          header: "Det er lurt å spare til pensjon!",
          text: "Da får du mer å rutte med når du blir gammel",
          name: "Start pensjonssparing her",
          url: "/site/3/menyer/test/desktop/toppmeny/privat/produkter/bank-og-l%C3%A5n"
        }
      ]
    }
  }
}