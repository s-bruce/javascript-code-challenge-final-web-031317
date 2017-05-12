class PhotoList {

	constructor(imageUrl, caption){
		this.imageUrl = imageUrl
		this.caption = caption
		this.$photoList = $("#photo-list")
		this.renderImage()
		this.renderCaption()
	}

	renderImage(){
		const $imageHtml = `<img src="${this.imageUrl}">`
		this.$photoList.append($imageHtml)
	}

	renderCaption(){
		const $captionHtml = `<p>${this.caption}</p>`
		this.$photoList.append(`${$captionHtml}<br>`)
	}

}