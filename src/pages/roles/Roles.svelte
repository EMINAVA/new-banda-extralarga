<script>
  import "@carbon/charts/styles.min.css";
  import "carbon-components/css/carbon-components.min.css";
  import MdDescription from "svelte-icons/md/MdDescription.svelte"
  import MdDateRange from "svelte-icons/md/MdDateRange.svelte";
  import MdInfo from "svelte-icons/md/MdInfo.svelte";
  import MdPerson from "svelte-icons/md/MdPerson.svelte";
</script>

<!--<div>-->
  <div class="font-bold text-center text-5xl mb-6">BANDA ULTRA LARGA</div>
  <div class="grid grid-cols-3 md:grid-cols-6 3xl:grid-cols-10 gap-6">
    <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 3xl:col-span-4 row-span-1 flex flex-col px-6">
      <div class="grid grid-cols-7 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdDescription/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Descrizione</span>
      </div>
      <span class="block mb-1 flex-grow mt-5">
        Il progetto banda ultra larga ha lo scopo di servire l'intero territorio italiano di connessione a banda
        ultra
        larga nelle zone dove ancora non è presentel Piano nazionale per la banda ultralarga prevede un intervento
        pubblico che investe il territorio nazionale distinguendo tra:
      </span>
      <ul class="list-disc list-inside mb-3">
        <li>
          Le aree cd. ‘bianche’, a fallimento di mercato, in cui sono assenti interventi di investimento di
          operatori
          privati;
        </li>
        <li>
          Le aree cd. ‘grigie’ e ‘nere’ ovvero in concorrenza, ove sono già presenti una o più reti in banda
          ultralarga,
          al fine di conseguire, anche in tali aree, un importante salto di qualità per la realizzazione di reti
          in banda
          ultraveloce al gigabit.
        </li>
      </ul>
    </div>
    <div class="card order-2 bg-white dark:bg-navbar-background-dark col-span-3 row-span-1 flex flex-col px-6">
      <div class="grid grid-cols-3 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdDescription/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl ">Descrizione</span>
      </div>
      <p class="flex-grow mt-5">
        Il progetto “Grande Progetto Banda Ultra Larga” ha lo scopo di portare una connessione a banda ultra larga in
        tutte le zone bianche della Lombardia. Una zona bianca è una zona dove l’investimento da parte degli Internet
        Service Providers non è economicamente conveniente, e quindi le connessioni rimangono quelle ADSL che si usavano
        nel passato.
      </p>
    </div>
    <div class="card order-4 bg-white dark:bg-navbar-background-dark col-span-6 row-span-2 flex flex-col px-6">
      <div class="grid grid-cols-7 items-center">
        <div class="flex">
          <span class="h-10 flex items-start"><MdPerson/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Chi siamo?</span>
      </div>
        <span class="flex-grow mt-5">
          Nel nostro progetto ci siamo suddivisi nei vari ruoli:
        </span>
        <ul class="list-disc list-inside mb-2">
          <li class="">Tesainer-project menager: si occupa di organizzare il lavoro nel gruppo e presentarlo;</li>
          <li>Nava e Genna-coder: si occupano della parte di programmazione del gruppo, programmando le applicazioni
            necessarie al gruppo;
          </li>
          <li>Parlabene e Caponeri-analista: raccoglie informazioni da varie fonti analitiche;</li>
          <li>De Chiara-scout: reperisce le fonti di informazione;</li>
          <li>Nedelcu-storyteller: presenta il progetto una volta finito;</li>
          <li>Bertani-social media manager: si occupa di tutti i social del progetto;</li>
          <li>Macchiarulo-blogger: si occupa di inserire le informazioni sui vari social;</li>
          <li>Bortolami-designer: si occupa delle parti grafiche del progetto;</li>
        </ul>
    </div>
    <div class="card order-3 bg-white dark:bg-navbar-background-dark col-span-3 row-span-1">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video class="h-96 m-auto" height="400" controls>
        <source type="video/mp4" src="/img/intro_video.mp4">
      </video>    
    </div>
    
  </div>

<!---
  <div class="container mx-auto px-4">
    <span class="block mb-1">
      Il progetto banda ultra larga ha lo scopo di servire l'intero territorio italiano di connessione a banda
      ultra
      larga nelle zone dove ancora non è presentel Piano nazionale per la banda ultralarga prevede un intervento
      pubblico che investe il territorio nazionale distinguendo tra:
    </span>
    <ul class="list-disc list-inside mb-3">
      <li>
        Le aree cd. ‘bianche’, a fallimento di mercato, in cui sono assenti interventi di investimento di
        operatori
        privati;
      </li>
      <li>
        Le aree cd. ‘grigie’ e ‘nere’ ovvero in concorrenza, ove sono già presenti una o più reti in banda
        ultralarga,
        al fine di conseguire, anche in tali aree, un importante salto di qualità per la realizzazione di reti
        in banda
        ultraveloce al gigabit.
      </li>
    </ul>
    <span class="block mb-1">
      Il Piano pertanto si articola in due fasi. La prima riguarda l’attuazione di misure a sostegno
      dell’infrastrutturazione delle aree bianche.
      A seguire, nella seconda fase, verranno implementati gli strumenti a favore dello sviluppo di reti
      ultraveloci
      nelle aree nere e grigie del Paese.
    </span>
    <span class="block mb-1">
      Nel nostro progetto ci siamo suddivisi nei vari ruoli:
    </span>
    <ul class="list-disc list-inside mb-2">
      <li class="">Tesainer-project menager: si occupa di organizzare il lavoro nel gruppo e presentarlo;</li>
      <li>Nava e Genna-coder: si occupano della parte di programmazione del gruppo, programmando le applicazioni
        necessarie al gruppo;
      </li>
      <li>Parlabene e Caponeri-analista: raccoglie informazioni da varie fonti analitiche;</li>
      <li>De Chiara-scout: reperisce le fonti di informazione;</li>
      <li>Nedelcu-storyteller: presenta il progetto una volta finito;</li>
      <li>Bertani-social media manager: si occupa di tutti i social del progetto;</li>
      <li>Macchiarulo-blogger: si occupa di inserire le informazioni sui vari social;</li>
      <li>Bortolami-designer: si occupa delle parti grafiche del progetto;</li>
    </ul>
    <div class="flex flex-wrap mt-2">
      <img class="h-96" src="/img/mappa.jpg" alt="Mappa Lombardia">
      <video class="h-96 m-auto" height="400" controls>
        <source type="video/mp4" src="/img/intro_video.mp4">
      </video>
    </div>
  </div>
</div>-->
<style lang="postcss">
  @tailwind components;

  .card {
      @apply flex justify-between  py-4 rounded-lg shadow-lg;
      @screen md {
          @apply space-x-6;
      }
  }
</style>