<script lang="ts">
	import { Button } from 'flowbite-svelte';

	export let href: string;
</script>

<Button
	class="border-primary-500 text-primary-500 transition hover:bg-primary-500 hover:text-black focus:bg-transparent, focus:text-white focus:ring-0"
	outline
	{href}
>
	<slot></slot>
</Button>
