<script lang="ts">
    import type { Project } from '$lib/types';
    import Link from '$lib/components/Link.svelte';

	export let projects: Project[];
</script>

<div>
    <h1>// PROJECTS //</h1>

	{#each projects as project}
        <h2 class="w-full my-3"><Link href={project.link}>{project.title}</Link></h2>
		<p class="text-justify">{project.description}</p>
    {/each}
</div>

<style>
    h2{
        width: 100%;
    }
</style>