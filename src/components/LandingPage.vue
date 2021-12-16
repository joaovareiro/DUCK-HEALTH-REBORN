<template>

    <div class = "landing-page">
        <!--Barra de navegacao-->
        <div class = "nav-bar">
            <img id="nav-bar-logo" src="../assets/Logo/LogoDuckHealth.png" alt="logo">
            <div class="container-button-nav-bar">
                <button class = "button-nav-bar">Inicio</button>
                <button class = "button-nav-bar">Sobre</button>
                <button class = "button-nav-bar">Exames</button>
                <button class = "button-nav-bar">Contato</button>
            </div>
        </div>

        <!-- Banner -->
        <div class = "banner">
                <div class = "banner-container">
                    <p class="banner-title">Duck Health</p>
                    <p class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod imperdiet. ultricies ante. </p>
                    <button class ="banner-button">
                        <img id="banner-button-icon" src="../assets/LandingPage/Banner/laudo-banner.svg" alt="icone laudo">
                        <p id="banner-button-text">Acessar Laudos</p>
                    </button>
                </div>
                <img id="banner-img" src="../assets/LandingPage/Banner/bg-banner.png" alt="imagem banner">
            </div>       

        <!-- Sobre nos -->
        <div class = "about-us">
            <img class="about-us-img" src="../assets/LandingPage/AboutUs/doctor.png" alt="doutor fazendo exame">
            <div id="about-us-container">
                <p class="about-us-title">Sobre nós</p>
                <p class="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,
                sapien id suscipit suscipit, urna ex sodales ante, nec convallis nibh nisi a
                nibh. Aenean rutrum dui id dui varius, et consequat risus congue. Pellentesque
                maximus eu arcu a maximus. Cras ac diam pharetra, tincidunt nunc ac, mattis dolor.
                Donec ullamcorper arcu et vestibulum tincidunt. Mauris finibus lacus vitae accumsan euismod.
                Nullam ut eros sit amet sapien malesuada iaculis condimentum scelerisque elit. Maecenas non
                ipsum nec massa rutrum viverra. Nulla facilisi.</p>
            </div>
        </div>

        <!-- Exames -->
        <div class = "exams">
            <p class = "exams-text">Exames</p>
            <img src="../assets/LandingPage/Exames/Exame1.png">
            <img src="../assets/LandingPage/Exames/Exame2.png">
            <img src="../assets/LandingPage/Exames/Exame3.png">
            <img src="../assets/LandingPage/Exames/Exame4.png">
            <img src="../assets/LandingPage/Exames/Exame5.png">
        </div>

        <div class = "address">
            <div class = "address-container">
                <div class = "address-title">
                    Endereço
                </div>
                <div class = "address-itself">
                    <img src="../assets/LandingPage/Endereco/Endereco1.svg">   
                    <p id="address-itself--txt">Rua dos Doidões, Bairro Muito Doido, N° 127</p>
                </div>
                <div class = "address-plus1">
                    <img id="address-plus1--img" src="../assets/LandingPage/Endereco/Endereco2.svg">
                    <p id="address-plus1--txt">Ambiente climatizado, para o seu conforto ao atende-lo!</p>
                </div>
                <div class = "address-plus2">
                    <img id="address-plus2--img" src="../assets/LandingPage/Endereco/Endereco3.svg">
                    <p id="address-plus2--txt">Sala com brinquedos e passa-tempo para as crianças!</p>
                </div>
            </div>
            <img class="address-map" src="../assets/LandingPage/Endereco/Map.svg">
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
    .landing-page{
        background-color:#EBF2F5; 
    }
    
    .nav-bar{
    background-color: #15C3D6;
    width: 1441px;
    height: 118px;
    }

    #nav-bar-logo{
        height: 90px;
        width: 90px;
        border-radius: 8px;
        background-color: #2E4A7D;
        margin: 14px 0 14px 130px;
    }

    .container-button-nav-bar{
        float:right;
        width: 480px;
        height: 40px;
        margin-top:40px;
        margin-right: 47px;
    }

    .button-nav-bar{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        color: #FFFFFF;
        background-color: #15C3D6;
        border: none;
        margin-right: 20px;
    }

    .banner{
        width : 1441px;
        height : 672px;
        background-color: #15C3D6;
        border-radius: 0 0 0 150px;
    }

    .banner-container{
        height : 481px;
        width : 444px;    
        margin-left: 113px;  
        padding-top: 27px;  
    }

    .banner-title{
    font-family: Nunito;
    font-style: normal;
    width: 444px;
    height: 76px;
    font-weight: 800;
    font-size: 64px;
    line-height: 87px;
    color: #FFD666;
    }

    .banner-text{
    width:370px;
    height: 247px;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align: justify;
    color: #FFFFFF;
    }

    .banner-button{
        position: flex;
        width: 328px;
        height:70px;
        border-radius: 20px;
        background-color: #2E4A7D;
        margin-left:21px;
        border:none;
    }

    #banner-button-text{
        float:left;
        width:216px;
        height: 32.5px;
        margin-top: 17px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        color: #FFFFFF;
        
    }
    #banner-button-icon{
        float:left;
        margin-top:15px;
        margin-left:36px;
        width: 40px;
        height: 40px;
    }   

    #banner-img{
        width: 943px;
        height: 740px;
        float:right;
        margin-top: -550px;
    }

    .about-us{
        width: 1440px;
        height: 664px;
    }

    #about-us-container{
        float: right;
        margin-top: 50px;
        margin-right: 81px;
        width: 507px;
        height: 441px;
    }

    .about-us-title{
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 65px;    
        text-align: center;
        color: #2E4A7D
    }

    .about-us-text{
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: justify;
        color: #2E4A7D
    }

    .about-us-img{
        height: 500px;
        margin-left:83px;
        margin-top: 82px;
    }

    .exams{
        width: 1440px;
        height: 656px;
        background-color: #FFD666;
        border-radius: 0 150px 0 150px;
    }

    .address{
        margin-top: 40px;
        width: 1440px;
        height: 350px;
    }

    .address-map{
        width: 630px;
        height: 267px;
        float: right;
        margin-right: 68px;
    }

    .address-container{
        margin-left:102px;
        float:left;
        width: 482px;
        height:248px;
    }

    .address-title{
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        color: #2E4A7D;
    }

    .address-itself{
        margin-top: 30px;
    }

    #address-itself--txt{    
        float:right;
        margin-top:0px;
        margin-right: 50px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        color: #2E4A7D;
    }

    .address-plus1{
        margin-top: 20px;
    }

    #address-plus1--txt{    
        float:right;
        margin-left:50px;
        margin-top:-45px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        color: #2E4A7D;
    }

    .address-plus2{
        margin-top: 20px;
    }
    #address-plus2--txt{    
        float:right;
        margin-left:50px;
        margin-top:-45px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        color: #2E4A7D;
    }
    

</style>