<script xmlns:svelte="http://www.w3.org/1999/html">
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import MdInfo from "svelte-icons/md/MdInfo.svelte";
    import MdPerson from "svelte-icons/md/MdPerson.svelte";
</script>

<svelte:head><title>Contatti</title></svelte:head>

<div class="font-bold text-center text-5xl mb-6 my-0">I nostri contatti!</div>
<div class="grid col-start-2 grid-cols-3 center md:grid-cols-6 3xl:grid-cols-10 gap-6">
    <div class="card bg-white dark:bg-navbar-background-dark xl:col-start-3 xl:col-end-9 col-span-5 xl:col-span-6 row-span-6 flex flex-col px-6">
        <div class="grid grid-cols-3 items-center justify-between">
            <div class="flex">
                <span class="h-10 flex items-start"><MdInfo/></span>
            </div>
            <span class="w-full text-center font-bold text-2xl "
            >Contattaci</span
            >
        </div>
        <span class="flex-grow mt-5 text">
            Potete trovare molte informazioni inerenti al progetto sul sito, ma in caso di qualche altre domanda potete contattarci su:
            <ul class="list-disc list-inside m-2 ">
                <li class="">
                    Tutti i nostri canali social che potete trovare in fondo al sito.
                </li>
                <li>
                    Sulla nostra email: bandaextralarga@gmail.com
                </li>
            </ul>
            Il nostro social media manager vi risponderà il più in fretta possibile!
    </span>
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