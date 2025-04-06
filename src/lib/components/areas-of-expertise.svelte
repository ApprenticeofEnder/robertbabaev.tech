<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';

	let areasOfExpertise = [
		{
			title: 'Development',
			value: 'development',
			content: 'Blah blah blah'
		},
		{
			title: 'Security',
			value: 'security',
			content: 'Blah blah blah'
		},
		{
			title: 'Automation',
			value: 'automation',
			content: 'Blah blah blah'
		},
		{
			title: 'Infrastructure',
			value: 'infrastructure',
			content: 'Blah blah blah'
		}
	];
</script>

<Tabs.Root orientation="vertical" value={areasOfExpertise[0].value} class="flex w-full gap-2">
	<Tabs.List class="flex min-h-fit flex-col border">
		{#each areasOfExpertise as area}
			<Tabs.Trigger
				value={area.value}
				class={cn(buttonVariants({ variant: 'ghost' }), 'w-full text-left')}
			>
				{area.title}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each areasOfExpertise as area}
		<Tabs.Content value={area.value} class="h-full w-full">
			<Card.Root class="h-full w-full">
				<Card.Header>
					<Card.Title>{area.title}</Card.Title>
				</Card.Header>
				<Card.Content class="space-t-2">
					<p>{area.content}</p>
				</Card.Content>
			</Card.Root>
		</Tabs.Content>
	{/each}
</Tabs.Root>
