<script lang="ts">
	import Download from '@lucide/svelte/icons/download';

	import {
		PUBLIC_DEVOPS_RESUME,
		PUBLIC_DEV_RESUME,
		PUBLIC_SECURITY_RESUME
	} from '$env/static/public';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	const variants = [
		{ label: 'Developer', url: PUBLIC_DEV_RESUME },
		{ label: 'DevOps', url: PUBLIC_DEVOPS_RESUME },
		{ label: 'Security', url: PUBLIC_SECURITY_RESUME }
	];

	let selectedUrl = $state(variants[0].url);
	let downloaded = $state(false);

	function download() {
		downloaded = true;
		window.open(selectedUrl, '_blank');
	}
</script>

{#if !downloaded}
	<span class="relative flex h-3 w-3">
		<Badge
			class="absolute inline-flex h-full w-full animate-ping rounded-full px-1 opacity-75"
			variant="destructive"
		/>
		<Badge class="relative inline-flex h-3 w-3 rounded-full px-1" variant="destructive" />
	</span>
{/if}
<label class="sr-only" for="resume-variant">Resume variant</label>
<select
	id="resume-variant"
	class="h-fit rounded-md border border-input bg-background px-2 py-1 text-xs"
	bind:value={selectedUrl}
>
	{#each variants as variant}
		<option value={variant.url}>{variant.label}</option>
	{/each}
</select>
<Button class="h-fit min-w-fit text-xs" onclick={download}>
	<Download /><span class="hidden md:block">Download PDF</span>
</Button>
