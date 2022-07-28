<script lang="ts">
    import type { Contact } from '$lib/types';

	export let contacts: Contact[];
</script>

<div>
    <h1>Contact</h1>
	<ul>
		{#each contacts as contact}
			<li><a href={contact.link}><i class={contact.icon}></i>{contact.data}</a></li>
    	{/each}
	</ul>
</div>