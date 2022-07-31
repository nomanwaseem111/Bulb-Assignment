
const bulbOn = () => {

    document.getElementById('images').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIHhAPP3yk2H3IAld3Fy80btsCSIqCPdiOw&usqp=CAU"
}

const bulbOff = () => {

    document.getElementById('images').src = "data:image/jpeg;base64,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"
}






