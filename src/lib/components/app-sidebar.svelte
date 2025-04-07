<script lang="ts">
	import Boxes from 'lucide-svelte/icons/boxes';
	import BriefcaseBusiness from 'lucide-svelte/icons/briefcase-business';
	import FileText from 'lucide-svelte/icons/file-text';
	import HelpingHand from 'lucide-svelte/icons/hand-helping';
	import House from 'lucide-svelte/icons/house';
	import IdCard from 'lucide-svelte/icons/id-card';
	import Trophy from 'lucide-svelte/icons/trophy';
	import User from 'lucide-svelte/icons/user';

	import { goto } from '$app/navigation';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	interface MenuItem {
		title: string;
		url: string;
		icon: ConstructorOfATypedSvelteComponent;
		subItems?: MenuItem[];
	}

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '/',
			icon: House
		},
		{
			title: 'Resume',
			url: '/resume',
			icon: FileText,
			subItems: [
				{ title: 'Experience', url: '/resume#experience', icon: BriefcaseBusiness },
				{ title: 'Projects', url: '/resume#projects', icon: Boxes },
				{ title: 'Hackathons', url: '/resume#hackathons', icon: Trophy },
				{ title: 'Volunteering', url: '/resume#volunteering', icon: HelpingHand }
			]
		},
		{
			title: 'About',
			url: '/about',
			icon: User
		},
		{
			title: 'Contact',
			url: '/contact',
			icon: IdCard
		}
	];

	const sidebar = Sidebar.useSidebar();
	const isMobile = new IsMobile();
</script>

{#snippet menuItem(props: object, item: MenuItem)}
	<a
		href={item.url}
		{...props}
		onclick={(e) => {
			if (!isMobile.current) {
				return;
			}
			e.preventDefault();
			sidebar.toggle();
			setTimeout(() => goto(item.url), 250);
		}}
	>
		<item.icon />
		<span>{item.title}</span>
	</a>
{/snippet}

<Sidebar.Root>
	<Sidebar.Header>Robert Babaev</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Collapsible.Root open class="group/collapsible">
							<Sidebar.MenuItem>
								<Collapsible.Trigger>
									{#snippet child({ props: collapsibleProps })}
										<Sidebar.MenuButton {...collapsibleProps}>
											{#snippet child({ props })}
												{@render menuItem(props, item)}
											{/snippet}
										</Sidebar.MenuButton>
									{/snippet}
								</Collapsible.Trigger>
								{#if item.subItems}
									<Collapsible.Content>
										<Sidebar.MenuSub>
											{#each item.subItems as subItem}
												<Sidebar.MenuSubItem>
													<Sidebar.MenuSubButton>
														{#snippet child({ props })}
															{@render menuItem(props, subItem)}
														{/snippet}
													</Sidebar.MenuSubButton>
												</Sidebar.MenuSubItem>
											{/each}
										</Sidebar.MenuSub>
									</Collapsible.Content>
								{/if}
							</Sidebar.MenuItem>
						</Collapsible.Root>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>
