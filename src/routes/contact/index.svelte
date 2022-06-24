<script lang="ts">
	// import { enhance } from '$lib/form';
	// import { scale } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

    import type { Contact } from '$lib/types';

	export let contacts: Contact[];
</script>

<svelte:head>
	<title>Contacts</title>
	<meta name="description" content="Robert's Contacts" />
</svelte:head>

<div class="contacts translucent-black">
	<h1>Contacts</h1>
	<ul>
		{#each contacts as contact}
			<li><a href={contact.link}><i class={contact.icon}></i>{contact.data}</a></li>
    	{/each}
	</ul>
	
</div>

<style>
	i{
		padding-right: 0.5rem;
	}

	li{
		font-size: 1.5rem;
	}

	.contacts {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
        padding: 1rem;
	}
</style>