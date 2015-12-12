<!doctype html>
    <html>
        <head>
            <title>NoobWeb | Espace Membres</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <div id="page">
                <div id="header">

                    <img src="img/banniere2.png" class="banniere" alt="bannière">

                    <div id="nav">
                        <ul>
                            <li><a href="#" class="navlink">Accueil</a></li>
                            <li><a href="#" class="navlink">Portfolio</a></li>
                            <li><a href="#" class="currnavlink">Espace Membres</a></li>
                            <li><a href="#" class="navlink">Faire une commande</a></li>
                        </ul>
                    </div>

                    <div id="introbox">
                        <p class="introtext">Bienvenue sur NoobWeb. Vous pouvez faire un don pour m'aider, ou bien commander un site, pour cela, inscrivez vous !</p>
                    </div>
                    
                    <div id="content">
                        <!-- SI PAS CONNECTE -->
                        <p class="connexionmembre">Pour acceder à l'espace membres, veuillez vous connecter</p>
                        <form action="formconn.php" method="post">
                            <input type="text" name="pseudo" class="textbox" placeholder="Votre pseudo...">
                            <input type="password" name="password" class="textbox" placeholder="Votre mot de passe..."><br>
                            <input type="submit" name="connexion" value="Connexion">
                        </form>
                    </div>
