<script lang="ts">
	import type { Project } from '$lib/types';
	import Link from '$lib/components/Link.svelte';

	export let projects: Project[];

	projects = projects.sort((a, b) => {
		let aFeatureMod = a.featured ? 1 : 0;
		let bFeatureMod = b.featured ? 1 : 0;
		return bFeatureMod - aFeatureMod;
	});
</script>

<div>
	<h1>// PROJECTS //</h1>

	{#each projects as project}
		<h2 class="w-full mt-5 mb-0">
			<Link href={project.link || '#'}
				>{project.title} // {project.start_year} - {project.end_year}</Link
			>
		</h2>
		<h3 class="w-full border-b py-3 mb-3 border-white/25 text-center">Stack: {project.stack}</h3>
		{#if project.featured}
			<ul>
				{#each project.points as point}
					<li class="my-2 text-s text-justify leading-relaxed align-top">
						<p class="inline-block align-top">{point}</p>
					</li>
				{/each}
			</ul>
			<div class="relative flex items-center">
				<!-- <hr class="border-b border-white/25 w-1/2" /> -->
				<div class="flex-grow border-t border-white/25" />
				<span class="flex-shrink mx-4 text-gray-400">***</span>
				<div class="flex-grow border-t border-white/25" />
			</div>
		{/if}
	{/each}
</div>

<style>
	h2 {
		width: 100%;
	}

	li::before {
		content: '> ';
		display: inline-block;
		margin-top: 2px;
		margin-right: 10px;
	}

	p {
		width: 90%;
	}

	@media screen and (min-width: 480px) {
		p {
			width: 96%;
		}
	}
</style>
