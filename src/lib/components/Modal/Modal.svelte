<script lang="ts">
	import { Button, Gallery, Img, Modal } from 'flowbite-svelte';
	export let open = false;
	export let autoclose = true;
	export let animate = 'animate-none';
</script>

<Modal
	bind:open
	bind:autoclose
	outsideclose
	class={'bg-background divide-text/15 ' + animate}
	classHeader="bg-background text-text"
	classFooter="bg-background"
	classBody="border-black"
>
	<svelte:fragment slot="header">
		<slot name="header" />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<slot name="footer" />
	</svelte:fragment>
</Modal>
