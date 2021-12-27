<template>

    <div class = "landing-page">
        <!--Barra de navegacao-->
        <div class = "nav-bar">
            <div class = "nav-bar-container">
            <img id="nav-bar-logo" src="../assets/Logo/LogoDuckHealth.png" alt="logo">
            <div class="container-button-nav-bar">
                <button class = "button-nav-bar">Inicio</button>
                <button class = "button-nav-bar">Sobre</button>
                <button class = "button-nav-bar">Exames</button>
                <button class = "button-nav-bar">Contato</button>
            </div>
        </div>
        </div>

        <!-- Banner -->
        <div class = "banner">
                <div class = "banner-container">
                    <div class = "banner-container--info">
                    <p class="banner-title">Duck Health</p>
                    <p class="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod imperdiet. ultricies ante. </p>
                    <button class ="banner-button">
                        <img class="banner-button-icon" src="../assets/LandingPage/Banner/laudo-banner.svg" alt="icone laudo">
                        <p class="banner-button-text">Acessar Laudos</p>
                    </button>
                    </div>
                    <div class ="banner-container--img">
                    <img class="banner-img" src="../assets/LandingPage/Banner/bg-banner.png" alt="imagem banner">
                    </div>
                </div>
            </div>  

        <!-- Sobre nos -->
        <div class = "about-us">
            <div class="about-us-container">
            <img class="about-us-img" src="../assets/LandingPage/AboutUs/doctor.png" alt="doutor fazendo exame">
            <div class="about-us-container-info">
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
        <!-- Exames -->
        <div class = "exams">
            <div class = "exams-container">
            <p class = "exams-title" >Exames</p>

            <div class = "exams-container-info">
                <div class = "exams-item" id="et1">
                    <img class = "exams-item--img" src="../assets/LandingPage/Exames/Exame1.svg">
                    <p class = "exams-item--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>

                <div class = "exams-item" id="et2">
                    <img class = "exams-item--img" src="../assets/LandingPage/Exames/Exame3.svg">
                    <p class = "exams-item--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>

                <div class = "exams-item" id="et3">
                    <img class = "exams-item--img" src="../assets/LandingPage/Exames/Exame2.svg">
                    <p class = "exams-item--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>

                <div class = "exams-item" id="et4">
                    <img class = "exams-item--img" src="../assets/LandingPage/Exames/Exame2.svg">
                    <p class = "exams-item--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>

                <div class = "exams-item" id="et5">
                    <img class = "exams-item--img" src="../assets/LandingPage/Exames/Exame1.svg">
                    <p class = "exams-item--txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, </p>
                </div>
                </div>
            </div>
        </div>

        <div class = "address">
            <div class = "address-container">
            <div class = "address-container-info">
                <div class = "address-title">
                    Endereço
                </div>
                <div class = "address-item">
                    <img src="../assets/LandingPage/Endereco/Endereco1.svg">   
                    <p class="address-item-text">Rua dos Doidões, Bairro Muito Doido, N° 127</p>
                </div>
                <div class = "address-item">
                    <img src="../assets/LandingPage/Endereco/Endereco2.svg">
                    <p class ="address-item-text">Ambiente climatizado, para o seu conforto ao atende-lo!</p>
                </div>
                <div class = "address-item">
                    <img src="../assets/LandingPage/Endereco/Endereco3.svg">
                    <p class="address-item-text">Sala com brinquedos e passa-tempo para as crianças!</p>
                </div>
            </div>
            <div class ="address-map-container">
            <img class="address-map" src="../assets/LandingPage/Endereco/Map.svg">
            </div>
        </div>
        </div>

        <div class = "contact">
            <div class = "contact-container">
                <div class = "contact-forms">
                    <div class = "contact-forms-container">
                        <div class = "contact-forms-user-info">
                            <input type="text" class="contact-input" placeholder="Nome">
                            <input type="text" class="contact-input" placeholder="Email">
                        </div>
                <textarea type="text" class="contact-input" id="contact-big-input" placeholder="Como podemos ajudar? Envie sua dúvida"></textarea>
                <button class="contact-input" id="contact-button">Enviar Mensagem</button>
                </div>
            </div>

            <div class = "contact-container-info">
                <p class = "contact-title">Contatos</p>

                <div class = "contact-items">
                <div class = "contact-item" id = "contact-phone">
                    <img class="contact-item--img" src="../assets/LandingPage/Contato/Contato1.svg">
                    <p class="contact-item--txt">67(0000-0000) ou 67(00000-0000)</p>
                </div>
                <div class = "contact-item" id = "contact-instagram">
                    <img class="contact-item--img" src="../assets/LandingPage/Contato/Contato2.svg">
                    <p class="contact-item--txt">@Duck_Health</p>
                </div>
                <div class = "contact-item" id = "contact-facebook">
                    <img class="contact-item--img" src="../assets/LandingPage/Contato/Contato3.svg">
                    <p class="contact-item--txt">Duck Health</p>
                </div>
                <div class = "contact-item" id = "contact-linkedin">
                    <img class="contact-item--img" src="../assets/LandingPage/Contato/Contato4.svg">
                    <p class="contact-item--txt">Duck Health</p>
                    </div>
                    </div>
                </div>
            </div>
        </div> 

        <div class = "footer">
            <div class = "footer-container">
            <img class = "footer-logo" src="../assets/Logo/LogoDuckHealth.png">
            <p class = "footer-title">Duck Health</p>
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
    background-color: #FFFFFF;
    font-size: 100%;
    overflow: initial;
    }
    

    .nav-bar{
    display: flex;
    justify-content: center;
    background-color: #15C3D6;
    width: 100%;
    }

    .nav-bar-container{
        display: flex;
        width: 100%;
        max-width: 1440px;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 30px;
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

    .button-nav-bar:hover{
        background-color: #139cac;
    }

    .button-nav-bar:active{
        background-color: #107783;
    }

    .landing-page{
        background-color:#EBF2F5; 
    }

    
    .p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }

    @media only screen and (max-width: 980px){

    .contact-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 10%;
    }

    .contact-forms-user-info{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .contact-container-info{
        padding-top: 20px;
    }
    
    .contact-items{
        padding-left: 10%;
    }

    .address-title{
        display: flex;
        justify-content: center;
    }

    .address-container-info{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .address-container{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .address-map{
        margin-top:15px;
    }

    .banner-container-info{
        margin-left: 0px;
    }
    
    .banner-container{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    }

    .banner-container--img{
    width: 100%;
    max-width: 600px;
    }
    
    .about-us-container{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 90px;
    margin-left:5%;
    }


    .about-us-img{
        display: flex;
        width: 100%;
        max-width: 600px;
        min-width: 250px;
        margin: 0;
    }

    .about-us-container-info{
    margin: 0;
    margin-top: 40px;
    max-width: 520px;
    }

    }

    .landing-page{
        background-color:#EBF2F5; 
    }

    .banner{
        display: flex;
        background-color: #15C3D6;
        justify-content: center;
        padding-bottom: 90px;
        border-radius: 0 0 0 150px;
    }

    .banner-container{
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom-left-radius: 150px;
    margin-top: 40px;
    padding: 0 20px;
    position: relative;
    }

    .banner-container--info{
        font-family: Nunito;
        color:#FFFFFF;
        font-size: 1.4rem;
        text-align: justify;
        flex: 1;
        max-width: 400px;
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .banner-container--img{
    width: 100%;
    max-width: 1100px;
    flex: 1.5;
    margin-right: -20px;
    margin-top: 10px;
    }

    
    .banner-title{
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 4rem;
        color: #FFD666;
    }

    .banner-text{
        font-family: Nunito;
        font-size: 1.4rem;
        font-weight: bold;
        color: #FFFFFF;
    }

    .banner-button{
    display: flex;
    width: 90%;
    margin-top: 55px;
    color: #FFFFFF;
    font-size: 1.8rem;
    background-color: #2E4A7D;
    border-radius: 20px;
    border: none;
    justify-content: space-evenly;
    }

    .banner-button:active{
        background-color: #19315e;
    }

    .banner-button-icon{
    }

    .banner-button-text{
        margin-left: -20px;
    }
    
    .banner-img{
        width: 100%;
    }

    .about-us{
        display: flex;
        justify-content:center;
        margin-bottom: 80px;
    }

    .about-us-container{
    display: flex;
    width: 100%;
    max-width: 1440px;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 90px;
    }

    .about-us-container-info{
        display: flex;
        flex-direction: column;
        font-family: Nunito;
        color: #2E4A7D;
        font-size: 1.2rem;
        font-weight: 800;
        text-align: justify;
        margin-top: 50px;
        max-width: 520px;
        margin-right: 90px;
        margin-left: 20px;
    }

    .about-us-title{
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    }
    
    .about-us-text{
        color: rgba(46, 74, 125, 0.8);
    }

    @media only screen and (max-width: 450px){
    .exams{
        border-radius: 0 120px 0 120px;
    }
    }

    .exams{
    max-width: 100%;
    display: flex;
    background-color:#FFD666;
    justify-content: center;
    border-radius: 0 150px 0 150px;
    }

    .exams-container{
    display: flex;
    width: 100%;
    max-width: 1440px;
    flex-direction: column;
    align-items: flex-start;
    }

    .exams-title{
        display: block;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 38px;
        color:#2E4A7D;
        margin-left:60px;
        padding-top: 25px;
    }
    
    .exams-container-info{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
    }
    
    

    .exams-item{
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 8% 40px 48px;
    }

    .exams-item--img{
    width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
    border-color: #2E4A7D;
}

    .exams-item--txt{
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #2E4A7D;
    }

    .address{
        display: flex;
        justify-content:center;
        padding-bottom:25px ;
    }

    .address-container{
        display: flex;
        width: 100%;
        max-width: 1440px;
        justify-content: space-between;
        align-items: flex-start;
    }

    .address-container-info{
        display: flex;
        flex-direction: column;
        font-family: Nunito;
        color: #2E4A7D;
        font-size: 1.2rem;
        font-weight: 800;
        text-align: justify;
        margin-top: 50px;
        max-width: 520px;
        margin-right: 90px;
        margin-left: 20px;
    }

    .address-title{
    font-size: 3rem;
    text-align: laddress-item--txt2eft;
    margin-bottom: 20px;
    }

    .address-item{
        width: 80%;
        display: flex;
    }
    
    .address-item-text{
        margin-left: 15px;
    }

    .address-map-container{
    align-items: center;
    max-width: 630px;
    margin-top: 10px;
    display: flex;
    flex-direction:column;
}

    .address-map{
        width: 100%;
        margin-top: 10%;
    }

    .contact{
        display: flex;
        justify-content:center;
    }

    .contact-container{
        display: flex;
        width: 100%;
        justify-content: space-between;
        max-width: 1440px;
    }

    .contact-forms{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .contact-forms-container{
        display: flex;
        flex-direction: column;
    }

    .contact-forms-user-info{
        display: flex;
        justify-content: center;
        width: 100%;
        
    }

    .contact-input{
        flex-basis: 100%;
        padding: 10px;
        border-radius: 8px;
        font-family:Nunito;
        color: #909090;
        font-size: 1.2rem;
        margin: 6px;
        border: none;
        margin-top: 12px;
        font-weight: 800;
    }

    #contact-big-input{
        padding-bottom: 120px;
    }

    #contact-button{
        background-color:#2E4A7D;
        color:#FFFFFF;
    }

    #contact-button:active{
        background-color: #19315e;
    }

    .contact-title{
    color:#2E4A7D;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    font-family: Nunito;
    }

    .contact-items{
        font-family: Nunito;
        font-size: 1.5rem;
        color:#2E4A7D;
        font-weight: 800;
        margin-top:-55px;
    }

    .contact-item{
        display: flex;
        align-items: center;
        text-align: left;
        margin-top:-20px;
    }

    .contact-item--txt{
        margin-left:15px;
    }

    .contact-container-info{
        margin-top:-50px;
        margin-bottom: 50px;
        margin-right: 5%;
    }
    .footer{
        display: flex;
        width: 100%;
        height: 182px;
        background-color: #15C3D6;
        border-radius: 0 80px 0 0;
        justify-content: center;
    }

    .footer-container{
        display: flex;
        width: 100%;
        max-width: 1440px;
        justify-content: left;
        align-items: flex-start;
        margin-top: 30px;
    }

    .footer-logo{
        width: 160px;
        float: left;
    }

    .footer-title{
        margin-top:48px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        float:left;
        color: #FFFFFF;
    }
    
</style>