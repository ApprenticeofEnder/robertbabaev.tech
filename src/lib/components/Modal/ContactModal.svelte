<script lang="ts">
	import { Button, Alert, Img, Li, List } from 'flowbite-svelte';
	import { AngleRightSolid, GithubBrand, LinkedinBrand, EnvelopeSolid } from 'svelte-awesome-icons';
	import Modal from '$lib/components/Modal/Modal.svelte';

	import { fade } from 'svelte/transition';

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

<Modal bind:open animate="animate-fade-fast" autoclose={false}>
	<svelte:fragment slot="header">
		<h3 class="text-text hover:text-text">Let's get in touch!</h3>
	</svelte:fragment>
	<div class="grid md:grid-cols-[1fr_3fr]">
		<Img
			src="/images/enderlogo_v2.png"
			size="max-w-40"
			class="my-auto mx-auto md:mx-0"
			alt="sample 1"
		/>
		<div class="px-4">
			<p class="text-base leading-relaxed text-text">
				Awesome! Glad my experience and achievements stood out to you. If you'd like, we can talk
				about how I can make things like those happen for you!
			</p>

			<List tag="ul" list="none" class="flex flex-wrap justify-center items-center gap-4 mb-6">
				<Li>
					<Button
						class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white focus:ring-0 transition ms-2 md:ms-3 me-2 md:me-3"
						outline
						href="https://github.com/ApprenticeofEnder"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubBrand size="16" class="md:me-2" />
						<div class="w-0 invisible md:w-fit md:visible">Github</div>
					</Button>
				</Li>
				<Li>
					<Button
						class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white focus:ring-0 transition ms-2 md:ms-3 me-2 md:me-3"
						outline
						href="https://www.linkedin.com/in/robertbabaev2001/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinBrand size="16" class="md:me-2" />
						<div class="w-0 invisible md:w-fit md:visible">LinkedIn</div>
					</Button>
				</Li>
				<Li>
					<Button
						class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white focus:ring-0 transition ms-2 md:ms-3 me-2 md:me-3"
						outline
						on:click={copyEmail}
					>
						<EnvelopeSolid size="16" class="md:me-2" />
						<div class="w-0 invisible md:w-fit md:visible">Email</div>
					</Button>
				</Li>
			</List>
			{#if emailCopied}
				<div transition:fade>
					<Alert
						dismissable
						color="none"
						class="bg-background text-primary-500 border-2 border-primary-500 mx-4 md:mx-6 transition"
						on:click={() => {
							emailCopied = false;
						}}
					>
						Email copied!
					</Alert>
				</div>
			{/if}
		</div>
	</div>

	<svelte:fragment slot="footer">
		<Button
			color="alternative"
			class="text-white border-white hover:bg-white focus:bg-transparent hover:text-black focus:text-primary-500 transition focus:ring-0"
			outline
			on:click={hide}
			transition={fade}
		>
			Close
		</Button>
	</svelte:fragment>
</Modal>
