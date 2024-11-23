<script>
import '../app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading } from 'flowbite-svelte';

import { PAGES } from '$lib/pages';
</script>

<div class="relative mx-auto max-w-[1024px] px-8 bg-background">
	<Navbar
		class="fixed start-0 top-0 z-20 w-full mx-auto bg-background px-2 py-2.5 text-text sm:px-4 "
	>
		<NavBrand href="/">
			<img src="/images/enderlogo_v2.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<Heading tag="h3" class="self-center whitespace-nowrap text-xl font-semibold">
				Robert Babaev
			</Heading>
		</NavBrand>
		<NavHamburger classMenu="text-text" />
		<NavUl
			nonActiveClass="text-accent-200 hover:text-text drop-shadow-glow transition duration-500 text-lg"
			activeClass="text-text text-lg"
			classUl="bg-background"
		>
			{#each PAGES as pageLink}
				<NavLi href={pageLink.href}>{pageLink.text}</NavLi>
			{/each}
		</NavUl>
	</Navbar>
	<div class="mt-16 md:mt-20">
		<slot></slot>
	</div>
</div>

