<script lang="ts">
	import PanelLeft from '@lucide/svelte/icons/panel-left';
	import type { ComponentProps } from 'svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	data-sidebar="trigger"
	variant="outline"
	size="icon"
	class={cn(
		'h-7 w-7 border-white hover:border-primary hover:bg-primary hover:text-primary-foreground',
		className
	)}
	{...restProps}
>
	<PanelLeft />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
