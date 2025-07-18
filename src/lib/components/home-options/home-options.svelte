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
	<FileText class="lg:contact-icon drop-shadow-glow"></FileText>
{/snippet}

{#snippet about()}
	<User class="lg:contact-icon drop-shadow-glow"></User>
{/snippet}

{#snippet contact()}
	<IdCard class="lg:contact-icon drop-shadow-glow"></IdCard>
{/snippet}

<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
	<OptionCard icon={resume} link={links.resume} testId="home-option-resume"></OptionCard>
	<OptionCard icon={about} link={links.about} testId="home-option-about"></OptionCard>
	<OptionCard icon={contact} link={links.contact} testId="home-option-contact"></OptionCard>
</div>
