<script lang="ts">
    import type { IHash } from "$lib/types";
    export let status: string;

    let errorCodes: IHash = {
        "400": "turkey",
        "500": "beaver",
        "501": "moose",
        "502": "goose"
    }
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="Robert Babaev's Personal Website" />
</svelte:head>

<div class="flex flex-col justify-center py-48">
    <div class="grid md:grid-cols-2 md:divide-x divide-white">
        <div class="flex flex-col justify-center">
            <h1 class="w-full">ERROR</h1>
            <h2 class="w-full text-center">Something went wrong. ERROR CODE: {errorCodes[status] || "alien"}</h2>
        </div>
        <div class="p-14">
            <img src="logo.png" alt="Robert Babaev's Logo" />
        </div>
    </div>
</div>