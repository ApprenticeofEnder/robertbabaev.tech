<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import {clickOutside} from '$lib/clickOutside';

	import { scrollTo } from 'svelte-scrolling'

	let menuVisible: boolean = false;

	function menuOff(){
		menuVisible = false;
	}

	function menuToggle(){
		menuVisible = !menuVisible;
	}
</script>

<header>
	<nav class="w-full">
		{#if menuVisible}
			<ul id="menu-links" class="w-full" transition:fly="{{x:-200}}">
				<li><a use:scrollTo={'home'} on:click={menuOff} href={"#"}>Home</a></li>
				<li>
					<a use:scrollTo={'about'} on:click={menuOff} href={"#about"}>About</a>
				</li>
				<li>
					<a use:scrollTo={'resume'} on:click={menuOff} href={"#resume"}>Resume</a>
				</li>
				<li>
					<a use:scrollTo={'articles'} on:click={menuOff} href={"#articles"}>Articles</a>
				</li>
				<li>
					<a use:scrollTo={'projects'} on:click={menuOff} href={"#projects"}>Projects</a>
				</li>
				<li>
					<a use:scrollTo={'contact'} on:click={menuOff} href={"#contact"}>Contact</a>
				</li>
			</ul>
		{/if}
		<a use:clickOutside href={"javascript:void(0);"} class="icon mx-5 my-2" on:click={menuToggle} on:click_outside={menuOff}>
			<i class="fa fa-bars text-lg"></i>
		</a>
	</nav>
</header>

<style>
	header {
		position: fixed;
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(0, 0, 0, 0.7);
		box-shadow:0 0 15px 8px rgba(0,0,0,0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		width: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		text-align: center;
		padding: 0.5em 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	nav a.icon {
		position: fixed;
		right: 0;
		top: 0;
		width: 0;
		height: 0;
		display: block;
	}
</style>
