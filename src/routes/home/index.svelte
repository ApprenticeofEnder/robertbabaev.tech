<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import AboutSection from '$lib/components/sections/about.svelte';
	import ArticleSection from '$lib/components/sections/articles.svelte';
	import ContactSection from '$lib/components/sections/contacts.svelte';
	import ProjectSection from '$lib/components/sections/projects.svelte';
	import ResumeSection from '$lib/components/sections/resume.svelte';
	import type { Experience, Project, Article, Contact } from '$lib/types';

	import { scrollRef, scrollTop } from 'svelte-scrolling';

	export let experience: Experience[];
	export let articles: Article[];
	export let projects: Project[];
	export let contacts: Contact[];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Robert Babaev's Personal Website" />
</svelte:head>

<section use:scrollRef={'home'} class="translucent-black">
	<div class="flex flex-col justify-center py-48">
		<div class="grid md:grid-cols-2 md:divide-x divide-white">
			<div class="flex flex-col justify-center">
				<h1 class="w-full">ROBERT BABAEV</h1>
				<h2 class="w-full text-center">Cyber Security / Development</h2>
			</div>
			<div class="p-14">
				<img src="logo.png" alt="Robert Babaev's Logo" />
			</div>
		</div>
	</div>
</section>

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
