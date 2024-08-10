<script>
import { Heading, Img, Button, ButtonGroup } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

const buttonLinks = [
	{
		href: '/about',
		text: 'About'
	},
	{
		href: '/experience',
		text: 'Experience'
	},
	{
		href: '/projects',
		text: 'Projects'
	},
	{
		href: '/contact',
		text: 'Contact'
	}
];
</script>

<div class="flex justify-center">
	<div class="flex h-dvh flex-initial flex-col justify-center divide-none">
		<div class="mb-4 grid justify-center gap-4 divide-text md:grid-cols-2 md:divide-x">
			<div class="flex flex-col justify-center gap-4">
				<!-- <div class="text-center">Want your code locked down so tight Fort Knox gets jealous?</div> -->
				<Typewriter mode="scramble" scrambleDuration={1000}>
					<Heading
						tag="h2"
						color="text-text drop-shadow-glow"
						customSize="text-2xl sm:text-4xl"
						class="text-center">ROBERT BABAEV</Heading
					></Typewriter
				>
				<Heading
					tag="h2"
					color="text-text drop-shadow-glow"
					customSize="text-xl sm:text-2xl"
					class="text-center">Security Software Engineer</Heading
				>
			</div>
			<Img
				src="/images/enderlogo_v2.png"
				size="max-w-xs sm:max-w-md"
				imgClass="mx-auto"
				alt="sample 1"
			/>
		</div>
		<p class="animate-fade p-4 text-center">
			A security-minded tech professional at the intersection of security, development, and people.
		</p>
		<div class="mt-4 flex animate-fade justify-center">
			<ButtonGroup>
				{#each buttonLinks as buttonLink}
					<Button
						class="border-primary-500 text-primary-500 transition hover:bg-primary-500 hover:text-black focus:bg-transparent focus:text-white focus:ring-0"
						outline
						href={buttonLink.href}>{buttonLink.text}</Button
					>
				{/each}
			</ButtonGroup>
		</div>
	</div>
</div>
