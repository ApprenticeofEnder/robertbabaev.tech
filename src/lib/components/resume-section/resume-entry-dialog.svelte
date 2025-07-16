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
				<h2 class="drop-shadow-glow-sm">{title}</h2>
				<h3>{subtitle}</h3>
				<h4 class="text-sm">
					{location} | {start}
					{#if end}
						- {end}
					{/if}
				</h4>
			</AlertDialog.Title>
			<AlertDialog.Description>
				{#if bulletPoints}
					<ul class="list-inside list-disc">
						{#each bulletPoints as bulletPoint}
							<li class="text-justify">{@html bulletPoint}</li>
						{/each}
					</ul>
				{/if}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Go Back</AlertDialog.Cancel>
			{#if link}
				<Button
					variant="outline"
					href={link}
					class="text-foreground"
					target="_blank"
					rel="noopener noreferrer"
				>
					See Project
				</Button>
			{/if}
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
