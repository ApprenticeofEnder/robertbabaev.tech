<script lang="ts">
	import { onMount } from 'svelte';

	interface ScramblerProps {
		text: string;
		delay?: number;
	}

	const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let { text, delay }: ScramblerProps = $props();
	delay ??= 0;

	let iterations = $state(0);
	let currentValue = $state(text.split('').map(getRandomLetter).join(''));

	function getRandomLetter(letter: string, index: number) {
		if (index < iterations) {
			return letter;
		}
		const newIndex = Math.floor(Math.random() * 26);
		return characters[newIndex];
	}

	function scrambleOnce(): boolean {
		console.log(text.length);
		if (iterations > text.length) {
			return false;
		}
		const newValue = text.split('').map(getRandomLetter).join('');
		currentValue = newValue;
		iterations += 1 / 3;
		return true;
	}

	function scramble() {
		const interval = setInterval(() => {
			const scrambleOccurred = scrambleOnce();
			if (!scrambleOccurred) {
				clearInterval(interval);
			}
		}, 30);
	}

	onMount(() => {
		setTimeout(scramble, delay);
	});
</script>

{currentValue}
