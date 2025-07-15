<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import LinkedIn from '@lucide/svelte/icons/linkedin';
	import Mail from '@lucide/svelte/icons/mail';

	import * as Card from '$lib/components/ui/card';
	import type { Link } from '$lib/types';

	interface ContactCardProps {
		cardType: 'linkedin' | 'github' | 'email';
		link: Link;
	}

	let { cardType, link }: ContactCardProps = $props();
</script>

<Card.Root
	class="flex aspect-video cursor-pointer flex-col justify-center transition-all hover:bg-primary/25 hover:drop-shadow-glow-sm"
	onclick={() => {}}
>
	<Card.Header>
		<div class="flex justify-center">
			{#if cardType === 'linkedin'}
				<LinkedIn class="contact-icon drop-shadow-glow"></LinkedIn>
			{:else if cardType === 'github'}
				<Github class="contact-icon drop-shadow-glow"></Github>
			{:else if cardType === 'email'}
				<Mail class="contact-icon drop-shadow-glow"></Mail>
			{/if}
		</div>
	</Card.Header>
	<Card.Footer class="justify-center">
		<div>{link.text}</div>
	</Card.Footer>
</Card.Root>
