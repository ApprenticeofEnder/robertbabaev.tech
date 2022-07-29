<!-- Reason for this redirect is because Sveltekit APIs were acting weird and I couldn't resolve the error without the home routes -->

<script context="module" lang="ts">
	export const prerender = true;

	export async function load() {

    return {
      status: 302,
      redirect: "/home"
    };
  }
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Robert Babaev's Personal Website" />
</svelte:head>

<section class="translucent-black">
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
