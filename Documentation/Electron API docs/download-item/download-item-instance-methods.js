# <https://www.electronjs.org/docs/api/download-item#instance-methods>
// The downloadItem object has the following methods:

downloadItem.setSavePath(path) //, The API is only available in session's will-download callback function. If user doesn't set the save path via the API, Electron will use the original routine to determine the save path; this usually prompts a save dialog.
downloadItem.getSavePath() //, Returns String - The save path of the download item. This will be either the path set via downloadItem.setSavePath(path) // or the path selected from the shown save dialog.
downloadItem.setSaveDialogOptions(options) //, This API allows the user to set custom options for the save dialog that opens for the download item by default. The API is only available in session's will-download callback function.
downloadItem.getSaveDialogOptions() //, Returns SaveDialogOptions - Returns the object previously set by downloadItem.setSaveDialogOptions(options) //.
downloadItem.pause() //, Pauses the download.
downloadItem.isPaused() //, Returns Boolean - Whether the download is paused.
downloadItem.resume() //, Resumes the download that has been paused.
downloadItem.canResume() //, Returns Boolean - Whether the download can resume.
downloadItem.cancel() //, Cancels the download operation.
downloadItem.getURL() //, Returns String - The origin URL where the item is downloaded from.
downloadItem.getMimeType() //, Returns String - The files mime type.
downloadItem.hasUserGesture() //, Returns Boolean - Whether the download has user gesture.
downloadItem.getFilename() //, Returns String - The file name of the download item.
downloadItem.getTotalBytes() //, Returns Integer - The total size in bytes of the download item.
downloadItem.getReceivedBytes() //, Returns Integer - The received bytes of the download item.
downloadItem.getContentDisposition() //, Returns String - The Content-Disposition field from the response header.
downloadItem.getState() //, Returns String - The current state. Can be progressing, completed, cancelled or interrupted.
downloadItem.getURLChain() //, Returns String[] - The complete URL chain of the item including any redirects.
downloadItem.getLastModifiedTime() //, Returns String - Last-Modified header value.
downloadItem.getETag() //, Returns String - ETag header value.
downloadItem.getStartTime() //, Returns Double - Number of seconds since the UNIX epoch when the download was started.
downloadItem.savePath // A String property that determines the save file path of the download item.
