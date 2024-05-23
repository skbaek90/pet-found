<template>
<div class="pet-info">
	<div class="price row g-0">
		$800
	</div>
	<div class="breed row g-0">
		Cardian Welsh Corgi Puppy
	</div>
	<div class="location-and-time row g-0">
		Calgary | 3wks ago
	</div>
	<div class="pet-description row g-0">
		This is a test text, later replace this with something much longer. Preferably I want to truncate after two lines with the dots but that doesn't seem to be the case - anyways, this corgi puppy might have overflowing energy but he just might be the most adorable creature you have encounrted in your entire life! Now what if I add extra text here, will it truncate? 
	</div>
</div>
</template>

<style scoped lang="scss">
.pet-info-container {
	max-width: 100%;

	.price {
		font-family: 'TypoBold', sans-serif;
		font-size: 2rem;
	}

	.breed {
		font-size: 2rem;
		color: #1E90FF;
		margin: 1rem 0;
	}

	.listing-title {

	}

	.location-and-time {
		font-size: 1rem;
		color: #A9A9A9;
		margin-top: -0.5rem;
		margin-bottom: 1rem;
	}

	.pet-description {
		display: -webkit-box;
  	-webkit-line-clamp: 3; /* Number of lines to show */
  	-webkit-box-orient: vertical;
  	overflow: hidden;
  	text-overflow: ellipsis;
	}
}
</style>