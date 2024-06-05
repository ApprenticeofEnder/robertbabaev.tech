<script lang="ts">
import Typewriter from 'svelte-typewriter';
import { AngleRightSolid, GithubBrand, LinkedinBrand, EnvelopeSolid } from 'svelte-awesome-icons';
import { Heading, Button, Alert, Img, Li, List } from 'flowbite-svelte';

import { fade } from 'svelte/transition';
import ContactButtons from '$lib/components/ContactButtons.svelte';

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
</script>

<main class="flex flex-initial justify-center">
	<div class="lg:w-3/4">
		<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4"
			>Contact</Heading
		>
		<div class="flex animate-fade justify-center">
			<div class="grid lg:w-3/4">
				<div class="flex justify-center">
					<p class="text-text">Want to get in touch?</p>
				</div>
				<ContactButtons />
			</div>
		</div>
	</div>
</main>
