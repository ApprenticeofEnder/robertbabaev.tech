<script lang="ts">
	import type { RssFeedItem } from '$lib/types';

	import Post from './blog-post.svelte';

	let { posts = [] }: { posts: RssFeedItem[] } = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each posts as post}
		<Post {...post}></Post>
	{/each}
</div>
