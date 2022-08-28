<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { faker } from "@faker-js/faker"

interface contentData {
	imgUrl: string
	title: string
	description: string
	author: string
}

const data: contentData[] = [];

for (let i = 0; i < 10; i++) {
	// const imgUrl = faker.image.cats(1000, 1000, true);
	const imgUrl = "https://hackdesign.imgix.net/lessons/week11.png?ixlib=rails-2.1.4&dpr=2&w=128&fm=png&fit=max&auto=format&s=c71c4f2c6069a300f19d34cbc7651b45";
	const title = faker.lorem.sentence(5).replace(".", "");
	const description = faker.lorem.paragraph(5);
	const author = faker.name.fullName();

	data.push({
		imgUrl,
		title,
		description,
		author
	})
}

</script>

<template>
	<article v-for="item in data" class="container flex py-2 px-2 l:my-10 xl:my-auto">
		<div class="content-img v-center">
			<a>
				<img :src="item.imgUrl" />
			</a>
		</div>
		<div>
			<h1 class="font-serif text-l lh-3 mb-1 text-orange font-bold capitalize">{{ item.title }}</h1>
			<p class="mb-1 text-med-gray">
				{{ item.description }}
			</p>
			<div class="flex flex-col l:flex-row l:justify-between l:flex-center">
				<button class="h-2 bg-white text-black rounded mb-1 l:mb-0">Lorem Ipsum</button>
				<div class="flex flex-col l:flex-row l:flex-center">
					<p class="text-gray l:pr-1">{{ item.author }}</p>
					<img class="profile-img"
						src="https://hackdesign.imgix.net/user/avatar/283312/0df57e1e-2859-4787-87e5-cf98e9d305b1.jpeg?ixlib=rails-2.1.4&dpr=2&w=40&h=40&fit=crop&fm=jpeg&auto=format&mask=ellipse&s=662487320d49b1f3f060f006bb8348bc" />
				</div>
			</div>
		</div>
	</article>
</template>

<style scoped>
a {
	display: inline-block;
	padding-right: 2.5rem;
}

img {
	display: block;
	width: 128px;
	height: 140px;
}

button {
	max-width: 120px;
	align-items: center;
}

.profile-img {
	width: 40px;
	height: 40px;
}
</style>
