<script lang="ts">
import { Button, Alert, Img, Li, List } from 'flowbite-svelte';
import Modal from '$lib/components/Modal/Modal.svelte';

import { fade } from 'svelte/transition';
import ContactButtons from '$lib/components/ContactButtons.svelte';

export let open = false;
export let emailCopied = false;

const copyEmail = () => {
	if (emailCopied) {
		return;
	}
	console.log('Initialized Copy');
	navigator.clipboard
		.writeText('robert@robertbabaev.tech')
		.then(() => {
			emailCopied = true;
			setTimeout(() => {
				emailCopied = false;
			}, 3000);
		})
		.catch((err) => {
			alert(err.message);
		});
};

const hide = (e: Event) => {
	e.preventDefault();
	open = false;
};
</script>

<Modal bind:open={open} animate="animate-fade-fast" autoclose={false}>
	<svelte:fragment slot="header">
		<h3 class="text-text hover:text-text">Let's get in touch!</h3>
	</svelte:fragment>
	<div class="grid md:grid-cols-[1fr_3fr]">
		<Img
			src="/images/enderlogo_v2.png"
			size="max-w-40"
			class="mx-auto my-auto md:mx-0"
			alt="sample 1"
		/>
		<div class="px-4">
			<p class="text-base leading-relaxed text-text">
				Awesome! Glad my experience and achievements stood out to you. If you'd like, we can talk
				about how I can make things like those happen for you!
			</p>

			<ContactButtons />
		</div>
	</div>

	<svelte:fragment slot="footer">
		<Button
			color="alternative"
			class="border-white text-white transition hover:bg-white hover:text-black focus:bg-transparent focus:text-primary-500 focus:ring-0"
			outline
			on:click={hide}
			transition={fade}
		>
			Close
		</Button>
	</svelte:fragment>
</Modal>
