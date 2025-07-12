<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import type { FeaturedProject } from '$lib/types';

	let { name, description, link }: FeaturedProject = $props();
</script>

<Card.Root class="flex w-full flex-col justify-between gap-4 md:basis-1/2 lg:basis-1/3">
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Footer>
		<Button href={link} target="_blank" rel="noopener noreferrer">Project Home</Button>
	</Card.Footer>
</Card.Root>
