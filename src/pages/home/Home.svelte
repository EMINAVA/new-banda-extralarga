<svelte:head><title>Banda Extralarga</title></svelte:head>
<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";

    import BudgetChart from "./BudgetChart.svelte";
    import UsedBudgetChart from "./UsedBudgetChart.svelte";
    import MdDescription from "svelte-icons/md/MdDescription.svelte";
    import MdDateRange from "svelte-icons/md/MdDateRange.svelte";
    import MdInfo from "svelte-icons/md/MdInfo.svelte";
    import MdPerson from "svelte-icons/md/MdPerson.svelte";
    import CommentCard from "../../components/CommentCard.svelte";
</script>

<div class="grid grid-cols-3 md:grid-cols-6 3xl:grid-cols-10 gap-6">
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 3xl:col-span-4 row-span-3">
    <BudgetChart/>
  </div>
  <div class="card bg-white dark:bg-navbar-background-dark col-span-3 row-span-2">
    <UsedBudgetChart/>
  </div>
  <div class="card order-3 bg-white dark:bg-navbar-background-dark col-span-3 row-span-2 flex flex-col px-6">
    <div class="grid grid-cols-7 items-center justify-between">
      <div class="flex">
        <span class="h-10 flex items-start"><MdInfo/></span>
      </div>
      <span class="w-full text-center font-bold text-2xl col-span-5">Dati di Contesto</span>
    </div>
    <p class="flex-grow mt-5">
      Il progetto è stato preso in carico dall’azienda Open Fiber. Il divario digitale del Paese appare ben evidente: la
      quota di abbonamenti almeno a 100 Megabit per secondo in Italia si
      attesta intorno al 14%, rispetto ad una media europea che sfiora il 26%. Gli operatori hanno fornito i dati per
      ciascun indirizzo civico – oltre 19,8 milioni – ricadente nelle aree grigie
      e nere in 4.250 comuni italiani per 25,8 milioni di unità immobiliari. I rimanenti 12 milioni di indirizzi civici,
      in oltre 6.700 comuni italiani sono oggetto dell’intervento pubblico
      nelle cosiddette aree bianche.
    </p>
  </div>
  <div class="card order-2 bg-white dark:bg-navbar-background-dark col-span-3 row-span-2 flex flex-col px-6">
    <div class="grid grid-cols-3 items-center justify-between">
      <div class="flex">
        <span class="h-10 flex items-start"><MdDescription/></span>
      </div>
      <span class="w-full text-center font-bold text-2xl">Descrizione</span>
    </div>
    <p class="flex-grow mt-5">
      Il progetto “Grande Progetto Banda Ultra Larga” ha lo scopo di portare una connessione a banda ultra larga in
      tutte le zone bianche della Lombardia. Una zona bianca è una zona dove
      l’investimento da parte degli Internet Service Providers non è economicamente conveniente, e quindi le connessioni
      rimangono quelle ADSL che si usavano nel passato.
    </p>
  </div>
  <div class="card order-1 bg-white dark:bg-navbar-background-dark col-span-3 row-span-2 flex flex-col px-6">
    <div class="grid grid-cols-7 items-center justify-between">
      <div class="flex">
        <span class="h-10 flex items-start"><MdPerson/></span>
      </div>
      <span class="w-full text-center font-bold text-2xl col-span-5">Valore per la Communità</span>
    </div>
    <p class="flex-grow mt-5">
      Il grande progetto banda ultra larga porterà una connessione a banda ultra larga nei paesi dove non è ancora
      presente. Il progetto fornisce a questi paesi un servizio ormai fondamentale in
      questa società digitale, ed è giusto che tutti ne abbiano accesso.
    </p>
  </div>
  <div class="card order-4 bg-white dark:bg-navbar-background-dark col-span-3 flex flex-col px-6 3xl:col-span-4">
    <div class="grid grid-cols-7 items-center justify-between">
      <div class="flex">
        <span class="h-10 flex items-start"><MdDateRange/></span>
      </div>
      <span class="w-full text-center font-bold text-2xl col-span-5">Date</span>
    </div>
    <p class="flex-grow mt-5">
      <span class="font-semibold">Inizio Progetto</span>: 01/11/2017 <br/>
      <span class="font-semibold">Fine Prevista</span>: 31/12/2020 <br/>
      Il progetto non è ancora stato completato per via di ritardi dovuti al covid.
    </p>
  </div>
  <CommentCard/>
</div>

<style lang="postcss">
    @tailwind components;

    .card {
        @apply flex justify-between  py-4 rounded-lg shadow-lg;

    @screen md {
        @apply space-x-6;
    }
    }
</style>
