<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
	<Navbar class="bg-background text-text px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0">
		<NavBrand href="/">
			<img src="/images/enderlogo_v2.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold drop-shadow-glow"
				>Robert Babaev</span
			>
		</NavBrand>
		<NavHamburger classMenu="text-text" />
		<NavUl
			nonActiveClass="text-accent-200 hover:text-text drop-shadow-glow transition duration-500 text-lg"
			activeClass="text-text text-lg"
		>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<!-- <NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi> -->
		</NavUl>
	</Navbar>
	<div class="mt-16 md:mt-20">
		<slot></slot>
	</div>
</div>

<style></style>
