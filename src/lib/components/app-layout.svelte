<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import Scramble from '$lib/components/scramble.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Sidebar from '$lib/components/ui/sidebar';

	let { children, pageTitle } = $props();
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
		<Separator class="fixed top-11 z-20 md:top-12"></Separator>
		<main class="container w-full flex-grow px-11 pb-4">
			<div class="mt-14 h-full">
				{@render children?.()}
			</div>
		</main>
	</div>
</Sidebar.Provider>
