<script>
    import { link } from 'svelte-routing';

    export let text = "white";
    export let textDark = "white";
    export let bg = "accent";
    export let bgDark = "accent";

    export let useLink = false;
    export let href;

    let clazz;
    export { clazz as class };
</script>
{#if useLink}
  <a href={href} use:link on:click
     class="shadow-lg text-{text} bg-{bg} dark:text-{text} dark:bg-{bgDark} rounded-md px-4 py-2 font-bold transform duration-300 hover:scale-105 {clazz}">
    <slot/>
  </a>
{:else }
  <button on:click
          class="shadow-lg text-{text} bg-{bg} dark:text-{text} dark:bg-{bgDark} rounded-md px-4 py-2 font-bold transform duration-300 hover:scale-105 {clazz}">
    <slot/>
  </button>
{/if}