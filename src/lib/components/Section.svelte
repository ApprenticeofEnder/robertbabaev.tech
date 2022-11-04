<script lang="ts">
    import { scrollRef, scrollTop } from 'svelte-scrolling';
	import { onMount } from 'svelte';

	export let scrollRefString: string;

	let section: HTMLElement;
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add('shown');
				}
				else {
					entry.target.classList.remove('shown');
				}
			})
		})
		observer.observe(section);
	});
</script>

<section use:scrollRef={scrollRefString} bind:this="{section}" class="hide content translucent-black">
	<slot />
</section>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 1rem;
	}

	.hide {
		opacity:0;
		transition: all 1s;
	}

	.shown {
		opacity:1;
	}
</style>
