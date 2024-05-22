<script>
	import { Heading, Img, Button, ButtonGroup } from 'flowbite-svelte';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="flex justify-center">
	<div class="flex flex-initial flex-col divide-none justify-center h-dvh">
		<div class="grid md:grid-cols-2 md:divide-x divide-text gap-4 mb-4 justify-center">
			<div class="flex flex-col justify-center">
				<Typewriter mode="scramble" scrambleDuration={1000}>
					<Heading tag="h2" color="text-text drop-shadow-glow" customSize="text-2xl sm:text-4xl"
						>ROBERT BABAEV</Heading
					></Typewriter
				>
			</div>
			<Img
				src="/images/enderlogo_v2.png"
				size="max-w-xs sm:max-w-md"
				imgClass="mx-auto"
				alt="sample 1"
			/>
		</div>
		<p class="p-4 text-center animate-fade">
			A security-minded tech professional at the intersection of security, development, and people.
		</p>
		<div class="flex justify-center mt-4 animate-fade">
			<ButtonGroup>
				<Button
					class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white transition"
					outline
					href="/about">About</Button
				>
				<Button
					class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white transition"
					outline>Experience</Button
				>
				<Button
					class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white transition"
					outline>Projects</Button
				>
				<Button
					class="text-primary-500 border-primary-500 hover:bg-primary-500 focus:bg-transparent hover:text-black focus:text-white transition"
					outline>Contact</Button
				>
			</ButtonGroup>
		</div>
	</div>
</div>
