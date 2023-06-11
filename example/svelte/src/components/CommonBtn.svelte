<script>
  export let width = "120px";
  export let height = "40px";
  export let margin = "0";
  export let backgroundColor = "#64b5f6";
  export let color = "white";
  export let disabled = false;
  export let fontSize = "1em";
  export let fontWeight = "normal";
  export let type = "button";
  export let border = "unset";
  export let display = "flex";
  /**
   * @type {() => void}
   */
  export let onClick;
</script>

{#if type === "button"}
  <button
    class="btn_custom"
    type="button"
    style="--width: {width}; --height: {height}; --margin: {margin}; --background-color: {backgroundColor}; --color: {color}; --font-size: {fontSize}; --font-weight: {fontWeight}; --display: {display}; --border: {border};"
    {disabled}
    on:click|preventDefault={onClick}
  >
    <slot />
  </button>
{:else}
  <button
    class="btn_custom"
    type="submit"
    style="--width: {width}; --height: {height}; --margin: {margin}; --background-color: {backgroundColor}; --color: {color}; --font-size: {fontSize}; --font-weight: {fontWeight}; --display: {display}; --border: {border};"
    {disabled}
  >
    <slot />
  </button>
{/if}

<style>
  .btn_custom {
    display: var(--display);
    margin: var(--margin);
    width: var(--width);
    height: var(--height);
    background-color: var(--background-color);
    color: var(--color);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    transition: 1s;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: var(--border);
  }

  .btn_custom:disabled {
    background-color: grey;
    pointer-events: none;
    cursor: unset;
  }

  .btn_custom:hover {
    animation: outline 1s ease forwards;
  }

  @keyframes outline {
    from {
      outline: var(--shadow-color) solid;
      outline-offset: 10px;
      transform: scale(1);
    }

    to {
      outline: transparent solid;
      outline-offset: 0px;
      transform: scale(1.05);
      box-shadow: 0 2px 10px var(--shadow-color);
    }
  }

  @media screen and (max-width: 650px) {
    .btn_custom {
      height: calc(var(--height) * 0.8);
      width: calc(var(--width) * 0.8);
      font-size: 0.8em;
    }
  }
</style>
