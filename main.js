'use strict'

const video = document.getElementById('video')
const constraints = {
  audio: true,
  video: {
    width: 1920,
    height: 1080
  }
}

const main = async function () {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints)
    video.srcObject = stream
  } catch (e) {
    console.error(`${e.name}: ${e.message}`)
  }
}

main()
