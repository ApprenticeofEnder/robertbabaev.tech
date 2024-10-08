<script lang="ts">
import { Heading, Img, Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
import Typewriter from 'svelte-typewriter';

let i = 0;
const tableData: App.TableData[] = [
	{ key: 'NAME', value: 'Robert Babaev' },
	{ key: 'NATIONALITY', value: 'Canadian' },
	{ key: 'ROLE', value: 'Security Engineer/Developer' },
	{ key: 'SPECIALIZATION', value: 'Web Application Security' },
	{ key: 'STRENGTHS', value: 'Creativity, Professionalism, Friendliness, Fearless Innovation' },
	{ key: 'FAVOURITE TECH', value: 'Python, Rust, Svelte, Docker, Linux' }
].map((entry: App.TableData) => {
	entry.duration = 1000 + i * 250;
	i++;
	return entry;
});
</script>

<main class="flex flex-initial justify-center">
	<div class="lg:w-3/4">
		<Heading tag="h1" color="text-primary-500" customSize="text-2xl sm:text-4xl text-center my-4"
			>About Me</Heading
		>

		<div class="grid gap-x-16 lg:grid-flow-row lg:grid-cols-5">
			<div class="animate-fade lg:col-span-2">
				<Img src="/images/PFP_V2.jpg" size="max-w-xs" imgClass="mx-auto" alt="sample 1" />
			</div>

			<div class="lg:col-span-3 lg:col-start-3">
				<Table noborder={true} class="animate-fade">
					<TableBody>
						{#each tableData as entry}
							<TableBodyRow class="border-b-2 border-solid border-text/25 bg-transparent">
								<TableBodyCell class="pl-0 text-text md:text-base">{entry.key}</TableBodyCell>
								<Typewriter mode="scramble" scrambleDuration={entry.duration}>
									<TableBodyCell class="text-balance text-text lg:text-base">
										{entry.value}
									</TableBodyCell></Typewriter
								>
							</TableBodyRow>
						{/each}
					</TableBody>
				</Table>
			</div>

			<div class="animate-fade lg:col-span-5">
				<p class="text-justify">
					Hey, I'm Robert! I'm a cybersecurity and software development aficionado that loves
					building software, locking it down, and making friends along the way.
				</p>

				<p class="text-justify">
					I've done security and security-adjacent things for 5+ years -- from my first foray with
					pitching a terrible security startup idea that still got me into an accelerator, to
					competing in high-stakes hacking competitions at international levels, to finishing my
					Honours Thesis on password sharing, access control, and why we don't have more systems to
					address that kind of thing.
				</p>

				<p class="text-justify">
					Outside of work, you can find me digging into coding/networking/security projects, playing
					tabletop games such as Lancer, practicing martial arts, or cooking!
				</p>
			</div>
		</div>
	</div>
</main>
