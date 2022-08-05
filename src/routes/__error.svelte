<script context="module">
	export function load({ error, status }) {
        console.log(error.message);
		return {
			props: {
				status
			}
		};
	}
</script>

<script lang="ts">
	import ErrorScreen from '$lib/components/screens/ErrorScreen.svelte'; // your own Error screen component
	import NotFoundScreen from '$lib/components/screens/NotFoundScreen.svelte'; // your own 404 screen component
	export let status: string;
</script>

{#if status == '404'}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<NotFoundScreen />
{:else}
	<ErrorScreen {status} />
{/if}
