<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { clickOutside } from '$lib/clickOutside';

	import { scrollTo } from 'svelte-scrolling';

	let menuVisible: boolean = false;

	let menuOptions: string[] = ['home', 'about', 'resume', 'articles', 'projects', 'contact'];

	function menuOff() {
		menuVisible = false;
	}

	function menuToggle() {
		menuVisible = !menuVisible;
	}
</script>

<header>
	<nav class="w-full">
		{#if menuVisible}
			<ul id="menu-links" class="right-8 md:right-0 top-10" transition:fly={{ x: 200 }} on:click_outside={menuOff}>
				{#each menuOptions as option}
					<li>
						<a
							use:scrollTo={option}
							on:click={menuOff}
							href={`#${option}`}
							class="hover:text-accent-400 text-text font-body">{option.toUpperCase()}</a
						>
					</li>
				{/each}
			</ul>
		{/if}
		<a
			use:clickOutside
			href={'javascript:void(0);'}
			class="icon md:mx-5 md:my-2 text-text hover:text-accent-400 right-4 md:right-0"
			on:click={menuToggle}
			on:click_outside={menuOff}
		>
			<i class="fa fa-bars text-lg" />
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
		box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.7);
	}

	ul {
		position: fixed;
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
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	nav a.icon {
		position: fixed;
		top: 0;
		width: 0;
		height: 0;
		display: block;
	}
</style>
