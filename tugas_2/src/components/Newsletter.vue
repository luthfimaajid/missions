<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<section class="container py-4">
		<div class="bg-gray p-2 l:mx-15">
			<h2 class="lh-1 mb-1 text-dark-blue">Lorem ipsum dolor sit amet</h2>
			<p class="mb-1 text-gray">Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
			<div class="flex flex-col l:flex-row">
				<input placeholder="Email address" type="email" class="h-3 bg-white">
				<button class="bg-green">Get started</button>
			</div>
		</div>
	</section>
</template>


<style scoped>

input {
	flex-basis: 70%;
	min-height: 50px;
}

button {
	flex-basis: 30%;
	min-height: 38px;
}
</style>
