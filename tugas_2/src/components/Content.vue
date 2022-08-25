<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<article class="flex">
		<div class="v-center">
			<a>
				<img
					src="https://hackdesign.imgix.net/lesson/avatar/99/7e1acbbf-3d1d-471f-aa10-9a39c84ea649.png?ixlib=rails-2.1.4&dpr=2&w=128&fm=png&fit=max&auto=format&s=9b5cd70673437c8a6ed5a0f5a4e2fc60" />
			</a>
		</div>
		<div>
			<h1>Lorem Ipsum Dolor Sit Amet</h1>
			<p>Phasellus lacinia libero in massa accumsan tincidunt. Curabitur ut tristique lectus. Duis mauris sem,
				sollicitudin vitae ante vel, malesuada laoreet quam. Praesent non odio et nibh dictum luctus. Nunc
				vulputate,</p>
			<div class="flex justify-between">
					<button>Read lesson</button>
					<div class="v-center">
						<p>John Doe</p>
						<img class="profile-img" src="https://hackdesign.imgix.net/user/avatar/283312/0df57e1e-2859-4787-87e5-cf98e9d305b1.jpeg?ixlib=rails-2.1.4&dpr=2&w=40&h=40&fit=crop&fm=jpeg&auto=format&mask=ellipse&s=662487320d49b1f3f060f006bb8348bc"/>
					</div>
			</div>

		</div>
	</article>
</template>

<style scoped>
article {
	margin: 0 8rem 2rem;
	padding: 1rem 2rem;
}

a {
	padding-right: 2rem;
}

img {
	width: 128px;
	height: 140px;
}

.profile-img {
	width: 40px;
	height: 40px;
}
</style>
