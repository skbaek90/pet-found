<script setup>
import Corgi from '@assets/pets/dogs/corgi-1.webp'
</script>

<template>
	<div class="pet-listing-container row">
		<div class="col">
			<img 
				class="pet-picture"
				:src="Corgi"
			/>
		</div>
		<div class="pet-info col">
			<div class="pet-price row">
				$800
			</div>
			<div class="pet-listing-title row">
				Cute Corgi, only 1 left!
			</div>
			<div class="location-and-time row">
				Calgary | 3wks ago
			</div>
			<div class="pet-description row">
				This is a test text, later replace this with something much longer. Preferably I want to truncate after two lines with ...
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.pet-listing-container {
	border: 1px solid lightskyblue;

	.pet-picture {
		width: 250px;
		height: 250px;
	}
}
</style>