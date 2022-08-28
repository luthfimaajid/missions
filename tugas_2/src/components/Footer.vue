<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const year = new Date().getFullYear()
</script>
<template>
	<footer class="container px-2">
		<div class="flex flex-col text-gray py-1 l:flex-row l:justify-between">
			<p class="mb-1">&copy; {{ year }}</p>
			<nav>
				<ul class="flex">
					<li>
						<a href="#">Lorem</a>
					</li>
					<li>
						<a href="#">Ipsum</a>
					</li>
					<li>
						<a href="#">Dolor</a>
					</li>
					<li>
						<a href="#">Sit</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<style scoped>
@media only screen and (min-width: 830px) {
	li {
		margin-right: 0;
		margin-left: 2rem;
	}
}

div {
	border-top: 0.5px solid gainsboro;
}
</style>
