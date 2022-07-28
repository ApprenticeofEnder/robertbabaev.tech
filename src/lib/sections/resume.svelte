<script lang="ts">
    import type { Experience } from '$lib/types';

	export let experience: Experience[];
</script>

<div>
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
</div>