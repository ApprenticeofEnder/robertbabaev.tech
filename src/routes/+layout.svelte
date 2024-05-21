<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="bg-background text-text">
	<NavBrand href="/">
		<img src="/images/enderlogo_v2.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold drop-shadow-glow"
			>Robert Babaev</span
		>
	</NavBrand>
	<NavHamburger />
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
<slot></slot>

<style></style>
