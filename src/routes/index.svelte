<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Robert Babaev's Personal Website" />
</svelte:head>

<section use:scrollRef={'home'} class="translucent-black">
	<div class="flex flex-col justify-center py-48">
		<div class="grid md:grid-cols-2 md:divide-x divide-white">
			<div class="flex flex-col justify-center">
				<h1>ROBERT BABAEV</h1>
				<h2 class="">Cyber Security / Development</h2>
			</div>
			<div class="p-14">
				<img src="logo.png" alt="Robert Babaev's Logo"/>	
			</div>
		</div>
	</div>
</section>

<section use:scrollRef={'about'} class="content translucent-black">
	<h1>About Me</h1>
	<img src="aboutme.jpeg" alt="Robert standing in front of the NorthSec 2022 sign">
	<p>
		Hi, my name is Robert, and I'm a third year standing student in a Bachelor of Computer Science
		at Carleton University. Currently, my focus is in cyber security, which I've been involved in
		for a few years. I like to think of myself as striking a balance between security and
		development, where I build tooling and practice secure development in the web apps I build to
		the best of my ability. In other words, I like being either on the purple team or just doing 
		security development work.
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	h2 {
		width: 100%;
		text-align: center;
	}

	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 1rem;
	}
</style>
