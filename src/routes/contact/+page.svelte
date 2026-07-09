<script lang="ts">
	import { ContactSection } from '$lib/components/contact-section';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { contactLinks } = $derived(data);
</script>

<ContactSection links={contactLinks}></ContactSection>
