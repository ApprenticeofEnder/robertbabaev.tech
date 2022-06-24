<script lang="ts">
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

    import type { Experience } from '$lib/types';

	export let experience: Experience[];
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Robert's Resume" />
</svelte:head>

<div class="resume translucent-black">
	<h1>Resume</h1>

	{#each experience as exp}
        <h2>{exp.title} - {exp.company}</h2>
        <h6>{exp.start_date} - {exp.end_date}</h6>
        <ul>
            {#each exp.experience_sars as sar}
                <li>{sar.statement}</li>
            {/each}
        </ul>   
    {/each}
</div>

<style>
    h6{
        font-size: 0.75rem;
        color: white;
    }

	.resume {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>