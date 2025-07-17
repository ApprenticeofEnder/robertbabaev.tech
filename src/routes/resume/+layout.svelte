<script lang="ts">
	import Download from '@lucide/svelte/icons/download';

	import { PUBLIC_DEV_RESUME } from '$env/static/public';
	import AppLayout from '$lib/components/app-layout.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();

	let downloaded = $state<boolean>(false);

	function download() {
		downloaded = true;
		window.open(PUBLIC_DEV_RESUME, '_blank');
	}

	// TODO: Migrate the resume downloader into its own component, maybe?
</script>

{#snippet resumeDownloader()}
	{#if !downloaded}
		<span class="relative flex h-3 w-3">
			<Badge
				class="absolute inline-flex h-full w-full animate-ping rounded-full px-1 opacity-75"
				variant="destructive"
			/>
			<Badge class="relative inline-flex h-3 w-3 rounded-full px-1" variant="destructive" />
		</span>
	{/if}
	<Button class="h-fit text-xs" onclick={download}><Download />Download PDF</Button>
{/snippet}

<AppLayout extra={resumeDownloader}>{@render children?.()}</AppLayout>
