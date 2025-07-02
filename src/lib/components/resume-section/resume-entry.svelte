<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { type ResumeEntry } from '$lib/types';
	import { cn } from '$lib/utils';

	import ResumeEntryDialog from './resume-entry-dialog.svelte';

	const { title, subtitle, location, start, end, link, tech, bulletPoints }: ResumeEntry = $props();

	let showMore = $state(false);
</script>

<Card.Root class="">
	<Card.Header class="mb-4">
		<Card.Title class="flex flex-col gap-1 sm:flex-row sm:gap-2 sm:divide-x">
			<h2 class="drop-shadow-glow-sm">{@html title}</h2>
			<h2 class="sm:ps-2">{@html subtitle}</h2>
		</Card.Title>
		<Card.Description class="flex flex-col justify-between gap-1">
			<span>{@html location}</span>
			{#if start && end}
				<span>{start} - {end}</span>
			{:else if start}
				<span>{start}</span>
			{/if}
		</Card.Description>
	</Card.Header>
	<Card.Footer class="justify-between gap-4">
		{#if tech}
			<div class="text-sm">
				<p>Tech:</p>
				<ul class="flex flex-wrap justify-start gap-x-4 text-xs">
					{#each tech as techItem}
						<li class="font-bold text-primary">{techItem}</li>
					{/each}
				</ul>
			</div>
		{/if}
		<ResumeEntryDialog {title} {subtitle} {location} {start} {end} {link} {tech} {bulletPoints} />
	</Card.Footer>
</Card.Root>
