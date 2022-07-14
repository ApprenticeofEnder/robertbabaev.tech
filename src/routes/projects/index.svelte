<script lang="ts">
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

    import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Robert's Projects" />
</svelte:head>

<div class="projects translucent-black">
	<h1>Projects</h1>

	{#each projects as project}
        <h2 class="w-full my-3"><a href={project.link}>{project.title}</a></h2>
		<p>{project.description}</p>
    {/each}
</div>

<style>
    h2{
        width: 100%;
    }

	.projects {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
        padding: 1rem;
	}
</style>