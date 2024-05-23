<script setup>
import Corgi from '@assets/pets/dogs/corgi-1.webp'
import PetInfo from '@components/pet-listing/PetInfo.vue';
</script>

<template>
	<div class="pet-listing-container row g-0">
		<div class="pet-image-container col-auto">
			<img 
				class="pet-image"
				:src="Corgi"
			/>
		</div>
		<div class="pet-info-container col">
			<pet-info />
		</div>
	</div>
</template>

<style scoped lang="scss">
.pet-listing-container {
	border: 1px solid lightskyblue;
	padding: 1rem;
	margin: 0 5rem;

	.pet-image-container {
		padding-right: 1rem;

		.pet-image {
			width: 15rem;
			height: 15rem;
			border-radius: 1rem;
		}
	}
}
</style>