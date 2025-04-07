<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollElement, scrollTop } from 'svelte-scrolling';

	import { page } from '$app/state';
	import { ResumeSection } from '$lib/components/resume-section';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const {
		resumeData: { experience, education, projects, hackathons, volunteering }
	} = data;

	let readyToScroll = $state(false);

	onMount(() => {
		readyToScroll = true;
	});

	$effect(() => {
		if (!readyToScroll) {
			return;
		}
		console.log('Hash changed.');
		if (!page.url.hash) {
			scrollTop();
			return;
		}
		scrollElement(page.url.hash);
	});
</script>

<div class="flex flex-col gap-4">
	<ResumeSection title="Experience" entries={experience} scrollTarget="#experience" />
	<ResumeSection title="Projects" entries={projects} scrollTarget="#projects" />
	<ResumeSection title="Hackathons" entries={hackathons} scrollTarget="#hackathons" />
	<ResumeSection title="Volunteering" entries={volunteering} scrollTarget="#volunteering" />
</div>
