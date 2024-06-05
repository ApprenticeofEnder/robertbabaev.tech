<script lang="ts">
import { Heading } from 'flowbite-svelte';
import ContactButtons from '$lib/components/ContactButtons.svelte';
</script>

<main class="flex flex-initial justify-center">
	<div class="lg:w-3/4">
		<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4"
			>Contact</Heading
		>
		<div class="flex animate-fade justify-center">
			<div class="grid lg:w-3/4">
				<div class="flex justify-center">
					<p class="text-lg text-text">Want to get in touch?</p>
				</div>
				<ContactButtons />
			</div>
		</div>
	</div>
</main>
