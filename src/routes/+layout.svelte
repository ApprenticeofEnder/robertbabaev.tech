<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_URL_ORIGIN } from '$env/static/public';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title} - Robert Babaev</title>
	<meta name="description" content={page.data.description ?? "Robert Babaev's personal website."} />
	<link rel="canonical" href={`${PUBLIC_URL_ORIGIN}${page.url.pathname}`} />
</svelte:head>

{@render children?.()}
