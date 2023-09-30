<script lang="ts">
	import type { Contact } from '$lib/types';
	import Link from '$lib/components/Link.svelte';

	export let contacts: Contact[];
</script>

<div>
	<h1>// CONTACT //</h1>
	<div class="grid grid-cols-3 gap-4">
		{#each contacts as contact}
			<div class="text-center"><Link href={contact.link}><i class={contact.icon} /></Link></div>
			<div class="col-span-2"><Link href={contact.link}>{contact.data}</Link></div>
		{/each}
	</div>
	<!-- <ul>
		{#each contacts as contact}
			<li><a href={contact.link}><i class={contact.icon} />{contact.data}</a></li>
		{/each}
	</ul> -->
</div>
