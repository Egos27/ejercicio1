angular.module("myApp", [])
  .controller("alumnoController", function ($scope)
  {
  // Inicializo el modelo
 
    $scope.Personas=[{Apellido:'Agua',Nombre:'Rogelio',DNI:333333,Foto:'333333.jpg'},
                    {Apellido:'Giratoria',Nombre:'Banera',DNI:222222,Foto:'222222.jpg'},
                    {Apellido:'Crucero',Nombre:'Tomas',DNI:777777,Foto:'777777.jpg'},
                    {Apellido:'Roberto',Nombre:'Julieta',DNI:888888,Foto:'888888.jpg'},
                    {Apellido:'Mercurio',Nombre:'Alfredo',DNI:999999,Foto:'999999.jpg'},
                    {Apellido:'Marron',Nombre:'Jaime',DNI:55555,Foto:'555555.jpg'},
                    {Apellido:'Trabajos',Nombre:'Esteban',DNI:111111,Foto:'111111.jpg'},
                    {Apellido:'Zorro',Nombre:'Miguel',DNI:987654,Foto:'444444.jpg'}];
 

 //$scope.Actual={Apellido:'Giratoria',Nombre:'Banera',DNI:222222,Foto:'222222.jpg'};


  $scope.ElegirAcual = function(dni){
    //busca la persona seleccionada para mostrar 
    if(dni>0)
       $scope.Actual=$scope.Personas.filter(function(x){return x.DNI ==dni;})[0] ;
  };

  $scope.ObtenerImagen = function(src){
    //retorna la ruta de la imagen
    return 'fotos/' + src;
  }

   

});

