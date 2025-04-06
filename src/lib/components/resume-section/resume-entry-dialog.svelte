<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { type ResumeEntry } from '$lib/types';

	const { title, subtitle, location, start, end, link, tech, bulletPoints }: ResumeEntry = $props();
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger class={buttonVariants({ variant: 'secondary' })}>
		More Details
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>
				<div class="drop-shadow-glow-sm">{title}</div>
				<div>{subtitle}</div>
				<h4 class="text-sm">
					{location} | {start}
					{#if end}
						- {end}
					{/if}
				</h4>
			</AlertDialog.Title>
			<AlertDialog.Description></AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Go Back</AlertDialog.Cancel>
			{#if link}
				<Button
					onclick={() => {
						if (!link) {
							return;
						}
						window.open(link, '_blank', 'noopener noreferrer');
					}}
					variant="outline"
				>
					See Project
				</Button>
			{/if}
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
