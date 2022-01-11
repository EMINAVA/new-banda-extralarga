<script>
    import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
    import FaFacebookF from "svelte-icons/fa/FaInstagram.svelte";
    import FaTwitter from "svelte-icons/fa/FaInstagram.svelte";
    import IoMdMusicalNote from "svelte-icons/io/IoMdMusicalNote.svelte";
    import Button from "./Button.svelte";

    const socials = [
        {
            href: "https://www.instagram.com/gboys_5h/?utm_medium=copy_link",
            img: FaInstagram
        },
        {
            href: "https://www.facebook.com/profile.php?id=100074978323661",
            img: FaFacebookF
        },
        {
            href: "https://www.tiktok.com/@banda_extra_larga?_d=secCgwIARCbDRjEFSACKAESPgo82VgEzqJXVqqjmawbCm4QsG3um4nRmGVxd6MA2EBW4fqGP7x0ZarpPAlkQ2Ea4u1SOU%2FbQS6fpaRDAVAaGgA%3D&language=it&sec_uid=MS4wLjABAAAATryU-WWDWJHQUEoRrI8ZeCKGqhbFNGiHP26Pso3GAvxc6lJ4-__MJPP0tq9W_fOj&sec_user_id=MS4wLjABAAAATryU-WWDWJHQUEoRrI8ZeCKGqhbFNGiHP26Pso3GAvxc6lJ4-__MJPP0tq9W_fOj&share_app_id=1233&share_author_id=7028865402872824838&share_link_id=2672a4f9-30e3-4510-8c40-91f57c6208a9&timestamp=1637742091&u_code=dlgmg5a83d0157&user_id=7028865402872824838&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp&source=h5_m&_r=1",
            img: IoMdMusicalNote
        },
        {
            href: "https://twitter.com/Gboys_5h?t=uBJPxWJ3o0bgp5P2GqGtog&s=09",
            img: FaTwitter
        },
    ]
</script>

<footer class="flex flex-col bg-gray-300 dark:bg-navbar-background-dark pt-8 pb-10 dark:text-white">
  <div class="m-auto text-2xl mb-4">Seguiteci sui nostri social!</div>
  <div class="m-auto flex gap-4">
    {#each socials as { img, href }}
      <Button class="block h-10 w-14" useLink {href}>
        <svelte:component this={img}/>
      </Button>
    {/each}
  </div>
</footer>