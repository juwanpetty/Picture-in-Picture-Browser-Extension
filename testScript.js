if (document.pictureInPictureElement) {
  document.exitPictureInPicture();
} else {
  document.querySelectorAll('video')[0].requestPictureInPicture();
}