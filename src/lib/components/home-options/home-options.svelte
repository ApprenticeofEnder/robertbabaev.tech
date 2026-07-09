<script lang="ts">
	import type { IconProps } from '@lucide/svelte';
	import FileText from '@lucide/svelte/icons/file-text';
	import IdCard from '@lucide/svelte/icons/id-card';
	import User from '@lucide/svelte/icons/user';
	import type { Component } from 'svelte';

	import type { Link } from '$lib/types';

	import OptionCard from './option-card.svelte';

	interface HomeOptionProps {
		links: Record<'resume' | 'about' | 'contact', Link>;
	}

	interface HomeOption {
		link: Link;
		icon: Component<IconProps>;
		testId: string;
	}

	const { links }: HomeOptionProps = $props();

	const options: Array<HomeOption> = $derived([
		{
			link: links.resume,
			icon: FileText,
			testId: 'home-option-resume'
		},
		{
			link: links.about,
			icon: User,
			testId: 'home-option-about'
		},
		{
			link: links.contact,
			icon: IdCard,
			testId: 'home-option-contact'
		}
	]);
</script>

<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
	{#each options as option}
		<OptionCard link={option.link} testId={option.testId}>
			{#snippet icon()}
				<option.icon class="lg:contact-icon drop-shadow-glow" />
			{/snippet}
		</OptionCard>
	{/each}
</div>
