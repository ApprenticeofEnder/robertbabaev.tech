<!-- TODO: Consolidate "Projects" and "Experience" into one section -->

<script lang="ts">
import resumeData from '$lib/assets/resume_data.json';
import ContactModal from '$lib/components/Modal/ContactModal.svelte';
import Modal from '$lib/components/Modal/Modal.svelte';
import { Accordion, Button, Gallery, Heading, Img, Li, List } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

import ResumeEntry from '$lib/components/Resume/ResumeEntry.svelte';
import exp from 'constants';

const experience: App.ProfessionalExperience[] = resumeData.experience;
// const projects: App.Project[] = resumeData.projects;
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

<Heading tag="h1">Robert Babaev</Heading>

<div class="flex flex-col gap-4 transition">
	<div>
		<Heading tag="h2">Education</Heading>
		<ResumeEntry
			title="Carleton University"
			description="Bachelor of Computer Science, Honours"
			locationOrLink="Ottawa, ON"
			start="Sep 2019"
			end="Jan 2025"
		/>
	</div>
	<div>
		<Heading tag="h2">Professional Experience</Heading>
		<Accordion
			border={false}
			classActive="bg-transparent hover:bg-transparent"
			classInactive="bg-transparent hover:bg-transparent"
			class="text-text"
		>
			{#each experience as experience}
				<ResumeEntry
					title={experience.title}
					description={experience.company}
					locationOrLink={experience.location}
					start={experience.start}
					end={experience.end}
					tech={experience.tech}
				>
					{#if experience.sar}
						<List>
							{#each experience.sar as sar}
								<Li class="my-4">{sar}</Li>
							{/each}
						</List>
					{/if}
				</ResumeEntry>
			{/each}
		</Accordion>
	</div>
	<div>
		<Heading tag="h2">Projects</Heading>
		<Accordion
			border={false}
			classActive="bg-transparent hover:bg-transparent"
			classInactive="bg-transparent hover:bg-transparent"
			class="text-text"
		>
			<ResumeEntry
				title="CourseFull"
				description="Full Stack Software Engineer"
				locationOrLink="coursefull.app"
				href="https://coursefull.app"
				start="May 2024"
				end="Present"
				tech={[
					'Ruby on Rails',
					'NextJS',
					'PostgreSQL',
					'Supabase',
					'TailwindCSS',
					'Vitest',
					'Playwright',
					'RSpec',
					'Docker',
					'Docker Compose',
					'DigitalOcean'
				]}
			>
				<List></List>
			</ResumeEntry>
		</Accordion>
	</div>
	<div>
		<Heading tag="h2">Professional Development</Heading>
		<div>
			<div class="flex justify-between">
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
			</div>
		</div>
	</div>
	<div>
		<Heading tag="h2">Open Source</Heading>
		<div>
			<div class="flex justify-between">
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
			</div>
		</div>
	</div>
	<div>
		<Heading tag="h2">Certifications</Heading>
		<div>
			<div class="flex justify-between">
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
				<div>
					<Heading tag="h3" color="!text-primary-500">Carleton University</Heading>
				</div>
			</div>
		</div>
	</div>
</div>
