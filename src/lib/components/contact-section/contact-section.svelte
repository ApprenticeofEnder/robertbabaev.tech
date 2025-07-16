<script lang="ts">
	import type { ContactLinks } from '$lib/types';

	import ContactCard from './contact-card.svelte';

	const { links }: { links: ContactLinks } = $props();
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	<ContactCard cardType="github" link={links.github}></ContactCard>
	<ContactCard cardType="linkedin" link={links.linkedin}></ContactCard>
	<ContactCard cardType="email" link={links.email}></ContactCard>
</div>
