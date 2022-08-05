<script lang="ts">
    import type { Article } from '$lib/types';

	export let articles: Article[];
</script>

<div>
	<h1>Articles</h1>

	{#each articles as article}
        <h2><a href="{article.link}">{article.title}</a></h2>
    {/each}
</div>