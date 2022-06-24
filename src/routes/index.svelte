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

<section class="translucent-black">
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
	}

	h1 {
		width: 100%;
	}

	h2 {
		width: 100%;
		text-align: center;
	}
</style>
