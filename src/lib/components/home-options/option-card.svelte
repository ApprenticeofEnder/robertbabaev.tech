<script lang="ts">
	import type { Snippet } from 'svelte';

	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';
	import type { Link } from '$lib/types';

	interface OptionCardProps {
		link: Link;
		icon: Snippet;
	}

	const { link, icon }: OptionCardProps = $props();

	function open() {
		goto(link.href);
	}
</script>

<Card.Root
	class="flex aspect-video cursor-pointer flex-col justify-center hover:bg-primary/25"
	onclick={open}
>
	<Card.Header>
		<div class="flex justify-center">
			{@render icon()}
		</div>
	</Card.Header>
	<Card.Footer class="justify-center">
		<div>{link.text}</div>
	</Card.Footer>
</Card.Root>
