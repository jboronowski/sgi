$(document).ready(function() {
  $('#calendar2').fullCalendar({
    header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,agendaDay'
    }, eventSources: ['/events.json'] });
});



  $(document).ready(function(){
    $('.datepicker').datepicker({
       todayHighlight: true, 
    format: 'dd/mm/yyyy'
    
    });
  });

  $(document).ready(function() {
  $('#dttb').dataTable({
dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
"<'row'<'col-sm-12'tr>>" +
"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"+
"<'row'<'col-sm-4'><'col-sm-4'B><'col-sm-4'>>"
    

,
buttons: [
'copy', 'csv', 'excel', 'pdf', 'print'
],

     "language": {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "csv": "Exportar Excel",
         "print": "Imprimir/PDF",
        "colvis": "Visibilidad"
    }
}

  });
});

 $(function(){
    $('#complaint_selector1').on('change',
    function(){
     if ($('#complaint_selector1').find('option:selected').text() == "Poder Judicial")
      {
      
        $('#complaint_selector2').show();
      }
     else
      {
    
        $('#complaint_selector2').hide();
      }
    })
  });