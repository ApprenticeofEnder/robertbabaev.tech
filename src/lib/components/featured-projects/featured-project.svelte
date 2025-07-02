<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import type { FeaturedProject } from '$lib/types';

	let { name, description, link }: FeaturedProject = $props();
</script>

<Card.Root class="flex basis-1/3 flex-col gap-4">
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Footer>
		<Button href={link} target="_blank" rel="noopener noreferrer">Project Home</Button>
	</Card.Footer>
</Card.Root>
