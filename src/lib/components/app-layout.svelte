<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import Scramble from '$lib/components/scramble.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';

	let { children, pageTitle } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<div class="m-2 flex w-full flex-col">
		<div class="flex items-center gap-2">
			<Sidebar.Trigger />
			<h1 class="align-middle"><Scramble text={pageTitle}></Scramble></h1>
		</div>
		<hr class="my-2" />
		<main class="container w-full flex-grow ps-9">
			{@render children?.()}
		</main>
	</div>
</Sidebar.Provider>
