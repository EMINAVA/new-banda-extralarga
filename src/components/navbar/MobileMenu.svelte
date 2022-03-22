<script>
    import Button from "../Button.svelte";
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";
    import pages from "../../lib/pages";
    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher();

    export let open = false;

    onMount(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')
        mediaQuery.addEventListener("change", (e) => e.matches && (open = false))
    });
</script>

{#if open}
  <div class="flex flex-col pt-2" transition:slide={{ duration: 300 }}>
    {#each pages as { href, name }}
      <div class="w-full flex px-4 pb-4">
        <Button useLink bgDark="navbar-link-dark" bg="navbar-link" {href} class="w-full text-center"
                on:click={() => open = false}>
          {name}
        </Button>
      </div>
    {/each}

    <hr class="mx-4 mb-4 box-content border-navbar-link dark:border-navbar-link-dark border-t-2 ">

    <div class="w-full flex px-4 pb-4 flex flex-col">
      <Button useLink href="" class="w-full text-center mb-4" on:click={() => dispatcher("darkModeChange")}>Dark Mode
      </Button>
      <Button useLink href="" class="w-full text-center" on:click={() => open = false}>Accedi</Button>
    </div>
  </div>
{/if}