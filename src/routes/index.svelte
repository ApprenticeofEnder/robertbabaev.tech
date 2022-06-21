<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-col justify-center py-48">
		<div class="grid grid-cols-2 divide-x divide-white">
			<div class="flex flex-col justify-center">
				<h1>ROBERT BABAEV</h1>
				<h2>Cyber Security / Development</h2>
			</div>
			<div class="p-14">
				<img src="logo.png" alt="Robert Babaev's Logo"/>	
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		background-color: rgba(0,0,0,0.7);
	}

	h1 {
		width: 100%;
	}

	h2 {
		width: 100%;
		text-align: center;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
