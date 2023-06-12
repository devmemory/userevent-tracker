<script>
  import { onMount } from "svelte";
  import "./index.css";
  import Nav from "src/components/Nav.svelte";

  onMount(() => {
    import("userevent-tracker").then(({ tracker }) => {
      tracker({ showConsole: true });
    });
  });
</script>

<main class="main_app">
  <Nav />
  <slot />
</main>
