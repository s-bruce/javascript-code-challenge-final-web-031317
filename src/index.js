$(document).ready(function(){
  $("#photo-form").submit(function(e){
  	e.preventDefault()
  	
  	// Get form inputs
  	const photo = new Photo()
  	const $imageUrl = photo.createImage()
  	const $caption = photo.createCaption()

  	// Render image and caption
  	const view = new PhotoList($imageUrl, $caption)
  })
})
