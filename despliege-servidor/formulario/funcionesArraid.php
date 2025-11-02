<?php
    /*v1*/

    function animalArrayv1(){
        return $animales = array("Koala","Oso-Polar","Elefante-Asiatico");

    }
    function conocerArrayv1(){
        return $conocio = array("Me-lo-recomendó-Google","Anuncio","Me-lo-recomendó-un-amigo","Otros...");

    }

    /*v2*/
    function animalArrayv2(){
        return $animales = array(
            1 => "Koala",
            2 => "Oso Polar",
            3 => "Elefante Asiatico"
        ); 
    }
    function conocerArrayv2(){
        return $conocio = array(
            "GOOGLE" => "Me lo recomendó Google",
            "AD" => "Anuncio",
            "FRIEND" => "Me lo recomendó un amigo",
            "OTHERS" => "Otros..."
        );
    }

    /*v3*/
    function animalArrayv3(){
       return $animales = array(
        1 => ["idAnimal" => 1, "nombreAnimal" => "Koala"],
        2 => ["idAnimal" => 2, "nombreAnimal" => "Oso Polar"],
        3 => ["idAnimal" => 3, "nombreAnimal" => "Elefante Asiatico"]
       );
    }
    function conocerArrayv3(){
        return $conocio = array(
            1 => ["idConocio" => "GOOGLE", "conocioPor" => "Me lo recomendó Google"],
            2 => ["idConocio" => "AD", "conocioPor" => "Anuncio"],
            3 => ["idConocio" => "FRIEND", "conocioPor" => "Me lo recomendó un amigo"],
            4 => ["idConocio" => "OTHERS", "conocioPor" => "Otros..."]
        );
    }

?>