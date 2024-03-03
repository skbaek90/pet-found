<script setup>
import PetFoundLogo from '../assets/pet-found-logo.jpg'

</script>

<template>
  <div class="pet-found-logo">
		<img alt="Pet Found Logo" class="logo" :src="PetFoundLogo" width="125" height="125" />
	</div>
	<div class="navigation">
		<PetFound msg="You did it!" />

		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</div>
</template>

<style scoped>

</style>
