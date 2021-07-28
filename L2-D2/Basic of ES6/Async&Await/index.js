const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile pic");
            resolve("Photo Uploaded")

        }, 3000)
    })
    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);

}

photoUpload();