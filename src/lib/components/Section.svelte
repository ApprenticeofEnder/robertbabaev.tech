<script lang="ts">
    import { scrollRef, scrollTop } from 'svelte-scrolling';
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from 'svelte/transition';

	export let scrollRefString: string;

	let section: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserver element={section} bind:intersecting>
	{#if intersecting}
		<section transition:fade use:scrollRef={scrollRefString} bind:this="{section}" class="content translucent-black">
			<slot />
		</section>
	{:else}
		<section use:scrollRef={scrollRefString} bind:this="{section}" class="hide content translucent-black">
			<slot />
		</section>
	{/if}
</IntersectionObserver>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 1rem;
	}

	.hide {
		opacity: 0;
	}
</style>
