<script xmlns:svelte="http://www.w3.org/1999/html">
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import MdDescription from "svelte-icons/md/MdDescription.svelte";
    import MdDateRange from "svelte-icons/md/MdDateRange.svelte";
    import MdInfo from "svelte-icons/md/MdInfo.svelte";
    import MdPerson from "svelte-icons/md/MdPerson.svelte";
</script>

<svelte:head><title>Contatti</title></svelte:head>

<div class="grid grid-cols-3 md:grid-cols-6 3xl:grid-cols-10 gap-6">
    
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