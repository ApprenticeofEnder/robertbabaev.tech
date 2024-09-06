<script lang="ts">
import resumeData from '$lib/assets/resume_data.json';
import ContactModal from '$lib/components/Modal/ContactModal.svelte';
import Modal from '$lib/components/Modal/Modal.svelte';
import { A, Button, Gallery, Heading, Img, Indicator, Li, List } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

const projects: App.Project[] = resumeData.projects;
let currentProject = projects[0];
let projectModal = false;
let contactModal = false;
const showProject = (projectItem: App.Project) => {
	currentProject = projectItem;
	projectModal = true;
};
const showContact = () => {
	contactModal = true;
};
</script>

<main>
	<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4"
		>Projects</Heading
	>
	<Gallery class="mx-auto animate-fade grid-cols-2 gap-4 lg:grid-cols-3 lg:w-3/4">
		{#each projects as projectItem}
			{#if projectItem.src}
				<Button
					class="relative animate-glow-out-lg bg-white transition duration-200 hover:animate-glow-in-lg hover:bg-white hover:drop-shadow-glow-lg  focus:ring-0"
					on:click={() => {
						showProject(projectItem);
					}}
				>
					<Img
						src={projectItem.src}
						alt={projectItem.alt}
						class="mx-auto rounded-lg transition-all duration-300"
					/>
					{#if projectItem.featured}
						<Indicator
							color="none"
							class="absolute right-2 top-2 bg-primary-500 text-xs font-semibold text-black"
							size="xl"
						>
							!
						</Indicator>
					{/if}
				</Button>
			{:else}
				<Button
					class="relative border-primary-500 text-primary-500 transition duration-200 hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0"
					outline
					on:click={() => {
						showProject(projectItem);
					}}
				>
					<div class="flex h-[100px] w-[100px] flex-col justify-center lg:h-[320px] lg:w-[320px]">
						<div class="text-lg sm:text-xl md:text-2xl">{projectItem.title}</div>
					</div>
					{#if projectItem.featured}
						<Indicator
							color="none"
							class="absolute right-2 top-2 bg-primary-500 text-xs font-semibold text-black"
							size="xl"
						>
							!
						</Indicator>
					{/if}
				</Button>
			{/if}
		{/each}
	</Gallery>
	<Modal bind:open={projectModal} animate="animate-fade-fast">
		<svelte:fragment slot="header">
			<div class="inline-block">
				<Typewriter mode="scramble" scrambleDuration={1000}>
					<h2 class="text-text drop-shadow-glow hover:animate-pulse hover:text-text">
						{currentProject.title}
					</h2>
				</Typewriter>
				<h3 class="text-text hover:animate-pulse hover:text-text">
					{currentProject.start} - {currentProject.end}
				</h3>
				{#if currentProject.link}
					<h3>
						<A href={currentProject.link}>Project Link</A>
					</h3>
				{/if}
			</div>
		</svelte:fragment>

		<p class="text-base leading-relaxed text-text">
			{currentProject.description}
		</p>

		<p class="text-base leading-relaxed text-text">
			Technologies:
			{#if currentProject.tech}
				<List
					tag="ul"
					list="none"
					class="mb-6 flex flex-wrap items-center justify-center gap-4 pt-1"
				>
					{#each currentProject.tech as technology}
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
			{#if currentProject.sar}
				Highlights:
				<List tag="ul" list="none">
					{#each currentProject.sar as sar}
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
