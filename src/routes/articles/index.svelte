<script lang="ts">
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

    import type { Article } from '$lib/types';

	export let articles: Article[];
</script>

<svelte:head>
	<title>Articles</title>
	<meta name="description" content="Robert's Articles" />
</svelte:head>

<div class="articles translucent-black">
	<h1>Articles</h1>

	{#each articles as article}
        <h2><a href="{article.link}">{article.title}</a></h2>
    {/each}
</div>

<style>
    h2{
        width: 100%;
        padding: 0.25rem;
    }

	.articles {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
        padding: 1rem;
	}
</style>