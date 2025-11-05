<script lang="ts">
  export let siteTitle = 'The Method';
</script>

<header class="site-header">
  <a class="logo" href="/">{siteTitle}</a>
  <nav>
    <a href="/what-is-the-method">What is The Method</a>
    <a href="/shows">Shows</a>
    <a href="/classes">Classes</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<style>
  .site-header { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 0; }
  .logo { font-weight:700; text-decoration:none; font-size:1.25rem; }
  nav { display:flex; gap:1rem; flex-wrap:wrap; }
  nav a { text-decoration:none; }
</style>
