<script xmlns:svelte="http://www.w3.org/1999/html">
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import MdMap from "svelte-icons/md/MdMap.svelte";
    import MdContactMail from 'svelte-icons/md/MdContactMail.svelte'
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
    import MdLocalPhone from 'svelte-icons/md/MdLocalPhone.svelte'
    import MdEmail from 'svelte-icons/md/MdEmail.svelte'
    import CommentCard from "../../components/CommentCard.svelte";
</script>

<svelte:head><title>Contatti</title></svelte:head>

<div>
  <div class="font-bold text-center text-5xl mb-6 my-0">I nostri contatti!</div>
  <div class="grid grid-cols-10 gap-6">
    <div
      class="card bg-white dark:bg-navbar-background-dark col-span-10 xl:col-span-5 flex flex-col px-6 row-span-2">
      <div class="grid grid-cols-3 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdMap/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl ">Mappa</span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.055284948175!2d9.181145315752607!3d45.448542042508684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c408a3627611%3A0x41478e3a2be9ed7e!2sIndustrial%20Technical%20Institute%20G.%20Feltrinelli!5e0!3m2!1sen!2sit!4v1648574029676!5m2!1sen!2sit"
        class="border-0 h-full rounded-lg mt-3 mb-2 min-h-50" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div
      class="card bg-white dark:bg-navbar-background-dark col-span-10 row-span-1 xl:col-span-5 flex flex-col px-6">
      <div class="grid grid-cols-3 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdContactMail/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl ">Contattaci</span>
      </div>
      <span class="flex-grow mt-5 text">
        Potete trovare molte informazioni inerenti al progetto sul sito, ma in caso di qualche altre domanda potete contattarci su:
        <span class="flex items-center mt-3">
          <span class="block h-9 w-9 mr-3"><FaInstagram/></span> Su tutti i nostri social
        </span>
        <span class="flex items-center mt-3">
          <span class="block h-9 w-9 mr-3"><MdLocalPhone/></span> Per telefono o messaggio: 339 995 7060
        </span>
        <span class="flex items-center my-3">
          <span class="block h-9 w-9 mr-3"><MdEmail/></span> Tramite mail:
          <a href="mailto:bandaextralarga@gmail.com"
             class="text-blue-700 inline-block ml-1">bandaextralarga@gmail.com</a>
        </span>
        Il nostro social media manager vi risponderà il più in fretta possibile!
      </span>
    </div>

    <div class="card bg-white dark:bg-navbar-background-dark col-span-10 xl:col-span-5 flex-grow flex-col p-0 overflow-hidden">
      <iframe src='https://www.juicer.io/api/feeds/banda-extra-larga/iframe' height="500" class="block w-full"></iframe>
    </div>

    <CommentCard cols="10" mdCols="10"/>
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