<script>
    import { onMount } from "svelte";

    export let lgCols = "10";
    export let mdCols = "6";
    export let cols = "3";

    onMount(() => {
        const d = document, s = d.createElement('script');
        s.src = 'https://banda-extra-larga.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })
</script>

<div class="order-5 col-span-{cols} md:col-span-{mdCols} 3xl:col-span-{lgCols}">
  <div id="disqus_thread"></div>
</div>