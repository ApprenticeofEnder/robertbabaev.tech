<script lang="ts">
import { Alert, Button, Li, List } from 'flowbite-svelte';

import { fade } from 'svelte/transition';

let emailCopied = false;

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

interface ContactLink extends App.Link {
	icon: string;
	isEmail?: boolean;
}

const contactLinks: ContactLink[] = [
	{
		href: 'https://github.com/ApprenticeofEnder',
		text: 'Github',
		icon: 'fa-brands fa-github'
	},
	{
		href: 'https://www.linkedin.com/in/robertbabaev2001/',
		text: 'LinkedIn',
		icon: 'fa-brands fa-linkedin'
	},
	{
		href: '#',
		text: 'Email',
		icon: 'fa-solid fa-envelope',
		isEmail: true
	}
];
</script>

<List tag="ul" list="none" class="mb-6 flex flex-wrap items-center justify-center gap-4">
	{#each contactLinks as contactLink}
		<Li>
			{#if contactLink.isEmail}
				<Button
					class="me-2 ms-2 border-primary-500 text-base text-primary-500 transition hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0 md:me-3 md:ms-3"
					outline
					on:click={copyEmail}
				>
					<i class={`${contactLink.icon} h-1/2 w-4 md:me-2`} />
					<div class="invisible w-0 md:visible md:w-fit">{contactLink.text}</div>
				</Button>
			{:else}
				<Button
					class="me-2 ms-2 border-primary-500 text-base text-primary-500 transition hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0 md:me-3 md:ms-3"
					outline
					href={contactLink.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class={`${contactLink.icon} h-1/2 w-4 md:me-2`} />
					<div class="invisible w-0 md:visible md:w-fit">{contactLink.text}</div>
				</Button>
			{/if}
		</Li>
	{/each}
</List>
{#if emailCopied}
	<div transition:fade>
		<Alert
			dismissable
			color="none"
			class="mx-4 border-2 border-primary-500 bg-background text-primary-500 transition md:mx-6"
			on:click={() => {
                emailCopied = false;
            }}
		>
			Email copied!
		</Alert>
	</div>
{/if}