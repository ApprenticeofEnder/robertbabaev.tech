<script lang="ts">
	import type { FeaturedProject } from '$lib/types';

	import Project from './featured-project.svelte';

	let { projects = [] }: { projects: FeaturedProject[] } = $props();
</script>

<div class="flex gap-4">
	{#each projects as project}
		<Project {...project}></Project>
	{/each}
</div>
