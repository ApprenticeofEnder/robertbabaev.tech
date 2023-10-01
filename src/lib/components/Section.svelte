<script lang="ts">
	import { scrollRef, scrollTop } from 'svelte-scrolling';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade, type SlideParams } from 'svelte/transition';
	import { cubicOut, cubicInOut, linear } from 'svelte/easing';

	export let scrollRefString: string;
	export let isContent: boolean = true;

	let section: HTMLElement;
	let intersecting: boolean;

	let classString = 'bg-background/25';

	function blurSlide(
		node: Element,
		{ delay = 0, duration = 400, easing = cubicOut }: SlideParams = {}
	) {
		const style = getComputedStyle(node);
		const opacity = 0;
		const amount = 5;
		const height = parseFloat(style.height);
		const padding_top = parseFloat(style.paddingTop);
		const padding_bottom = parseFloat(style.paddingBottom);
		const margin_top = parseFloat(style.marginTop);
		const margin_bottom = parseFloat(style.marginBottom);
		const border_top_width = parseFloat(style.borderTopWidth);
		const border_bottom_width = parseFloat(style.borderBottomWidth);
		const target_opacity = +style.opacity;
		const f = style.filter === 'none' ? '' : style.filter;

		const od = target_opacity * (1 - opacity);

		return {
			delay,
			duration,
			easing,
			css: (t: number, u: number) => {
				return (
					'overflow: hidden;' +
					`opacity: ${target_opacity - od * u}` +
					`height: ${t * height}px;` +
					`padding-top: ${t * padding_top}px;` +
					`padding-bottom: ${t * padding_bottom}px;` +
					`margin-top: ${t * margin_top}px;` +
					`margin-bottom: ${t * margin_bottom}px;` +
					`border-top-width: ${t * border_top_width}px;` +
					`border-bottom-width: ${t * border_bottom_width}px;` +
					`filter: ${f} blur(${u * amount}px);`
				);
			}
		};
	}

	onMount(() => {
		if (isContent) {
			classString = 'content ' + classString;
		}
	});
</script>

<div use:scrollRef={scrollRefString}></div>
<IntersectionObserver once element={section} bind:intersecting>
	{#if intersecting}
		{#if isContent}
			<section transition:blurSlide={{ duration: 800 }} bind:this={section} class={classString}>
				<slot />
			</section>
		{:else}
			<section transition:fade={{ duration: 800 }} bind:this={section} class={classString}>
				<slot />
			</section>
		{/if}
	{:else}
		<section bind:this={section} class="hide {classString}">
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
