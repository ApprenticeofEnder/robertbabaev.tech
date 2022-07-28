<script lang="ts">
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

    import type { Experience } from '$lib/types';

	export let experience: Experience[];
</script>

<section class="content translucent-black">
    <h1>Resume</h1>

	{#each experience as exp}
        <h2 class="w-full border-b border-white p-1">{exp.title} - {exp.company}</h2>
        <h6 class="my-3 text-white text-xs">{exp.start_date} - {exp.end_date}</h6>
        <ul>
            {#each exp.experience_sars as sar}
                <li class="my-2 text-s text-justify leading-relaxed">{sar.statement}</li>
            {/each}
        </ul>   
    {/each}
</section>

<style>
    .content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 1rem;
	}
</style>