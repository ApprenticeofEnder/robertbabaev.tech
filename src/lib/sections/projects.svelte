<script lang="ts">
    import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<div>
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
</style>