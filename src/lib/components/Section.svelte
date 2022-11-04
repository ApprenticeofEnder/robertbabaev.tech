<script lang="ts">
    import { scrollRef, scrollTop } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from 'svelte/transition';

	export let scrollRefString: string;
	export let isContent: boolean = true;

	let section: HTMLElement;
	let intersecting: boolean;

	let classString = "translucent-black";
	onMount(() => {
		if(isContent) {
			classString = "content " + classString;
		}
	});
</script>

<IntersectionObserver element={section} bind:intersecting>
	{#if intersecting}
		<section transition:fade use:scrollRef={scrollRefString} bind:this="{section}" class="{classString}">
			<slot />
		</section>
	{:else}
		<section use:scrollRef={scrollRefString} bind:this="{section}" class="hide {classString}">
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
