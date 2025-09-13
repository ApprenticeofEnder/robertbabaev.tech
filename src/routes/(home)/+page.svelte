<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';

	import { BlogPosts } from '$lib/components/blog-posts';
	import { FeaturedProjects } from '$lib/components/featured-projects';
	import { HomeOptions } from '$lib/components/home-options';
	import Scramble from '$lib/components/scramble.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { featuredProjects, homepageConfig, blogPosts } = data;
</script>

{#snippet homepageField(name: string, content: string | string[], testId: string)}
	<h2 class="flex flex-col drop-shadow-glow-sm sm:gap-x-3 sm:text-2xl lg:flex-row lg:text-3xl">
		<span>{name}:</span>
		<span data-testid={testId}>
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
	{#each Object.entries(homepageConfig.fields) as [fieldId, field]}
		{@render homepageField(field.name, field.content, fieldId)}
	{/each}

	<Separator></Separator>

	<HomeOptions links={homepageConfig.options}></HomeOptions>
</section>

<section class="home-section">
	<h1>Featured Projects</h1>

	<FeaturedProjects projects={Object.values(featuredProjects)} />
</section>

<section class="home-section">
	<h1>Blog Posts</h1>

	<BlogPosts posts={blogPosts} />
</section>

<style lang="postcss">
	.home-section {
		@apply my-16 flex flex-col justify-center gap-2;
	}
</style>
