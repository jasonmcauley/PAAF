//(function() {
    // Need to pull these 
    const _Medications = [{"MedicationFieldID":"qvar","MedicationName":"QVAR (Beclomethasone dipropionate HFA)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"pulmicortTurbuhaler","MedicationName":"Pulmicort Turbuhaler (Budesonide)","IsSevere":true,"SevereThresholdAdult":800,"SevereThresholdChild":800,"BudesonideMultiplierChild":1,"BudesonideMultiplierAdult":1,"ControllersCount":1},{"MedicationFieldID":"symbicortTurbuhaler","MedicationName":"Symbicort Turbuhaler (Budesonide/formoterol)","IsSevere":true,"SevereThresholdAdult":800,"SevereThresholdChild":800,"BudesonideMultiplierChild":1,"BudesonideMultiplierAdult":1,"ControllersCount":2},{"MedicationFieldID":"alvesco","MedicationName":"Alvesco (Ciclesonide)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":2,"ControllersCount":1},{"MedicationFieldID":"floventMDI","MedicationName":"Flovent MDI and spacer (Fluticasone propionate)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"floventDiskus","MedicationName":"Flovent Diskus (Fluticasone propionate)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"advairDiskus","MedicationName":"Advair Diskus (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"advairPMDI","MedicationName":"Advair pMDI (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"wixelaInhub","MedicationName":"Wixela Inhub (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"arnuityEllipta","MedicationName":"Arnuity Ellipta (Fluticasone furoate)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":1},{"MedicationFieldID":"breoEllipta","MedicationName":"Breo Ellipta (Fluticasone/vilanterol Ellipta)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":2},{"MedicationFieldID":"trelegyEllipta","MedicationName":"Trelegy Ellipta (Fluticasone/vilanterol/umeclidinium)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":3},{"MedicationFieldID":"asmanexTwisthaler","MedicationName":"Asmanex Twisthaler (Mometasone furoate)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":1},{"MedicationFieldID":"zenhaleMDI","MedicationName":"Zenhale MDI (Mometasone/formoterol)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":2}];
    //const _Medications = null;
    const _isAdult = true;

    $(document).ready(function(){        
        // $.ajax({
        //     url: 'MedData.json',
        //     dataType: 'json',
        //     async: false,
        //     success: function(data) {
        //         console.log(data);
        //         _Medications = data;
        //     }
        // });

        _BindAlgorithmTriggerEvents();

        // Tigger on initial load
        TriggerAlgorithm();

    });

    function _CalculateDailyIntakeByMedName(medName) {
        let dailyIntakeTotal = null;
        const medStrength = $('#' + medName + 'Strength').val();
        const medDose = $('#' + medName + 'Dose').val();
        const medFreq = $('#' + medName + 'Freq').val();

        if (medStrength && medDose && medFreq) {
            dailyIntakeTotal = medStrength * medDose * medFreq;                    
        }

        return dailyIntakeTotal;
    }

    function _BindAlgorithmTriggerEvents() {
        // Medication checkbox event binding
        $('.med-calc-section input[type=checkbox]').each(function() {
            $(this).click(function(e) {
                TriggerAlgorithm();
            })
        });

        // Stength / Dose / Frequency event binding 
        $(".med-calc-section select").each(function(index){
            $(this).blur(function(e) {
                TriggerAlgorithm();
            })
        });

        $('input[name=diagnosis]').click(function(){
            TriggerAlgorithm();
        });

        $('input[name=corticosteroidUsedPreviousYear]').click(function(){
            TriggerAlgorithm();
        });
    }

    function TriggerAlgorithm() {
        if(_isConfirmedAsthma()) {
            const multiSevereMed = _hasMultiSevereMeds();
            let medSevere = null;
    
            if (multiSevereMed) {
                medSevere = _isMultiMedSevere();
            } 
            else {            
                medSevere = _isSingleMedSevere();
            }
    
            //console.log('med severe: ', medSevere);
    
            if (medSevere || _isSystemicSteroidSevere()) {
                $(".severe-asthma-footer").show();
                $("#IsSevere").val(1);
            }
            else {
                $(".severe-asthma-footer").hide();
                $("#IsSevere").val(0);
            }
    
        }
    }

    function _isSingleMedSevere() {        
        let isSevereAmount = false;
        let numberControllers = 0;

        _Medications.forEach(function(med) {
            if ($("#" + med.MedicationFieldID + ":checked").val()){
                const medDailyIntake = _CalculateDailyIntakeByMedName(med.MedicationFieldID);           
                if (medDailyIntake) {
                    let medThreshhold = null;
                    if (_isChild()) 
                    {
                        medThreshhold = med.SevereThresholdChild;
                    }
                    else {
                        medThreshhold = med.SevereThresholdAdult;
                    }
                    
                    isSevereAmount = medDailyIntake > medThreshhold;
                    numberControllers += med.ControllersCount;
                } 
            }           
        });
        
        numberControllers += _getNumberAdditionalControllers();
        //console.log('single num controllers', numberControllers);

        return isSevereAmount && numberControllers > 1;
    }

    function _isMultiMedSevere() {
        const isChild = _isChild();
        let medTotal = 0;
        let budesonideMultiplier = 1;
        let numberControllers = 0;

        _Medications.forEach(function(med) {            
            if ($("#" + med.MedicationFieldID + ":checked").val()){
                const medDailyIntake = _CalculateDailyIntakeByMedName(med.MedicationFieldID);
                if (medDailyIntake) {
                    if(isChild) {
                        budesonideMultiplier = med.BudesonideMultiplierChild;
                    }
                    else {
                        budesonideMultiplier = med.BudesonideMultiplierAdult;
                    }
                    //console.log(medDailyIntake, medDailyIntake * budesonideMultiplier);
                    medTotal += medDailyIntake * budesonideMultiplier;
                    
                    numberControllers += med.ControllersCount;

                }
            }
        });

        // Compare budsonide 
        const budsonideObject = _getBudesonideObject();

        let medThreshhold = null;
        if (isChild) 
        {
            medThreshhold = budsonideObject.SevereThresholdChild;
        }
        else {
            medThreshhold = budsonideObject.SevereThresholdAdult;
        }

        numberControllers +=  _getNumberAdditionalControllers();
        //console.log('*', medTotal, medThreshhold);
        //console.log('multi num controllers', numberControllers);

        return medTotal > medThreshhold && numberControllers > 1;

    }


    function _isSystemicSteroidSevere() {
        var corticosteroidUsedPreviousYear = $('input[name=corticosteroidUsedPreviousYear]:checked').val();        
        if(corticosteroidUsedPreviousYear && corticosteroidUsedPreviousYear.toUpperCase() === "YES") {
            return true;
        }
        return false;
        //return $('input[name=corticosteroidUsedPreviousYear]:checked').val()?.toUpperCase() === "YES"
    }

    function _isConfirmedAsthma() {
        var diagnosis = $('input[name=diagnosis]:checked').val();        
        if(diagnosis && diagnosis.toUpperCase() === "CONFIRMED") {
            return true;
        }
        return false;
        //return $('input[name=diagnosis]:checked').val()?.toUpperCase() === "CONFIRMED";
    }

    function _getBudesonideObject() {
        return foundSevereMed = _.find(_Medications, function(med) {
            return med.MedicationFieldID  == "pulmicortTurbuhaler";                
        });
    }

    function _getNumberAdditionalControllers() {        
        return $('#additional-controllers input:checkbox:checked').length; 
    }

    function _hasMultiSevereMeds() {        
        return $('.severe-med-checkbox:checked').length > 1
    }

    function _isChild() {
        const encounterDate = $('#encounterDate').val();
        const birthdate = $('#dob').val();

        const dob = new Date(birthdate);
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);

        //extract year from date      
        var year = age_dt.getUTCFullYear();
        
        return year < 12;
    }
//})();