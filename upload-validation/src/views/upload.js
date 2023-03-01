const image_imput = document.querySelector('#image_input');
var uploaded_Image = "";


const reader = new FileReader("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = 'url(${uploaded_Image})';

    });

    reader.readAsDataURL(this.file[0]);

});

// reader.readAsDataURL(this.file[0]);