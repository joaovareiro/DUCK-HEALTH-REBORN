<template>

    <div class = "landing-page">
        <!--Barra de navegacao-->
        <div class = "nav-bar">
            <img id="nav-bar-logo" src="../assets/Logo/LogoDuckHealth.png" alt="logo">
            <div class="buttons-nav-bar">
                <button>Inicio</button>
                <button>Sobre</button>
                <button>Exames</button>
                <button>Contato</button>
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

    .buttons-nav-bar{
        font-family: 'Nunito', sans-serif;
        float: right;
        margin-top: 41.77px;
        margin-right:74.05px;
        justify-content: space-evenly;
    }

    .banner{
        margin-top: 15px;
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


</style>