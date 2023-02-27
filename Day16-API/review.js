
const showDogImageButton = document.getElementById('showDogImageButton')
const dogImage = document.getElementById('dogImage')

showDogImageButton.addEventListener('click', () => {
    getDogInfo(displayDogInfo)
})

function getDogInfo(dogInfoDownloaded) {

     // create a request 
     const request = new XMLHttpRequest();
     request.addEventListener('load', function() {
         const result = JSON.parse(this.responseText)
         dogInfoDownloaded(result)
     })
 
     request.open('GET', 'https://dog.ceo/api/breeds/image/random')
     request.send()
}

emailDogInfo.addEventListener('click', () => {
    getDogInfo(function(dogInfo) {
        sendEmail('johndoe@gmail.com', 'marydoe@gmail.com', 'Dog Info', dogInfo)
    })
})

function displayDogInfo(dogInfo) {
    dogImage.setAttribute('src', dogInfo.message)
}

