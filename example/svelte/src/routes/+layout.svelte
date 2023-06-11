<script>
  import { onMount } from "svelte";
  import { tracker } from "userevent_tracker";
  import "./index.css";
  import Nav from "src/components/Nav.svelte";

  onMount(() => {
    tracker({ showConsole: true });
  });
</script>

<main class="main_app">
  <Nav />
  <slot />
</main>
