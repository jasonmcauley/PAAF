(function() {
    
    var _rootURL = 'http://localhost:65431/api';

    $(document).ready(function(){        
        $('#btnSubmit').click(function(){   
            var eAPI = _packageData();            
            _sendEAPI(eAPI);
        });
    });

    function _sendEAPI(eAPI) {        
        $.ajax({            
            url: _rootURL + '/eAPI/AddeAPI',
            type: 'POST',
            data: JSON.stringify(eAPI),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                _handleSuccess(msg);
            },
            error: function(msg) {
                _handleError(msg);
            }
        });
    }

    
    function _packageData() {
        var eAPI = {}

        // Get field values
        eAPI.StringOne = $('#textfield1').val();
        eAPI.StringTwo = $('#textfield2').val();
        eAPI.StringThree = $('#textfield3').val();

        return eAPI;
    }

    function _handleSuccess(msg) {
        GrowlNotification.notify({
            title: 'Data sent to Asthma Life successfully.',
            description: '',
            type: 'success',
            position: 'top-right',
            closeTimeout: 3000
          });
    }
    
    function _handleError(msg) {
        console.log(msg);
    }

})();