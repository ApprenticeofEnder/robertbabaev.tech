<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { AngleRightSolid, GithubBrand, LinkedinBrand, EnvelopeSolid } from 'svelte-awesome-icons';
	import { Heading, Button, Alert, Img, Li, List } from 'flowbite-svelte';

	import { fade } from 'svelte/transition';

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
		<div class="flex justify-center animate-fade">
			<div class="grid lg:w-3/4">
				<div class="flex justify-center">
					<p class="text-text">Want to get in touch?</p>
				</div>
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
	</div>
</main>
