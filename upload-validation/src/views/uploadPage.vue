
<script>

export default {
    name: 'UploadPage',
    data (){
        return {
            selectedFile: null
        }
    },
    mehtods: {
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

            <input type="file" @change="onFileSelected">   
            <br>
            <br>
            <button @click="onUpload" class="btn btn-success fontM" ><strong>UPLOAD</strong></button>

            <!-- <br>
            <br>
       
            <button type="button" class="btn btn-success" ><strong>Add More files</strong></button> -->


        </div>



    </section>


    


    
</template>



<style>


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