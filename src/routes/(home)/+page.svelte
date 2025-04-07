<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';

	import Scramble from '$lib/components/scramble.svelte';

	let designations = ['Security SWE', 'Full Stack SWE', 'Platform Engineer', 'DevOps Engineer'];
	let currentAffiliation = 'DeepCode';
	let homepageFields = [
		{ name: 'Designation', content: designations },
		{ name: 'Current Affiliation', content: currentAffiliation },
		{ name: 'Pronouns', content: 'He/Him' }
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

<section class="flex h-1/2 flex-col justify-center gap-2 md:h-3/4">
	<h3>Entry DEV-D4D5C0D9</h3>
	<h1 class="flex gap-x-3 drop-shadow-glow-sm sm:text-3xl sm:drop-shadow-glow lg:text-4xl">
		Subject: <Scramble text="Robert Babaev" delay={500} />
	</h1>
	{#each homepageFields as field}
		{@render homepageField(field.name, field.content)}
	{/each}

	<h2 class="drop-shadow-glow-sm sm:text-3xl">Options</h2>
</section>

<section class="flex flex-col justify-center gap-8">
	<h1>Building Digital Fortresses</h1>
	<p>
		I have been writing code since I was 13 years old, and securing it since 2020. With a security
		mindset and a proven track record of learning things on the fly, I can help lock down your
		codebase, automation systems, and infrastructure.
	</p>
	<h1>Flexibility, Creativity, Courage, and Innovation</h1>
	<p>
		I've spent years making projects with all manner of technologies, specializing in web and cloud.
		These range from a structlog integration with FastAPI to a SaaS app in Rails and Next.js that
		helps students gamify their academic goals. My team and I even built a container runtime for QNX
		when the platform didn't even support them back at cuHacking 2025 - despite everything seemingly
		telling us it couldn't be done.
	</p>
	<p>
		If you need your projects to have the same stale life, unfortunately, I can't help you there.
		That said, I can help breathe new life into anything I work on.
	</p>
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<h1>Featured Projects</h1>
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<h1>Blog Posts</h1>
</section>
