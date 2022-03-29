<script xmlns:svelte="http://www.w3.org/1999/html">
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import MdInfoOutline from "svelte-icons/md/MdInfoOutline.svelte";
</script>

<svelte:head><title>Report</title></svelte:head>

<div class="font-bold text-center text-5xl mb-6 my-0">REPORT</div>

<div class="grid col-start-2 grid-cols-3 center md:grid-cols-6 3xl:grid-cols-10 gap-6">
    <div class="card order-1 bg-white dark:bg-navbar-background-dark xl:col-start-2 xl:col-end-10 xl:col-span-8 row-span-2 flex flex-col px-6">
        <div class="grid grid-cols-7 items-center justify-between">
            <div class="flex">
                <span class="h-10 flex items-start"><MdInfoOutline/></span>
            </div>
            <span class="w-full text-center font-bold text-2xl col-span-5">REPORT PROGETTO BANDA ULTRA LARGA</span>
        </div>
    <p class="flex-grow mt-5">
      Lo scopo del progetto banda ultra larga è diffondere in tutta la Lombardia una connessione in fibra ottica di almeno 100 mb/s, 
      noi ci stiamo occupando di seguire l'andamento del progetto. 
      All'inizio del programma il blogger si è occupato di scrivere un testo in cui presentava il nostro lavoro e le nostre intenzioni, 
      spiegando anche brevemente i nostri compiti; 
      invece gli analisti si sono occupati di ideare un'intervista in cui rispondevano a delle ipotetiche domande fatte da una persona esterna sul progetto. 
      Mentre lo scout e gli analisti cercavano informazioni per ampliare il piano, i coder hanno iniziato a creare il sito, 
      aiutati dal blogger e il social media manager che sceglievano le informazioni più pertinenti da mettere nella home. 
      Successivamente il social media manager e lo storyteller hanno registrato un video presentazione di tutti i componenti della squadra; 
      con questo è finita la prima fase del progetto.
      Nella seconda fase lo scopo principale era redigere un articolo di data journalism a partire dai dati trovati nella prima fase. 
      Il blogger e il social media manager si sono occupati di organizzare e documentare il lavoro del team, raccontando gli avanzamenti della ricerca; 
      lo storyteller e il designer hanno verificato che i grafici e le infografiche realizzate nell'articolo di Data Journalism fossero efficaci a livello comunicativo. 
      Il blogger e il social media manager si sono occupati anche di postare tutti i contenuti sui social. 
      Per concludere la seconda fase abbiamo fatto dei video individuali in cui ognuno spiegava il proprio ruolo nel gruppo.
     Nella terza fase il project manager ha organizzato come sempre un piano di lavoro e delle scadenze per tutto il gruppo, invece lo storyteller, 
     il designer ed i coder hanno realizzato un video in cui presentavano  il sito; 
     il blogger e il social media manager hanno diffuso sui social il report di monitoraggio realizzato su www.monithon.eu/it/.
    </p>
    </div>
</div>

<style lang="postcss">
    @tailwind components;

    @media screen and (max-width: 480px) {
        .card {
            column-span: 5;
        }
    }

    .card {
        @apply flex justify-between  py-4 rounded-lg shadow-lg;
        @screen md {
            @apply space-x-6;
        }
    }
</style>