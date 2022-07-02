<?php
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $asunto = 'Formulario Rellenado';	
  $mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];
  
  if(mail('angel_012912@hotmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
        echo "<script>console.log('Se envio el correo');</script>";
	}
?>
