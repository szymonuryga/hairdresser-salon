<?php
    $servername = "localhost";
    $username = "test";
    $password = "test";
    $db = "dbtest2";

    $connection = new mysqli($servername,$username,$password,$db);

    if($connection->connect_error){
        die("Connect failed: " .$connection->connect_error);
    }

    $sqlQuery = "CREATE TABLE Client(
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(30) NOT NULL,
        lastName VARCHAR(30) NOT NULL,
        phoneNumber INT(9),
        dateClient DATETIME,
        email VARCHAR(50),
        services VARCHAR(100)
        )";

    if($connection->query($sqlQuery)){
        print("Tabela zostałą stowrzona pomyślnie");
    } else {
        print ("Błąd tworzenia tablei: " .$connection -> error);
    }

    if(isset($_POST['submit'])){
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $phoneNumber=$_POST['phoneNumber'];
        $dateClient = $_POST['dateClient'];
        $email = $_POST['email'];
        $service = $_POST['clientService'];

        $failes=0;

        $emailPattern = "/[a-z0-9\.-]+@[a-z0-9]+(\.[a-z0-9+])*\.[a-z]{2,3}/i";

        if(strlen($firstName)<=2){
            print('<p style="color:red;"> Imie powinno sie skladac z conajmniej 3 liter ');
            $failes++;
        }
        if(strlen($lastName)<=1){
            print('<p style="color:red;"> Nazwisko powinno sie skladac z conajmniej 2 liter ');
            $failes++;
        }
        if(strlen((string)$phoneNumber)!== 9){
            print('<p style="color:red;"> Numer telefonu musi zawierać 9 cyfr ');
            $failes++;
        }
        if(preg_match($emailPattern,$email) !== 1){
            print('<p style="color:red;"> Niepoprawny format adresu e-mail ');
            $failes++;
        }
        if($failes===0){
            $myMultiQuery = "INSERT INTO Client (firstName,lastName,phoneNumber,dateClient,email,services) VALUES('$firstName', '$lastName', '$phoneNumber', '$dateClient', '$email', '$service');";
            if($connection->multi_query($myMultiQuery)){
                print("Added new values to table");
            } else {
                print ("Error: " .$connection -> error);
            }   
        }
        $connection->close();
    }
?>