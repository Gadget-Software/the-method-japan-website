<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>The Method</title>
  <meta name="description" content="Acting, performance, and classes with Jim at The Method School." />
  <meta property="og:title" content="The Method" />
  <meta property="og:image" content="/og.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container{ max-width: 960px; margin: 0 auto; padding: 0 1rem; }
  main{ min-height: 60vh; }
</style>
