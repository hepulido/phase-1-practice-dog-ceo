console.log('%c HI', 'color: firebrick')


const getDogImgs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((dogImgData) => {
        const dogImgContainer = document.querySelector("#dog-image-container")
    
        dogImgData.message.forEach((imgUrl) => {
            const dogImg = document.createElement('img')
            dogImg.src = imgUrl
            dogImgContainer.append(dogImg)
        })
    })
}