<script lang="ts">
	import Entry from '$lib/components/resume-section/resume-entry.svelte';
	import type { ResumeEntry } from '$lib/types';

	const {
		entries,
		title,
		scrollTarget
	}: { entries: ResumeEntry[]; title: string; scrollTarget: string } = $props();
</script>

<section id={scrollTarget} class="w-full">
	<h2 class="mb-4 text-left">{title}</h2>
	<div class="flex flex-col gap-4">
		{#each entries as entry}
			<Entry {...entry} />
		{/each}
	</div>
</section>
