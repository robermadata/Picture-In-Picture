const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

//Asyncronuos Function Prompt to select media stream, pass to video element , than play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catach Error Here
    console.log("Whoops , error here:", error);
  }
}
selectMediaStream();

button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  // Start picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disable = false;
});
