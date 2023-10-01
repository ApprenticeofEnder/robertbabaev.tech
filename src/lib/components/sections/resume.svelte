<script lang="ts">
    import type { Experience } from '$lib/types';
    import Typewriter from 'svelte-typewriter'

	export let experience: Experience[];
</script>

<div>
    <h1>// RESUME //</h1>

	{#each experience as exp}
    <h2 class="w-full mt-6 p-1 text-xl"><Typewriter mode="scramble" scrambleDuration={2000}><span>{exp.title}</span></Typewriter></h2>
    <h2 class="w-full border-b border-white/25 -mt-4 p-1 text-l"><Typewriter mode="scramble" scrambleDuration={2000}><span>{exp.company}</span></Typewriter></h2>
        <h6 class="my-3 text-white text-xs font-body">{exp.start_date} - {exp.end_date}</h6>
        <ul>
            {#each exp.experience_sars as sar}
            <p><li class="my-2 text-s text-justify leading-relaxed">{sar.statement}</li></p>
            {/each}
        </ul>   
    {/each}
</div>

<style>
    li::before {
        content: '> ';
    }
</style>