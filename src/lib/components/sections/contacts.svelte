<script lang="ts">
	import type { Href } from '$lib/types';
	import Link from '$lib/components/Link.svelte';

	// export let contacts: Contact[];
	export let email: Href;
	export let github: Href;
	export let linkedin: Href;

	let contacts: Href[] = [email, github, linkedin];
</script>

<div class="max-w-full">
	<h1>// CONTACT //</h1>
	<div class="grid grid-cols-3 gap-4">
		{#each contacts as contact}
			<div class="text-3xl text-center">
				<Link href={contact.link}><i class={contact.icon} /></Link>
			</div>
		{/each}
	</div>
	<!-- <ul>
		{#each contacts as contact}
			<li class="text-center"><a href={contact.link} class="w-full inline-block"><i class={contact.icon} /> <span class="w-10/12 inline-block">{contact.data}</span></a></li>
		{/each}
	</ul> -->
</div>
