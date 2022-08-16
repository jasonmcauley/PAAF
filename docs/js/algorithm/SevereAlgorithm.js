
//(function() {
    // Need to pull these 
    const _Medications = [{"MedicationFieldID":"qvar","MedicationName":"QVAR (Beclomethasone dipropionate HFA)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"pulmicortTurbuhaler","MedicationName":"Pulmicort Turbuhaler (Budesonide)","IsSevere":true,"SevereThresholdAdult":800,"SevereThresholdChild":800,"BudesonideMultiplierChild":1,"BudesonideMultiplierAdult":1,"ControllersCount":1},{"MedicationFieldID":"symbicortTurbuhaler","MedicationName":"Symbicort Turbuhaler (Budesonide/formoterol)","IsSevere":true,"SevereThresholdAdult":800,"SevereThresholdChild":800,"BudesonideMultiplierChild":1,"BudesonideMultiplierAdult":1,"ControllersCount":2},{"MedicationFieldID":"alvesco","MedicationName":"Alvesco (Ciclesonide)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":2,"ControllersCount":1},{"MedicationFieldID":"floventMDI","MedicationName":"Flovent MDI and spacer (Fluticasone propionate)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"floventDiskus","MedicationName":"Flovent Diskus (Fluticasone propionate)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"advairDiskus","MedicationName":"Advair Diskus (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"advairPMDI","MedicationName":"Advair pMDI (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"wixelaInhub","MedicationName":"Wixela Inhub (Fluticasone/salmeterol)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":2},{"MedicationFieldID":"arnuityEllipta","MedicationName":"Arnuity Ellipta (Fluticasone furoate)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":1},{"MedicationFieldID":"breoEllipta","MedicationName":"Breo Ellipta (Fluticasone/vilanterol Ellipta)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":2},{"MedicationFieldID":"trelegyEllipta","MedicationName":"Trelegy Ellipta (Fluticasone/vilanterol/umeclidinium)","IsSevere":true,"SevereThresholdAdult":199,"SevereThresholdChild":null,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4,"ControllersCount":3},{"MedicationFieldID":"asmanexTwisthaler","MedicationName":"Asmanex Twisthaler (Mometasone furoate)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":1},{"MedicationFieldID":"zenhaleMDI","MedicationName":"Zenhale MDI (Mometasone/formoterol)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":2},{"MedicationFieldID":"aermonyRespi","MedicationName":"Aermony RespiClick (Fluticasone Propionate)","IsSevere":true,"SevereThresholdAdult":500,"SevereThresholdChild":400,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6,"ControllersCount":1},{"MedicationFieldID":"atecturaBreezhaler","MedicationName":"Atectura Breezhaler (Indacaterol/mometasone furoate)","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":1},{"MedicationFieldID":"enerzairBreehaler","MedicationName":"Enerzair Breehaler ()","IsSevere":true,"SevereThresholdAdult":400,"SevereThresholdChild":399,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2,"ControllersCount":1}];
    const _DecisionSupport = JSON.parse('[{"PromptId":1,"DiagnosisStatus":["CONFIRMED"],"HighDoseICS":true,"SystemicSteroidPreviousYear":false,"AsthmaControlled":false,"IsSevere":true,"ShowSpecialistSection":true,"Prompt":{"Adult":"Assess and address reasons for poor control. If patient remains uncontrolled refer to a specialist.","Child":"Assess and address reasons for poor control. If patient remains uncontrolled refer to a specialist."}},{"PromptId":2,"DiagnosisStatus":["CONFIRMED"],"HighDoseICS":false,"SystemicSteroidPreviousYear":false,"AsthmaControlled":false,"IsSevere":false,"ShowSpecialistSection":true,"Prompt":{"Adult":"Assess and address reasons for poor asthma control, if patient remains uncontrolled optimize medications or consider referral to a specialist","Child":"Assess and address reasons for poor asthma control, if patient remains uncontrolled optimize medications or consider referral to a specialist"}},{"PromptId":3,"DiagnosisStatus":["CONFIRMED"],"HighDoseICS":true,"SystemicSteroidPreviousYear":false,"AsthmaControlled":true,"IsSevere":false,"ShowSpecialistSection":true,"Prompt":{"Adult":"Asthma is controlled consider tapering to medium dose ICS medication and reassess asthma control.","Child":"Asthma is controlled consider tapering to medium dose ICS medication and refer to a specialist."}},{"PromptId":4,"DiagnosisStatus":["CONFIRMED"],"HighDoseICS":null,"SystemicSteroidPreviousYear":true,"AsthmaControlled":true,"IsSevere":true,"ShowSpecialistSection":true,"Prompt":{"Adult":"Patient is on systemic steroids for 50% of the previous year to maintain asthma control, consider a referral to a specialist.","Child":"Patient is on systemic steroids for 50% of the previous year to maintain asthma control, consider a referral to a specialist."}},{"PromptId":5,"DiagnosisStatus":["CONFIRMED"],"HighDoseICS":null,"SystemicSteroidPreviousYear":true,"AsthmaControlled":false,"IsSevere":true,"ShowSpecialistSection":true,"Prompt":{"Adult":"Patient meets criteria for severe asthma consider a referral to a specialist.","Child":"Patient meets criteria for severe asthma consider a referral to a specialist."}},{"PromptId":6,"DiagnosisStatus":["SUSPECTED","UNKNOWN"],"HighDoseICS":true,"SystemicSteroidPreviousYear":true,"AsthmaControlled":false,"IsSevere":false,"ShowSpecialistSection":true,"Prompt":{"Adult":"Attempt to confirm asthma diagnosis by objective measures, if unable to confirm diagnosis consider a referral to a specialist.","Child":"Attempt to confirm asthma diagnosis by objective measures, if unable to confirm diagnosis consider a referral to a specialist."}}]');
    //const _Medications = null;
    
    const _isAdult = true;

    //$(document).ready(function(){        
        // $.ajax({
        //     url: 'MedData.json',
        //     dataType: 'json',
        //     async: false,
        //     success: function(data) {
        //         console.log(data);
        //         _Medications = data;
        //     }
        // });
        
        
        /* ***********************************************************************/
        // Comment out two function calls below to disable algorithm from running//
        /* ***********************************************************************/
        _BindAlgorithmTriggerEvents();

        // Tigger on initial load
        TriggerAlgorithm();

        _specialistSectionInit();

        $("#severe-asthma-header").show();
        //$(".paaf").css('margin-top', '80px');

        

    //});


   

    function TriggerAlgorithm() {        
        let objPrompt = _getPromptObject();
        _setPrompt(objPrompt);
    }

    function _getPromptObject() {
        return _.find(_DecisionSupport, function(s) {            
            if(_getDiagnosisType() === 'CONFIRMED') {                
                return s.DiagnosisStatus.indexOf(_getDiagnosisType()) != -1 && 
                       s.AsthmaControlled == _isAsthmaControlled() && 
                       (s.HighDoseICS == _medSevere() || s.HighDoseICS == null) && 
                       s.SystemicSteroidPreviousYear == _isSystemicSteroidSevere();
            }
            else {
                // Unconfirmed diagnosis types will display prompt if any of the three primary categories are problem
                return  s.DiagnosisStatus.indexOf(_getDiagnosisType()) != -1 &&                          
                        (s.AsthmaControlled == _isAsthmaControlled() || s.HighDoseICS == _medSevere() || s.SystemicSteroidPreviousYear == _isSystemicSteroidSevere());
            }

        })
    }

    function _setPrompt(objPrompt){
        if(objPrompt) {
            let promptText = '';  
            if (_isChild()) {
                promptText = objPrompt.Prompt.Child;
            }
            else {
                promptText = objPrompt.Prompt.Adult;
            }

            // Determine if prompt requires user to enter specialist seen reason
            _showSpecialistSeenSection(objPrompt.ShowSpecialistSection);

            $("#severe-asthma-prompt").show(); 
            $("#severe-asthma-prompt").html(promptText);

            if(!$("#severe-asthma-prompt").data("prompt-section-open")) {                
                $(".paaf").css('margin-top', (parseInt(($(".paaf").css('margin-top')) + 'px', 10) + 20) + 'px');    
            }
            
            $("#severe-asthma-prompt").data("prompt-section-open", true);

            // Set field values for saving into OSCAR
            $("#IsSevere").val(objPrompt.IsSevere); 
            $("#PromptId").val(objPrompt.PromptId);
            $("#PromptText").val(promptText);
        }
        else {
            $("#severe-asthma-prompt").hide(); 
            $("#severe-asthma-prompt").html('');
            $("#PromptId").val('');
            $("#PromptText").val('');

            if($("#severe-asthma-prompt").data("prompt-section-open")) { 
                $(".paaf").css('margin-top', (parseInt(($(".paaf").css('margin-top')) + 'px', 10) - 20) + 'px');
            }
            
            $("#severe-asthma-prompt").data("prompt-section-open", false);

        }
    }
    
    function _isAsthmaControlled() {        
        let isControlled;
        if ($('#hdnAsthmaControlled').val().length > 0){
            isControlled = ($('#hdnAsthmaControlled').val() === 'true');
        }
        else {
            isControlled = null;
        }        

        // Even though these are outside the asthma control section of the form, they still affect the asthma control portion of the algorithm
        if( parseInt($("#controlTestScore").val()) < 20 || 
            parseFloat($("#controlScore").val()) > 1.5 ||
            parseInt($("#childScore").val()) < 20 || 
            parseInt($("#numSystemicSteroidLastYear").val()) > 1 || 
            parseInt($("#hospitalizedLastYear").val()) > 0 || 
            parseInt($("#nearFatalEpisodeLastYear").val()) > 0 || 
            $('input[name=persistentAirflowObstruction]:checked').val() == 'yes' ||
            $('input[name=icuAdmissions]:checked').val() == 'yes')
        {
            isControlled = false;
        }

        return isControlled;        
    }


    function _specialistSectionInit() {              
        if($("#SeenSpecialistReason").val() != -1){
            _showSpecialistSeenSection(true);
        }
        else {
            _showSpecialistSeenSection(false);
        }
    }

    function _showSpecialistSeenSection(showSection){
        const sectionPreloaded = false;
        //console.log(showSection, $("#SeenSpecialistSection").val());

        if(showSection && !sectionPreloaded){            
            $("#SeenSpecialistSection").show();
            $("#SeenSpecialistReason").show();
            
            if(!$("#SeenSpecialistSection").data("seenspecialist-section-open")) {
                $(".paaf").css('margin-top', (parseInt(($(".paaf").css('margin-top')) + 'px', 10) + 22) + 'px');
            }
            
            $("#SeenSpecialistSection").data("seenspecialist-section-open", true);

        }
        else {                        
            //console.log('clearing value');
            $("#SeenSpecialistSection").hide();            
            $("#SeenSpecialistReason").hide();
            $("#SeenSpecialistReason").val(-1);

            if($("#SeenSpecialistSection").data("seenspecialist-section-open")) {
                $(".paaf").css('margin-top', (parseInt(($(".paaf").css('margin-top')) + 'px', 10) - 22) + 'px');
            }

            $("#SeenSpecialistSection").data("seenspecialist-section-open", false);
            
        }

        ShowSpecialistSeenDate();
    }

    function ShowSpecialistSeenDate() {
        if ($("#SeenSpecialistReason").val() == 2) {
            $("#specialist-seen-date").show();
        }
        else{
            //$("#SpecialistSeenYear").val("");
            $("#specialist-seen-date").hide();
        }
    }

    /* ********************************* */
    /*  MED METHODS                      */
    /* ********************************* */
    function _medSevere() {        
        const multiSevereMed = _hasMultiSevereMeds();
        let medSevere = null;

        if (multiSevereMed) {
            medSevere = _isMultiMedSevere();
        } 
        else {            
            medSevere = _isSingleMedSevere();
        }

        return medSevere;
    }


    function _CalculateDailyIntakeByMedName(medName) {
        let dailyIntakeTotal = null;
        const medStrength = $('#' + medName + 'Strength').val();
        const medDose = $('#' + medName + 'Dose').val() || 1;
        const medFreq = $('#' + medName + 'Freq').val();

        if (medStrength && medDose && medFreq) {
            dailyIntakeTotal = medStrength * medDose * medFreq;                    
        }

        return dailyIntakeTotal;
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
                    // Multiplifer differs depending on adult or child
                    if(isChild) {
                        budesonideMultiplier = med.BudesonideMultiplierChild;
                    }
                    else {
                        budesonideMultiplier = med.BudesonideMultiplierAdult;
                    }
                    
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


        

        return medTotal > medThreshhold && numberControllers > 1;

    }


    function _isSystemicSteroidSevere() {
        var corticosteroidUsedPreviousYear = $('input[name=corticosteroidUsedPreviousYear]:checked').val();        
        if(corticosteroidUsedPreviousYear && corticosteroidUsedPreviousYear.toUpperCase() === "YES") {
            return true;
        }
        return false;        
    }

    function _getDiagnosisType() {
        var diagnosis = $('input[name=diagnosis]:checked').val();           
        if(diagnosis) {
            return diagnosis.toUpperCase();
        }
        return null;
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
        const encounterDateString = $('#encounterDate').val();
        const birthdate = $('#dob').val();
        const dob = new Date(birthdate);
        const encounterDate = new Date(encounterDateString);        
        const diffYears = encounterDate.getFullYear() - dob.getFullYear();
        
        return diffYears < 12;
    }

    function _BindAlgorithmTriggerEvents() {


        setTimeout(function(){
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

            $("#controlContent input").each(function(index){
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

            $('input[name=asthmaControlTestScore]').blur(function(){
                TriggerAlgorithm();
            });

            $('#asthmaControlQuestionnaireScore').blur(function(){
                TriggerAlgorithm();
            });

            console.log($('input[name=childAsthmaControlTestScore]').attr('id'));
            $('input[name=childAsthmaControlTestScore]').blur(function(){                
                TriggerAlgorithm();
            });

            $('input[name=persistentAirflowObstruction]').click(function(){
                TriggerAlgorithm();
            });

            $('input[name=numSystemicSteroidLastYear]').blur(function(){
                TriggerAlgorithm();
            });

            $('input[name=hospitalizedLastYear]').blur(function(){
                TriggerAlgorithm();
            });
            
            $('input[name=nearFatalEpisodeLastYear]').blur(function(){
                TriggerAlgorithm();
            });

            $('input[name=icuAdmissions]').click(function(){
                TriggerAlgorithm();
            });

            $('#dob').blur(function(){
                TriggerAlgorithm();
            });
        }, 750);

    }

    


//})();