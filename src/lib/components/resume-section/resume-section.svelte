<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';

	import Entry from '$lib/components/resume-section/resume-entry.svelte';
	import type { ResumeEntry } from '$lib/types';

	const {
		entries,
		title,
		scrollTarget
	}: { entries: ResumeEntry[]; title: string; scrollTarget: string } = $props();
</script>

<section use:scrollRef={scrollTarget} class="w-full">
	<h2 class="sticky top-0 z-10 bg-background py-2 text-left">{title}</h2>
	<div class="mt-4 flex flex-col gap-4">
		{#each entries as entry}
			<Entry {...entry} />
		{/each}
	</div>
</section>
