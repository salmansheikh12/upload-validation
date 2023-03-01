
<script> 


export default {
    name: 'UploadPage',
    data (){
        return {
            selectedFile: null
        }
    },
    methods: {
        

        onFileSelected(event) {
       
            This.selectedFile = event.target.files[0]


        },
        onUpload(){


        }


    }







}



</script>   

<template>

    <section>



        <div class="container">
    
            <h3 class="text-center">Upload Images</h3>
            <hr id="sep">

            <p class="text-center fontL">
                Upload your Moon image here!

            </p>

            <input type="file" id="image_input" @change="onFileSelected" accept="image/png, image/jpeg, image/jpg, image/pdf">   
            <!-- <br>
            <br> -->
            <div id="display_image">


            </div>
            <button @click="onUpload" class="btn btn-success fontM" ><strong>UPLOAD</strong></button>

            <!-- <br>
            <br>
       
            <button type="button" class="btn btn-success" ><strong>Add More files</strong></button> -->


        </div>



    </section>


    


    
</template>



<style>


    #display_image{
        width: 400px;
        height: 225px;
        border: 1px dotted white;
        background-position: center;
        background-size: cover;
        margin: 10%;
    




    }
    .container {

        padding-top: 20px;
        padding-bottom: 120px;

    }

    .text-center{

        color: white;
        text-decoration: none;
        font-weight: bold;

    }

    .fontL{
        font-size: large;

    }

    .fontM{
        font-size: small;


    }

    


</style>