<script lang="ts">
	import resumeData from '$lib/assets/resume_data.json';
	import type { ProfessionalExperience } from '$lib/types';
	import { Heading, Button, Gallery, Img, Li, List, Indicator } from 'flowbite-svelte';
	import { AngleRightSolid } from 'svelte-awesome-icons';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import ContactModal from '$lib/components/Modal/ContactModal.svelte';
	import Typewriter from 'svelte-typewriter';

	const experience: ProfessionalExperience[] = resumeData.experience;
	let currentExperience = experience[0];
	let experienceModal = false;
	let contactModal = false;
	const showExperience = (experienceItem: ProfessionalExperience) => {
		currentExperience = experienceItem;
		experienceModal = true;
	};
	const showContact = () => {
		contactModal = true;
	};
</script>

<main>
	<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4"
		>Experience</Heading
	>
	<Gallery class="gap-4 grid-cols-2 md:grid-cols-3 md:w-3/4 mx-auto animate-fade">
		{#each experience as experienceItem}
			<Button
				class="bg-white hover:bg-white animate-glow-out-lg hover:animate-glow-in-lg hover:drop-shadow-glow-lg focus:ring-0 transition duration-200"
				on:click={() => {
					showExperience(experienceItem);
				}}
			>
				<Img
					src={experienceItem.src}
					alt={experienceItem.alt}
					class="mx-auto transition-all duration-300 rounded-lg"
				/>
			</Button>{/each}
	</Gallery>
	<Modal bind:open={experienceModal} animate="animate-fade-fast">
		<svelte:fragment slot="header">
			<div class="inline-block">
				<Typewriter mode="scramble" scrambleDuration={1000}
					><h3 class="text-text hover:text-text hover:animate-pulse drop-shadow-glow">
						{currentExperience.company}
					</h3>
				</Typewriter>

				<h4 class="text-text hover:text-text hover:animate-pulse">
					{currentExperience.title} ({currentExperience.start} - {currentExperience.end})
				</h4>
				<h4 class="text-text hover:text-text hover:animate-pulse">{currentExperience.location}</h4>
			</div>
		</svelte:fragment>
		<p class="text-base leading-relaxed text-text">
			Technologies:
			{#if currentExperience.tech}
				<List
					tag="ul"
					list="none"
					class="flex flex-wrap justify-center items-center gap-4 mb-6 pt-1"
				>
					{#each currentExperience.tech as technology}
						<Li class="divide-text">
							<p
								class="text-accent-200 ms-2 md:ms-3 me-2 md:me-3 py-0 transition hover:animate-pulse"
							>
								{technology}
							</p>
						</Li>
					{/each}
				</List>
			{/if}
			Highlights:
			{#if currentExperience.sar}
				<List tag="ul" list="none">
					{#each currentExperience.sar as sar}
						<Li icon>
							<AngleRightSolid size="16" class="me-2" />
							<p>
								{sar}
							</p>
						</Li>
					{/each}
				</List>
			{/if}
		</p>
		<svelte:fragment slot="footer">
			<Button
				on:click={showContact}
				class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white focus:ring-0 transition"
				outline
			>
				I Like This!
			</Button>
			<Button
				color="alternative"
				class="text-white border-white hover:bg-white focus:bg-transparent hover:text-black focus:text-primary-500 focus:ring-0 transition"
				outline
			>
				Close
			</Button>
		</svelte:fragment>
	</Modal>
	<ContactModal bind:open={contactModal} />
</main>
