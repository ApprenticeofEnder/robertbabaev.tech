<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AboutSection from '$lib/components/sections/about.svelte';
	import ArticleSection from '$lib/components/sections/articles.svelte';
	import ContactSection from '$lib/components/sections/contacts.svelte';
	import ProjectSection from '$lib/components/sections/projects.svelte';
	import ResumeSection from '$lib/components/sections/resume.svelte';
	import type { Experience, Project, Article, Contact } from '$lib/types';

	import { scrollRef, scrollTop } from 'svelte-scrolling';
    import Typewriter from 'svelte-typewriter'

	export let experience: Experience[];
	export let articles: Article[];
	export let projects: Project[];
	export let contacts: Contact[];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Robert Babaev's Personal Website" />
</svelte:head>

<Section scrollRefString={'home'} isContent={false}>
	<div class="flex flex-col justify-center py-48">
		<div class="grid md:grid-cols-2 md:divide-x divide-text">
			<div class="flex flex-col justify-center">
				<Typewriter mode="scramble" scrambleDuration={1000}>
					<h1 class="w-full">ROBERT BABAEV</h1>
					<h2 class="w-full text-center text-text font-heading">Cyber Security / Development</h2>
				</Typewriter>
			</div>
			<div class="p-14">
				<img src="logo.png" alt="Robert Babaev's Logo" />
			</div>
		</div>
		<h2 class="animate-pulse my-4 md:text-lg">SCROLL DOWN</h2>
	</div>
</Section>
<Section scrollRefString={'about'}>
	<AboutSection />
</Section>

<Section scrollRefString={'resume'}>
	<ResumeSection {experience} />
</Section>

<Section scrollRefString={'articles'}>
	<ArticleSection {articles} />
</Section>

<Section scrollRefString={'projects'}>
	<ProjectSection {projects} />
</Section>

<Section scrollRefString={'contact'}>
	<ContactSection {contacts} />
</Section>

<section />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
