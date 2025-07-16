<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';

	let { title } = $props();
</script>

<div class="flex gap-2">
	<Sidebar.Trigger />
	<h1 class="align-middle">{title}</h1>
</div>
<hr class="my-2" />
