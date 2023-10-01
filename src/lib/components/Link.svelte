<script lang="ts">
	export let href: string;
	export let standOut: boolean = true;
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="{standOut ? 'text-accent-400' : 'text-text'} hover:animate-pulse italic"><slot /></a
>
