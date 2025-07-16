<script lang="ts">
	import type { RssFeedItem } from '$lib/types';

	import Post from './blog-post.svelte';

	let { posts = [] }: { posts: RssFeedItem[] } = $props();
</script>

<div class="flex flex-col gap-4">
	{#each posts as post}
		<Post {...post}></Post>
	{/each}
</div>
