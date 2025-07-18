<script lang="ts">
	import type { Snippet } from 'svelte';

	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';
	import type { Link } from '$lib/types';

	interface OptionCardProps {
		link: Link;
		icon: Snippet;
		testId?: string;
	}

	const { link, icon, testId }: OptionCardProps = $props();

	function open() {
		goto(link.href);
	}
</script>

<Card.Root class="flex cursor-pointer flex-col justify-center hover:bg-primary/25 lg:aspect-video">
	<button data-testid={testId} onclick={open}>
		<Card.Header>
			<div class="flex justify-center">
				{@render icon()}
			</div>
		</Card.Header>
		<Card.Footer class="justify-center">
			<div>{link.text}</div>
		</Card.Footer>
	</button>
</Card.Root>
