<script>
import '../app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<div class="relative px-8">
	<Navbar class="fixed start-0 top-0 z-20 w-full bg-background px-2 py-2.5 text-text sm:px-4">
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
			ulClass="bg-background"
		>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/experience">Experience</NavLi>
			<NavLi href="/projects">Projects</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
	<div class="mt-16 md:mt-20">
		<slot></slot>
	</div>
</div>

<style></style>
