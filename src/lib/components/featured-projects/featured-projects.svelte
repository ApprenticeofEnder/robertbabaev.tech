<script lang="ts">
	import type { FeaturedProject } from '$lib/types';

	import Project from './featured-project.svelte';

	let { projects = [] }: { projects: FeaturedProject[] } = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as project}
		<Project {...project}></Project>
	{/each}
</div>
