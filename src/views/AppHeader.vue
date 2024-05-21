<script setup>
import PetFoundLogo from '@assets/icons/pet-found-logo.jpg'
import { RouterLink } from 'vue-router';

//In this component I will use router-link to switch url wihtout reloading.
//I can use '<router-link :to="/about>' to direct user to different pages.

const navMenus = [
	{
		to: '/',
		name: 'Home'
	},
	{
		to: '/adopt',
		name: 'Adopt'
	},
	{
		to: '/re-home',
		name: 'ReHome'
	},
	{
		to: '/settings',
		name: 'Settings'
	}
];
</script>

<template>
	<div class="app-header-container row">
		<div class="pet-found-logo col-3">
			<router-link to="/">
				<img 
					alt="Pet Found Logo" 
					class="logo" 
					:src="PetFoundLogo" 
					width="125" 
					height="125" 
				/>
			</router-link>
		</div>
		<div 
			v-for="(route, index) in navMenus" 
			:key="index" 
			class="navigation-menu col"
		>
			<router-link :to="route.to">
				{{ route.name }}
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './app-header.scss';
</style>