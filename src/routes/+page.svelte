<script>
	import { Heading, Img, P, Button, A, Mark, Secondary } from 'flowbite-svelte';
	import Typewriter from 'svelte-typewriter';
</script>

<div class="text-center">
	<div class="flex justify-center">
		<div>
			<div class="grid md:grid-cols-2 md:divide-x divide-text gap-4 mb-4">
				<div class="flex flex-col justify-center">
					<Typewriter mode="scramble" scrambleDuration={1000}>
						<Heading tag="h2" color="text-text">ROBERT BABAEV</Heading></Typewriter
					>
				</div>
				<Img src="/images/enderlogo_v2.png" size="max-w-md" alt="sample 1" />
			</div>
			<Typewriter mode="scramble" scrambleDuration={1000} delay={1500}
				><Heading tag="h3" color="text-text">Security for humans.</Heading></Typewriter
			>
		</div>
	</div>
</div>
