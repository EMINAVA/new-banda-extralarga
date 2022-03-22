<script xmlns:svelte="http://www.w3.org/1999/html">
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import MdDescription from "svelte-icons/md/MdDescription.svelte";
    import MdDateRange from "svelte-icons/md/MdDateRange.svelte";
    import MdInfo from "svelte-icons/md/MdInfo.svelte";
    import MdPerson from "svelte-icons/md/MdPerson.svelte";
</script>

<svelte:head><title>Ruoli</title></svelte:head>
<div>
    <div class="font-bold text-center text-5xl mb-6 my-0">BANDA ULTRA LARGA</div>
    <div class="grid grid-cols-3 md:grid-cols-6 3xl:grid-cols-10 gap-6">
        <div
                class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 xl:col-span-4 row-span-1 flex flex-col px-6"
        >
            <div class="grid grid-cols-7 items-center justify-between">
                <div class="flex">
                    <span class="h-10 flex items-start"><MdInfo/></span>
                </div>
                <span class="w-full text-center font-bold text-2xl col-span-5"
                >Progetto</span
                >
            </div>
            <span class="block mb-1 flex-grow mt-5">
            Il progetto banda ultra larga ha lo scopo di servire l'intero
            territorio italiano di connessione a banda ultra larga nelle zone
            dove ancora non è presente. Il Piano nazionale per la banda ultralarga
            prevede un intervento pubblico che investe il territorio nazionale
            distinguendo tra:
        </span>
            <ul class="list-disc list-inside mb-3">
                <li>
                    Le aree cd. ‘bianche’, a fallimento di mercato, in cui sono
                    assenti interventi di investimento di operatori privati;
                </li>
                <li>
                    Le aree cd. ‘grigie’ e ‘nere’ ovvero in concorrenza, ove sono
                    già presenti una o più reti in banda ultralarga, al fine di
                    conseguire, anche in tali aree, un importante salto di qualità
                    per la realizzazione di reti in banda ultraveloce al gigabit.
                </li>
            </ul>
        </div>
        <div
                class="card order-2 bg-white dark:bg-navbar-background-dark col-span-3 xl:col-span-3 row-span-1 flex flex-col px-6"
        >
            <div class="grid grid-cols-3 items-center justify-between">
                <div class="flex">
                    <span class="h-10 flex items-start"><MdDescription/></span>
                </div>
                <span class="w-full text-center font-bold text-2xl "
                >Descrizione</span
                >
            </div>
            <span class="flex-grow mt-5">
            Il progetto “Grande Progetto Banda Ultra Larga” ha lo scopo di
            portare una connessione a banda ultra larga in tutte le zone bianche
            della Lombardia. Una zona bianca è una zona dove l’investimento da
            parte degli Internet Service Providers non è economicamente
            conveniente, e quindi le connessioni rimangono quelle ADSL che si
            usavano nel passato.
        </span>
        </div>
        <div
                class="card order-4 bg-white dark:bg-navbar-background-dark col-span-3 xl:col-span-4 row-span-2 flex flex-col px-6"
        >
            <div class="grid grid-cols-7 items-center">
                <div class="flex">
                    <span class="h-10 flex items-start"><MdPerson/></span>
                </div>
                <span class="w-full text-center font-bold text-2xl col-span-5"
                >Chi siamo?</span
                >
            </div>
            <span class="flex-grow mt-5">
            Nel nostro progetto ci siamo suddivisi nei vari ruoli:
        </span>
            <ul class="list-disc list-inside mb-2">
                <li class="">
                    Tesainer-project menager: si occupa di organizzare il lavoro nel
                    gruppo e presentarlo;
                </li>
                <li>
                    Nava e Genna-coder: si occupano della parte di programmazione
                    del gruppo, programmando le applicazioni necessarie al gruppo;
                </li>
                <li>
                    Parlabene e Caponeri-analista: raccoglie informazioni da varie
                    fonti analitiche;
                </li>
                <li>De Chiara-scout: reperisce le fonti di informazione;</li>
                <li>Nedelcu-storyteller: presenta il progetto una volta finito;</li>
                <li>
                    Bertani-social media manager: si occupa di tutti i social del
                    progetto;
                </li>
                <li>
                    Macchiarulo-blogger: si occupa di inserire le informazioni sui
                    vari social;
                </li>
                <li>
                    Bortolami-designer: si occupa delle parti grafiche del progetto;
                </li>
            </ul>
        </div>
        <div
                class="card order-3 bg-white dark:bg-navbar-background-dark col-span-3 xl:col-span-3 row-span-1">

            <!-- svelte-ignore a11y-media-has-caption -->
            <video class="h-96 m-auto rounded-lg" height="400" controls>
                <source type="video/mp4" src="/img/intro_video.mp4"/>
            </video>

        </div>

        <div
                class="card order-5 bg-white dark:bg-navbar-background-dark col-span-3 xl:col-span-6 row-span-2">

            <iframe width="640" height="450" class="m-auto rounded-lg" src="https://www.youtube.com/embed/rkhVsPsE6DA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

        </div>
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
