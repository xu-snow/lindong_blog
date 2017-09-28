<template lang="jade">
	div
		my-nav
		transition(name="fade", mode="out-in")
			router-view
</template>

<style lang="scss">
	.g-container{
		max-width: 1200px;
		min-height: 455px;
		margin: 0 auto 60px auto
	}
	.g-mn, .g-sd{
		position: relative
	}
	.g-sd{
		width:300px;
		padding-left: 15px
	}
	.g-mn{
		padding:0 20px;
	}
	@media (max-width:769px){
		.g-sd{
				display: none
		} 
		.g-mn{
			padding: 0 15px;
		}
	}
	
	.f-flex{
		display:flex;
	}
	.f-flex-column{
		flex-direction:column
	}
	.f-flex-center{
			align-items: center;
			justify-content: center
	}
	.f-flex-item-1{
			flex:1
	}
	.f-spacing{
		&>*{
			margin-bottom:15px;
			&:last-child{
					margin-bottom:0
			}
		}
	}
	.f-spacing-large{
		&>*{
			margin-bottom:20px
		}
	}
	.f-spacing-little{
		&>*{
			margin-bottom:10px
		}
	}
	.fade-enter-active, .fade-leave-active{
		opacity:1;
		transition:opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
	}
	.fade-enter, .fade-leave-to{
		opacity:0
	}
		
</style>