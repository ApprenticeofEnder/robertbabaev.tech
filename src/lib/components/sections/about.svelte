<script lang="ts">
	import Link from '$lib/components/Link.svelte';
</script>

<div>
	<h1>// ABOUT ME //</h1>
	<img
		src="PFP_V1.png"
		alt="Robert standing in front of the NorthSec 2022 sign"
		class="w-60 h-52 md:w-96 md:h-80 -scale-x-100 m-auto object-cover object-right rounded-md"
	/>
	<p>
		Hey, I'm Robert! Thanks for stopping by. In the modern world, having not only security be an
		integral part of the development process but also part of culture is increasingly important in
		the face of rampant cyberattacks.
	</p>
	<p>
		That's my mission. Since 2019 I've been involved with cybersecurity, and while I like breaking
		websites wide open, I love locking them down from attacks. Even this portfolio website has a few
		nifty security tricks up its sleeve despite the small attack surface. (Try bypassing Cloudflare,
		and if you laugh I'd love to grab a coffee.)
	</p>
	<p>
		I've done everything from pitch a cybersecurity business while having just started in the field
		and still getting into an accelerator, to flying to Europe and <Link
			standOut={false}
			href="https://ecsc.eu/icc/"
			>collaborating with and competing against some of the best university-level hackers on the
			planet</Link
		>. Am I the best penetration tester or security developer on Earth? Not by a long shot. But I
		love educating folks looking to get into the field through presentations at my university, and
		advocating for better security in both conversation and research.
	</p>
	<p>
		You can find my contact information at the bottom of this page, below my resume, projects, and
		articles. Let's chat!
	</p>
</div>

<style>
	p {
		padding-top: 15px;
	}
</style>
