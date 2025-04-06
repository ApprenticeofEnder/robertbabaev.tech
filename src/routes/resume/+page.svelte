<script lang="ts">
	import { scrollRef, scrollTo, scrollTop } from 'svelte-scrolling';

	import { page } from '$app/state';
	import { ResumeSection } from '$lib/components/resume-section';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const {
		resumeData: { experience, education, projects }
	} = data;
</script>

<div class="flex flex-col gap-4">
	<ResumeSection title="Experience" entries={experience} scrollTarget="experience" />
	<ResumeSection title="Projects" entries={projects} scrollTarget="projects" />
</div>
