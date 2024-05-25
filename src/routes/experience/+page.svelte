<script lang="ts">
	import resumeData from '$lib/assets/resume_data.json';
	import { Gallery, Img } from 'flowbite-svelte';
	const images = [
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
	];
</script>

<main>
	<Gallery class="gap-4 grid-cols-3 md:w-3/4 mx-auto" items={resumeData.experience} let:item>
		<Img
			src={item.src}
			alt={item.alt}
			class="mx-auto transition-all duration-300 blur-sm hover:blur-none rounded-lg"
		/>
	</Gallery>
</main>
