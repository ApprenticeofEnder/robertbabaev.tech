<script lang="ts">
	import FileText from 'lucide-svelte/icons/file-text';
	import IdCard from 'lucide-svelte/icons/id-card';
	import User from 'lucide-svelte/icons/user';

	import type { Link } from '$lib/types';

	import OptionCard from './option-card.svelte';

	interface HomeOptionProps {
		links: Record<'resume' | 'about' | 'contact', Link>;
	}

	const { links }: HomeOptionProps = $props();
</script>

{#snippet resume()}
	<FileText class="contact-icon drop-shadow-glow"></FileText>
{/snippet}

{#snippet about()}
	<User class="contact-icon drop-shadow-glow"></User>
{/snippet}

{#snippet contact()}
	<IdCard class="contact-icon drop-shadow-glow"></IdCard>
{/snippet}

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	<OptionCard icon={resume} link={links.resume}></OptionCard>
	<OptionCard icon={about} link={links.about}></OptionCard>
	<OptionCard icon={contact} link={links.contact}></OptionCard>
</div>
