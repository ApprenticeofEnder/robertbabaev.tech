<script lang="ts">
    import { scrollRef, scrollTop } from 'svelte-scrolling';

	export let scrollRefString: string;
</script>

<section use:scrollRef={scrollRefString} class="content translucent-black">
	<slot />
</section>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		padding: 1rem;
	}
</style>
