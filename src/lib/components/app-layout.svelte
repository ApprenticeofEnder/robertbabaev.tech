<script lang="ts">
	import type { Snippet } from 'svelte';

	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import Scramble from '$lib/components/scramble.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Sidebar from '$lib/components/ui/sidebar';

	let { children, pageTitle, extra } = $props<{
		children?: unknown;
		pageTitle: string;
		extra?: Snippet;
	}>();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex w-full flex-col">
		<header class="fixed z-10 w-full bg-background p-2">
			<div class="flex items-center gap-2">
				<Sidebar.Trigger />
				<h1 class="align-middle"><Scramble text={pageTitle}></Scramble></h1>
			</div>
		</header>
		<div class="fixed right-2 z-20 flex items-center gap-2 p-2">
			{@render extra?.()}
		</div>
		<Separator class="fixed top-11 z-20 md:top-12"></Separator>
		<main class="container w-full flex-grow px-11 pb-4">
			<div class="mt-14 h-full">
				{@render children?.()}
			</div>
		</main>
	</div>
</Sidebar.Provider>
