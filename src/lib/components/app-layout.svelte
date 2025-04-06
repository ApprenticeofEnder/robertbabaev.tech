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
		<header class="fixed z-10 w-full bg-background p-2 pb-0">
			<div class="flex items-center gap-2">
				<Sidebar.Trigger />
				<h1 class="align-middle"><Scramble text={pageTitle}></Scramble></h1>
			</div>
			<Separator class="mt-2"></Separator>
		</header>
		<main class="container relative w-full flex-grow ps-11">
			{@render children?.()}
		</main>
	</div>
</Sidebar.Provider>
