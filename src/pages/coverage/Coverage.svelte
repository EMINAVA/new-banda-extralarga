<svelte:head><title>Controlla copertura</title></svelte:head>
<script>
    import MdInfo from "svelte-icons/md/MdInfo.svelte";
    import Button from "../../components/Button.svelte";
    import { getCities, getUrl, regions, searchAddress } from "../../lib/copertura";
    import CommentCard from "../../components/CommentCard.svelte";

    let selectedRegion = null;
    let cities;
    let selectedCity = null;
    let address;
    let results;

    $: updateCities(selectedRegion);
    $: getResults(address);

    async function updateCities() {
        selectedRegion && (cities = await getCities(selectedRegion));
        selectedRegion && address && (await getResults())
    }

    async function getResults() {
        if (!selectedRegion || !selectedCity || !address) return;
        results = await searchAddress(selectedRegion, selectedCity, address);
        console.log(results)
    }
</script>

<div>
  <div class="font-bold text-center text-5xl mb-6 my-0">CONTROLLO COPERTURA</div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card bg-white dark:bg-navbar-background-dark flex flex-col px-6">
      <div class="grid grid-cols-7 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdInfo/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Regione</span>
      </div>
      <span class="flex-grow mt-5 p-2">
        <select bind:value={selectedRegion} name="region" id="region" class="w-full input">
          {#each regions as region }
            <option value={region}>{region.region_name}</option>
          {/each}
        </select>
      </span>
    </div>

    <div class="card bg-white dark:bg-navbar-background-dark flex flex-col px-6">
      <div class="grid grid-cols-7 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdInfo/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Comune</span>
      </div>
      <span class="flex-grow mt-5 p-2">
        {#if cities}
          <select bind:value={selectedCity} name="city" id="city" class="w-full input">
            {#each cities as city }
              <option value={city}>{city.city_name}</option>
            {/each}
          </select>
        {/if}
      </span>
    </div>

    <div class="card bg-white dark:bg-navbar-background-dark flex flex-col px-6">
      <div class="grid grid-cols-7 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdInfo/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Indirizzo</span>
      </div>
      <span class="flex-grow mt-5 p-2">
        {#if selectedCity}
          <input type="text" bind:value={address} class="w-full input p-3">
        {/if}
      </span>
    </div>

    <div class="card bg-white dark:bg-navbar-background-dark flex flex-col px-6 md:col-span-3">
      <div class="grid grid-cols-7 items-center justify-between">
        <div class="flex">
          <span class="h-10 flex items-start"><MdInfo/></span>
        </div>
        <span class="w-full text-center font-bold text-2xl col-span-5">Risultati</span>
      </div>
      <span class="flex-grow mt-5 flex flex-row flex-wrap min-h-5">
        {#if results}
          {#each results as result }
            <Button
              on:click={window.location = getUrl(selectedRegion, selectedCity, result)}
              class="ml-4 mb-2 bg-yellow-600">{result.indirizzo_compl}</Button>
          {/each}
        {/if}
      </span>
    </div>

    <CommentCard cols="1" mdCols="3" lgCols="3"/>
  </div>
</div>


<style lang="postcss">
    @tailwind components;

    .card {
        @apply flex justify-between  py-4 rounded-lg shadow-lg;

    @screen md {
        @apply space-x-6;
    }
    }

    .input {
        @apply rounded-xl p-3 bg-gray-200;
    }
</style>
