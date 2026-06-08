<script lang="ts">
	import AppLayout from '$lib/components/app-layout.svelte';
	import ResumeDownloader from '$lib/components/resume-downloader.svelte';

	let { children } = $props();
</script>

<AppLayout extra={resumeDownloader}>{@render children?.()}</AppLayout>

{#snippet resumeDownloader()}
	<ResumeDownloader />
{/snippet}
