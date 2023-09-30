<script lang="ts">
    import type { Article } from '$lib/types';
	import Link from '$lib/components/Link.svelte';

	export let articles: Article[];
</script>

<div>
	<h1>// ARTICLES //</h1>

	{#each articles as article}
        <h2><Link href="{article.link}">{article.title}</Link></h2>
    {/each}
</div>