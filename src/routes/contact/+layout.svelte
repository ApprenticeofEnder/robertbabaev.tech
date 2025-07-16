<script lang="ts">
	import AppLayout from '$lib/components/app-layout.svelte';

	let { children } = $props();
</script>

<AppLayout pageTitle="Contact Me">{@render children?.()}</AppLayout>
