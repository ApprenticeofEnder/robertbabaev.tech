<script lang="ts">
import resumeData from '$lib/assets/resume_data.json';
import ContactModal from '$lib/components/Modal/ContactModal.svelte';
import Modal from '$lib/components/Modal/Modal.svelte';
import { Button, Gallery, Heading, Img, Li, List } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

const experience: App.ProfessionalExperience[] = resumeData.experience;
let currentExperience = experience[0];
let experienceModal = false;
let contactModal = false;
const showExperience = (experienceItem: App.ProfessionalExperience) => {
	currentExperience = experienceItem;
	experienceModal = true;
};
const showContact = () => {
	contactModal = true;
};
</script>

<main>
	<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4">
		Experience
	</Heading>
	<Gallery class="mx-auto animate-fade grid-cols-2 gap-4 lg:w-3/4 lg:grid-cols-3">
		{#each experience as experienceItem}
			{#if experienceItem.src}
				<Button
					class="animate-glow-out-lg bg-white transition duration-200 hover:animate-glow-in-lg hover:bg-white hover:drop-shadow-glow-lg focus:ring-0"
					on:click={() => {
					showExperience(experienceItem);
				}}
				>
					<Img
						src={experienceItem.src}
						alt={experienceItem.alt}
						class="mx-auto rounded-lg transition-all duration-300"
					/>
				</Button>
			{:else}
				<Button
					class="relative border-primary-500 text-primary-500 transition duration-200 hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0"
					outline
					on:click={() => {
						showExperience(experienceItem);
					}}
				>
					<div class="flex h-[100px] w-[100px] flex-col justify-center lg:h-[320px] lg:w-[320px]">
						<div class="text-lg sm:text-xl md:text-2xl">{experienceItem.company}</div>
					</div>
				</Button>
			{/if}
		{/each}
	</Gallery>
	<Modal bind:open={experienceModal} animate="animate-fade-fast">
		<svelte:fragment slot="header">
			<div class="inline-block">
				<Typewriter mode="scramble" scrambleDuration={1000}>
					<h3 class="text-accent-200 drop-shadow-glow hover:animate-pulse hover:text-accent-200">
						{currentExperience.company}
					</h3>
				</Typewriter>

				<h4 class="text-text hover:animate-pulse hover:text-text">
					{currentExperience.title} ({currentExperience.start} - {currentExperience.end})
				</h4>
				<h4 class="text-text hover:animate-pulse hover:text-text">
					{currentExperience.location}
				</h4>
			</div>
		</svelte:fragment>
		<p class="text-base leading-relaxed text-text">
			Technologies:
			{#if currentExperience.tech}
				<List
					tag="ul"
					list="none"
					class="mb-6 flex flex-wrap items-center justify-center gap-4 pt-1"
				>
					{#each currentExperience.tech as technology}
						<Li class="divide-text">
							<p
								class="me-2 ms-2 py-0 text-accent-200 transition hover:animate-pulse md:me-3 md:ms-3"
							>
								{technology}
							</p>
						</Li>
					{/each}
				</List>
			{/if}
			{#if currentExperience.sar}
				Highlights:
				<List tag="ul" list="none">
					{#each currentExperience.sar as sar}
						<Li icon>
							<i class="fa-solid fa-angle-right me-2 h-6 w-6"></i>
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
				class="border-primary-500 text-primary-500 transition hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0"
				outline
			>
				I Like This!
			</Button>
			<Button
				color="alternative"
				class="border-white text-white transition hover:bg-white hover:text-black focus:bg-transparent focus:text-primary-500 focus:ring-0"
				outline
			>
				Close
			</Button>
		</svelte:fragment>
	</Modal>
	<ContactModal bind:open={contactModal} />
</main>
