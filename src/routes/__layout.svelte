<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="w-full md:max-w-7xl m-0 md:m-auto">
	<slot />
</main>

<footer>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		/* width: 100%; */
		/* max-width: 1440px; */
		/* margin: 0 auto; */
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
