<script lang="ts">
	import AppLayout from '$lib/components/app-layout.svelte';

	let { children } = $props();
</script>

<AppLayout pageTitle="Home">{@render children?.()}</AppLayout>
