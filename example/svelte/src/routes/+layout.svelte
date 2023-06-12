<script>
  import { onMount } from "svelte";
  import "./index.css";
  import Nav from "src/components/Nav.svelte";
  import { tracker } from "userevent-tracker";

  onMount(() => {
    tracker({ showConsole: true });
  });
</script>

<main class="main_app">
  <Nav />
  <slot />
</main>
