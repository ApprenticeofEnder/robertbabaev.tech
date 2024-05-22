<script>
	import { Blockquote, Heading, Li, List } from 'flowbite-svelte';
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import {
		CheckCircleSolid,
		CloseCircleSolid,
		GlobeSolid,
		LightbulbSolid,
		QuoteSolid,
		UserSolid
	} from 'flowbite-svelte-icons';
</script>

<div class="flex flex-initial justify-center">
	<div class="w-1/2">
		<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center"
			>About Me</Heading
		>

		<Accordion
			class="hover:text-accent-200 hover:bg-transparent"
			flush
			activeClass="text-black"
			inactiveClass="hover:text-accent-200 hover:bg-transparent"
		>
			<AccordionItem open class="drop-shadow-none">
				<span slot="header" class="flex gap-2 text-base text-text drop-shadow-none">
					<UserSolid class="mt-0.5" />
					<span>Bio</span>
				</span>
				<p class="mb-2 text-text"></p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-base text-text">
					<LightbulbSolid class="mt-0.5" />
					<span>Mission</span>
				</span>
				<p class="mb-2 text-text">
					You know, when folks hear cybersecurity, a lot of the time they go "Ah, great, more things
					I have to interrupt my workflow with." If not those exact words, it's probably some
					variation of "Urgh."
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-base text-text">
					<GlobeSolid class="mt-0.5" />
					<span>Outside of Tech</span>
				</span>
				<p class="mb-2 text-text"></p>
			</AccordionItem>
		</Accordion>
	</div>
</div>
