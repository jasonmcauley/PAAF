//(function() {

    const _Medications = [{"MedicationID":1,"MedicationName":"Beclomethasone Dipropionate","IsSevere":true,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6},{"MedicationID":2,"MedicationName":"Ciclesonide","IsSevere":true,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":2},{"MedicationID":3,"MedicationName":"Fluticasone Propionate","IsSevere":true,"BudesonideMultiplierChild":2,"BudesonideMultiplierAdult":1.6},{"MedicationID":4,"MedicationName":"Fluticasone Furoate","IsSevere":true,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":4},{"MedicationID":5,"MedicationName":"Mometasone Furoate","IsSevere":true,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2},{"MedicationID":6,"MedicationName":"Budesonide","IsSevere":true,"BudesonideMultiplierChild":4,"BudesonideMultiplierAdult":2},{"MedicationID":7,"MedicationName":"Non Severe Med","IsSevere":false,"BudesonideMultiplierChild":null,"BudesonideMultiplierAdult":null}];
    const _isAdult = true;

    // Used as baseline multi-ICS med scenarios
    const BUDESONIDE_ID = 6;

    $(document).ready(function(){
        $('#btnRunAlgo').click(function(){            
            _MedicationSevere()            
        });

        //_PopulateSelectboxes()
        _BindAlgorithmTriggerEvents();

    })
    
    /* ****************** */
    /* Medication Methods */
    /* ****************** */
    function _CalculateDailyIntakeByMedName(medName) {
        const medStrength = $('#' + medName + 'Strength').val();
        const medDose = $('#' + medName + 'Dose').val();
        const medFrequency = $('#' + medName + 'Freq').val();

        const dailyIntakeTotal = medStrength * medDose * medFrequency;
        
        console.log(medStrength, medDose, medFrequency);
        console.log(dailyIntakeTotal);
        return dailyIntakeTotal;
    }

    function _MedicationSevere() {
        //_CalculateDailyIntake()
        let isSevereMed = false;
        const foundSevereMeds = _hasMultiSevereMeds();

        if(foundSevereMeds.length > 1) {
            const totalMultiMed = _calculateTotalIntakeMulti()            
            //_isMedicationSevere()
        } 
        else {
            const totalSingleMed = _CalculateDailyIntakeByMedBlockIndex(foundSevereMeds.MedBlockIndex)
        }

    }

    function _hasMultiSevereMeds() {
        let arrFoundSevere = [];
        let severeMed = {};
        let medBlockIndex = 1;
        $('.MedSelect').each(function(medSelect){         
            _this = this;   
            const foundSevereMed = _.find(_Medications, function(med){   
                return med.MedicationID == _this.value;                
            });

            if (foundSevereMed.IsSevere) {
                severeMed.MedBlockIndex = medBlockIndex
                severeMed.SevereMedication = foundSevereMed
                arrFoundSevere.push(severeMed)
            }

            medBlockIndex++;
        });

        //return arrFoundSevere.length > 1
        return arrFoundSevere;
    }

    function _calculateTotalIntakeMulti() {
        let budesonideTotal = 0;
        let i = 1;        
        // Iterate over each med select box to determine what med was selected
        $('.MedBlock').each(function(){        
            // Get the ID of the selected med
            const MedFieldValue = $('#Med' + i).val();

            //Retrieve med object based on the selected med
            const med = _getMedBySelectedMedicationID(MedFieldValue);

            //Only need to run calculation on meds that are ICS (Identified as being apart of the algorithm)
            if (med.IsSevere) {
                const MedStrength = $('#MedStrength' + i).val();
                const MedDose = $('#MedDose' + i).val() | 1; // Default 1 if null
                const MedFreq = $('#MedFreq' + i).val() | 1; // Default 1 if null
                let budesonideMultiplier;
                
                // Adults vs children have different severe thresholds
                if(_isAdult) {
                    budesonideMultiplier = med.BudesonideMultiplierAdult;
                }
                else {
                    budesonideMultiplier = med.BudesonideMultiplierChild;
                }
                
                budesonideTotal += (MedStrength * MedDose * MedFreq) * budesonideMultiplier;                
            }
            i++;
        });

        console.log(budesonideTotal);
        return budesonideTotal;
    }


    function _getMedBySelectedMedicationID(selectedMedId) {
        return foundSevereMed = _.find(_Medications, function(med){   
            return med.MedicationID == selectedMedId;                
        });
    }

    function _BindAlgorithmTriggerEvents(){
        
        console.log($("#qvar").prop('style'));

        // $("[data-severe]").each(function(elem){
        //     console.log(elem);
        // });

        $('[data-severe]').click(function(elem){
            console.log(elem);
        });

    }


    function TriggerAlgorithm() {
        _CalculateDailyIntakeByMedName('qvar');
    }

//})();