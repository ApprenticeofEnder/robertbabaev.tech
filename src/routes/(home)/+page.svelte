<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';

	import { FeaturedProjects } from '$lib/components/featured-projects';
	import Scramble from '$lib/components/scramble.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { FeaturedProject } from '$lib/types';

	let designations = ['Security SWE', 'Full Stack SWE', 'Platform Engineer', 'DevOps Engineer'];
	let currentAffiliation = 'DeepCode';
	let homepageFields = [
		{ name: 'Designation', content: designations },
		{ name: 'Current Affiliation', content: currentAffiliation },
		{ name: 'Pronouns', content: 'He/Him' }
	];

	const projects: FeaturedProject[] = [
		{
			name: 'CourseFull',
			description: 'Hello',
			link: 'https://github.com/ApprenticeofEnder/CourseFull'
		}
	];

	// Home page:
	// Options: Resume, About, Contact
</script>

{#snippet homepageField(name: string, content: string | string[])}
	<h2 class="flex flex-col drop-shadow-glow-sm sm:gap-x-3 sm:text-2xl lg:flex-row lg:text-3xl">
		<span>{name}:</span>
		<span>
			{#if typeof content === 'string'}
				<Scramble text={content} delay={500} />
			{:else}
				<TypeWriter texts={content} />
			{/if}
		</span>
	</h2>
{/snippet}

<section class="home-section">
	<h3>Entry DEV-D4D5C0D9</h3>
	<h1 class="flex gap-x-3 drop-shadow-glow-sm sm:text-3xl sm:drop-shadow-glow lg:text-4xl">
		Subject: <Scramble text="Robert Babaev" delay={500} />
	</h1>
	{#each homepageFields as field}
		{@render homepageField(field.name, field.content)}
	{/each}

	<Separator></Separator>

	<div class="flex flex-col gap-2 md:flex-row">
		<Button href="/resume">Resume</Button>
		<Button href="/about">About Me</Button>
		<Button href="/contact">Contact</Button>
	</div>
</section>

<section class="home-section">
	<h1>Featured Projects</h1>

	<FeaturedProjects {projects}></FeaturedProjects>
</section>

<section class="home-section">
	<h1>Blog Posts</h1>
</section>

<style lang="postcss">
	.home-section {
		@apply my-16 flex flex-col justify-center gap-2;
	}
</style>
