<script lang="ts">
	import resumeData from '$lib/assets/resume_data.json';
	import type { Project } from '$lib/types';
	import { Heading, Button, Gallery, Img, Li, List, Indicator } from 'flowbite-svelte';
	import { AngleRightSolid } from 'svelte-awesome-icons';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import ContactModal from '$lib/components/Modal/ContactModal.svelte';
	import Typewriter from 'svelte-typewriter';

	const projects: Project[] = resumeData.projects;
	let currentProject = projects[0];
	const featuredProjects: Project[] = projects.filter((project) => project.featured);
	let projectModal = false;
	let contactModal = false;
	const showProject = (projectItem: Project) => {
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
	<Gallery class="gap-4 grid-cols-2 md:grid-cols-3 md:w-3/4 mx-auto animate-fade">
		{#each projects as projectItem}
			{#if projectItem.src}
				<Button
					class="bg-white hover:bg-white animate-glow-out-lg hover:animate-glow-in-lg hover:drop-shadow-glow-lg focus:ring-0 transition duration-200  relative"
					on:click={() => {
						showProject(projectItem);
					}}
				>
					<Img
						src={projectItem.src}
						alt={projectItem.alt}
						class="mx-auto transition-all duration-300 rounded-lg"
					/>
					{#if projectItem.featured}
						<Indicator
							color="none"
							class="bg-primary-500 text-xs text-black font-semibold absolute top-2 right-2"
							size="xl"
						>
							!
						</Indicator>
					{/if}
				</Button>
			{:else}
				<Button
					class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white focus:ring-0 transition duration-200 relative"
					outline
					on:click={() => {
						showProject(projectItem);
					}}
				>
					<div class="h-[100px] w-[100px] md:h-[320px] md:w-[320px] flex flex-col justify-center">
						<div class="text-xl md:text-2xl">{projectItem.title}</div>
					</div>
					{#if projectItem.featured}
						<Indicator
							color="none"
							class="bg-primary-500 text-xs text-black font-semibold absolute top-2 right-2"
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
					<h2 class="text-text hover:text-text hover:animate-pulse drop-shadow-glow">
						{currentProject.title}
					</h2>
				</Typewriter>
				<h3 class="text-text hover:text-text hover:animate-pulse">
					{currentProject.start} - {currentProject.end}
				</h3>
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
					class="flex flex-wrap justify-center items-center gap-4 mb-6 pt-1"
				>
					{#each currentProject.tech as technology}
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
			{#if currentProject.sar}
				<List tag="ul" list="none">
					{#each currentProject.sar as sar}
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
