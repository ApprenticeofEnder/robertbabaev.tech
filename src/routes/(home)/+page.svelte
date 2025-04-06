<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';

	import Scramble from '$lib/components/scramble.svelte';

	// Home page:
	// Options: Resume, About, Contact
</script>

<section class="flex h-full flex-col justify-center gap-2">
	<h1 class="drop-shadow-glow-sm sm:text-4xl sm:drop-shadow-glow">
		Subject: <Scramble text="Robert Babaev" delay={500} />
	</h1>

	<h2 class="drop-shadow-glow-sm sm:text-3xl">
		Designation: <TypeWriter
			texts={[
				'Security Software Engineer',
				'Full-Stack Software Engineer',
				'Platform Engineer',
				'DevOps Engineer'
			]}
		/>
	</h2>
	<h2 class="drop-shadow-glow-sm sm:text-3xl">
		Current Affiliation: <Scramble text="DeepCode" delay={500}></Scramble>
	</h2>
	<h2 class="drop-shadow-glow-sm sm:text-3xl">
		Pronouns: <Scramble text="He/Him" delay={500} />
	</h2>
	<h2 class="drop-shadow-glow-sm sm:text-3xl">Options</h2>
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<!-- Quick about, save the rest for the About Me -->
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<!-- Areas of Expertise -->
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<!-- Selected work -->
</section>

<section class="flex h-full flex-col justify-center gap-2">
	<!-- Blog? -->
</section>
