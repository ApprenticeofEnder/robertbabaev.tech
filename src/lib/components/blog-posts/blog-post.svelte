<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import type { RssFeedItem } from '$lib/types';

	let { title, description, link, pubDate: pubDateRaw }: RssFeedItem = $props();
	const pubDate = new Date(pubDateRaw).toDateString();
</script>

<Card.Root class="flex w-full flex-col justify-between gap-4 md:basis-1/2 lg:basis-1/3">
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Footer class="justify-between">
		<div>{pubDate}</div>
		<Button href={link} target="_blank" rel="noopener noreferrer">View Post</Button>
	</Card.Footer>
</Card.Root>
