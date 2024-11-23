<script lang="ts">
import { AccordionItem, Accordion, Button, Gallery, Heading, Img, Li, List, A } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

export let title: string;
export let description: string;
export let locationOrLink: string;
export let href: string | undefined = undefined;
export let start: string;
export let end: string;
export let tech: string[] | null[] | null = null;
</script>

<AccordionItem
	class="focus:ring-primary-500 border-x-none border-b-1 border-none text-text  group-first:rounded-none"
	borderOpenClass="border-none"
	transitionType="blur" transitionParams={{ duration: 500 }}
>
	<div slot="arrowup" class="text-text"><i class="fa-solid fa-chevron-up"></i></div>
	<div slot="arrowdown" class="text-text"><i class="fa-solid fa-chevron-down"></i></div>
	<div class="basis-11/12 animate-fade" slot="header">
		<div class="flex justify-between">
			<div class="flex flex-col">
				<div class="basis-1/2">
					<Typewriter mode="scramble" scrambleDuration={1000}>
						<Heading tag="h3" color="!text-primary-500 !drop-shadow-glow-sm">
							{title}</Heading
						>
					</Typewriter>
				</div>
				<Heading tag="h4" color="!drop-shadow-glow-sm">{description}</Heading>
			</div>
			<div class="flex flex-col text-right">
				<div class="basis-1/2">
					{#if href}
						<A {href}>
							<Typewriter mode="scramble" scrambleDuration={1000}
								><Heading tag="h3" color="!text-primary-500 !drop-shadow-glow-sm" href
									>{locationOrLink}</Heading
								></Typewriter
							>
						</A>
					{:else}
						<Typewriter mode="scramble" scrambleDuration={1000}>
							<Heading tag="h3" color="!drop-shadow-glow-sm">{locationOrLink}</Heading>
						</Typewriter>
					{/if}
				</div>
				<Heading tag="h4" color="!drop-shadow-glow-sm">{start} &mdash; {end}</Heading>
			</div>
		</div>
		{#if tech}
			<p class="text-base"><em>Tech: {tech.join(", ")}</em></p>
		{/if}
	</div>
	<slot />
</AccordionItem>
