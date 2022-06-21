<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About Me" />
</svelte:head>

<div class="content">
	<h1>About Me</h1>
	<img src="aboutme.jpeg" alt="Robert standing in front of the NorthSec 2022 sign">
	<p>
		Hi, my name is Robert, and I'm a third year standing student in a Bachelor of Computer Science
		at Carleton University. Currently, my focus is in cyber security, which I've been involved in
		for a few years. I like to think of myself as striking a balance between security and
		development, where I build tooling and practice secure development in the web apps I build to
		the best of my ability. In other words, I like being on the purple team.
	</p>
	<p>
		I started my cybersecurity journey in 2019 with, of all things, a business pitch. The idea? 
		Hack hackers back. Automatically. An idea riddled with flaws, but I was able to convince the 
		judges of the idea enough that they accepted me into the Hatch 2019 Cohort. It was there that
		I actually began to study the field in more depth, and realized that in no way was this idea
		getting off the ground. But that led me to attending a cybersecurity workshop, which got me into 
		Capture the Flag games, and that encouraged me to practice further.
	</p>
	<p>
		Between June 2021 and June 2022, I tried my hand at competitive Capture the Flag events, with
		CyberSci Team Canada. I got the opportunity to travel to both Prague, Czechia and Athens, Greece
		to compete in international CTFs. They were excellent opportunities, which I'm really thankful to CyberSci for,
		and I was able to see some of Europe for the first time and meet awesome people.
	</p>
	<p>
		Outside of work, I enjoy doing Muay Thai, playing tabletop RPGs such as Lancer,
		and spending time with my girlfriend (often on the Minecraft server I host).
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		background-color: rgba(0,0,0,0.7);
	}

	p {
		padding-top: 15px;
	}
</style>
