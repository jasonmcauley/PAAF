//const API_URL = 'https://asthmalife.ca/eAPI/api/eAPI/AddeAPI'; // Prod Env
const API_URL = 'https://asthmalife.ca/eAPI_Test/api/eAPI/AddeAPI'; // Test Env
//const API_URL = 'http://localhost:65431/api/eAPI/AddeAPI' // Local Env

smokingStatusChange = function () {
    if (document.getElementById("currentSmoker").checked) {
        document.getElementById("isCurrentSmoker").style.display = "inline-block";
        document.getElementById("smoker").style.display = "inline-block";
        document.getElementById("isExSmoker").style.display = "none";

    } else if (document.getElementById("exSmoker").checked) {
        document.getElementById("isExSmoker").style.display = "inline-block"
        document.getElementById("smoker").style.display = "inline-block";
        document.getElementById("isCurrentSmoker").style.display = "none"

    } else {
        document.getElementById("isExSmoker").style.display = "none"
        document.getElementById("smoker").style.display = "none";
        document.getElementById("isCurrentSmoker").style.display = "none"
    }
}

familyPhysicianVisitsChange = function () {
    if (document.getElementById("yesFamilyPhysicianVisits").checked) {
        document.getElementById("yesRoutineCareVisits").style.display = "inline-block";

    } else {
        document.getElementById("yesRoutineCareVisits").style.display = "none";

    }
}

toggleDiagnosisFields = function () {
    if (document.getElementById("diagnosisUnknown").checked) {
        document.getElementById("_dateConfirmedExcluded").style.display = "none";
        document.getElementById("_ageAsthma").style.display = "none";

    } else if (document.getElementById("diagnosisConfirmed").checked) {
        document.getElementById("_dateConfirmedExcluded").style.display = "block";
        document.getElementById("_ageAsthma").style.display = "block";

    } else if (document.getElementById("diagnosisSuspected").checked) {
        document.getElementById("_dateConfirmedExcluded").style.display = "none";
        document.getElementById("_ageAsthma").style.display = "none";

    } else if (document.getElementById("diagnosisExcluded").checked) {
        document.getElementById("_dateConfirmedExcluded").style.display = "block";
        document.getElementById("_ageAsthma").style.display = "none";
    }
}

toggleSection = function (_checkBoxName, _sectionName) {
    if (document.getElementById(_checkBoxName).checked) {
        document.getElementById(_sectionName).style.display = "none";
    } else {
        document.getElementById(_sectionName).style.display = "block";
    }
}

toggleSectionInline = function (_checkBoxName, _sectionName) {
    if (document.getElementById(_checkBoxName).checked) {
        document.getElementById(_sectionName).style.display = "inline-block";
    } else {
        document.getElementById(_sectionName).style.display = "none";
    }
}

top.window.moveTo(0, 0);
if (document.all) {
    top.window.resizeTo(screen.availWidth, screen.availHeight);
}
else if (document.layers || document.getElementById) {
    if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
        top.window.outerHeight = screen.availHeight;
        top.window.outerWidth = 1050;
    }
}


var app = new Vue({
    el: '#app',
    data: {
        //hidden fields for seamless link
        EMR_PatientID: document.getElementById("EMR_PatientID").value,
        ProviderName: document.getElementById("ProviderName").value,
        ProviderIdentifier: document.getElementById("ProviderIdentifier").value,
        PatientGender: document.getElementById("PatientGender").value,
        EMR_eAPIID: document.getElementById("EMR_eAPIID").value,

        showCessationAddressedSection: false,
        dob: document.getElementById("dob").value,
        youngPatient: false,
        ableSpirometry: document.getElementById("ableSpirometry").value,
        // warning banners if follow up assessment 
        //is controlled indicators
        // activityLimited: _activityLimited,
        asthmaControlled: null,
        asthmaControlledBool: null,
        encounterDate: document.getElementById("encounterDate").value,
        confirmedBySpecialist: document.getElementById("confirmedBySpecialist").checked,
        // smoking for pack years calc
        cigarettesDay: document.getElementById("cigarettesDay").value,
        cigarettesMonth: document.getElementById("cigarettesMonth").value,
        yearsSmoked: document.getElementById("yearsSmoked").value,
        packYears: "-",
        // medications
        qvar: document.getElementById("qvar").checked,
        qvarStrength: document.getElementById("qvarStrength").value,
        qvarDose: document.getElementById("qvarDose").value,
        qvarFreq: document.getElementById("qvarFreq").value,
        pulmicortTurbuhaler: document.getElementById("pulmicortTurbuhaler").checked,
        pulmicortTurbuhalerStrength: document.getElementById("pulmicortTurbuhalerStrength").value,
        pulmicortTurbuhalerDose: document.getElementById("pulmicortTurbuhalerDose").value,
        pulmicortTurbuhalerFreq: document.getElementById("pulmicortTurbuhalerFreq").value,
        symbicortTurbuhaler: document.getElementById("symbicortTurbuhaler").checked,
        symbicortTurbuhalerStrength: document.getElementById("symbicortTurbuhalerStrength").value,
        symbicortTurbuhalerDose: document.getElementById("symbicortTurbuhalerDose").value,
        symbicortTurbuhalerFreq: document.getElementById("symbicortTurbuhalerFreq").value,
        alvesco: document.getElementById("alvesco").checked,
        alvescoStrength: document.getElementById("alvescoStrength").value,
        alvescoDose: document.getElementById("alvescoDose").value,
        alvescoFreq: document.getElementById("alvescoFreq").value,
        floventMDI: document.getElementById("floventMDI").checked,
        floventMDIStrength: document.getElementById("floventMDIStrength").value,
        floventMDIDose: document.getElementById("floventMDIDose").value,
        floventMDIFreq: document.getElementById("floventMDIFreq").value,
        floventDiskus: document.getElementById("floventDiskus").checked,
        floventDiskusStrength: document.getElementById("floventDiskusStrength").value,
        floventDiskusDose: document.getElementById("floventDiskusDose").value,
        floventDiskusFreq: document.getElementById("floventDiskusFreq").value,
        advairDiskus: document.getElementById("advairDiskus").checked,
        advairDiskusStrength: document.getElementById("advairDiskusStrength").value,
        advairDiskusDose: document.getElementById("advairDiskusDose").value,
        advairDiskusFreq: document.getElementById("advairDiskusFreq").value,
        advairPMDI: document.getElementById("advairPMDI").checked,
        advairPMDIStrength: document.getElementById("advairPMDIStrength").value,
        advairPMDIDose: document.getElementById("advairPMDIDose").value,
        advairPMDIFreq: document.getElementById("advairPMDIFreq").value,
        wixelaInhub: document.getElementById("wixelaInhub").checked,
        wixelaInhubStrength: document.getElementById("wixelaInhubStrength").value,
        wixelaInhubDose: document.getElementById("wixelaInhubDose").value,
        wixelaInhubFreq: document.getElementById("wixelaInhubFreq").value,
        arnuityEllipta: document.getElementById("arnuityEllipta").checked,
        arnuityElliptaStrength: document.getElementById("arnuityElliptaStrength").value,
        arnuityElliptaFreq: document.getElementById("arnuityElliptaFreq").value,
        arnuityElliptaDose: document.getElementById("arnuityElliptaDose").value,
        breoEllipta: document.getElementById("breoEllipta").checked,
        breoElliptaStrength: document.getElementById("breoElliptaStrength").value,
        breoElliptaFreq: document.getElementById("breoElliptaFreq").value,
        breoElliptaDose: document.getElementById("breoElliptaDose").value,
        trelegyEllipta: document.getElementById("trelegyEllipta").checked,
        trelegyElliptaStrength: document.getElementById("trelegyElliptaStrength").value,
        trelegyElliptaFreq: document.getElementById("trelegyElliptaFreq").value,
        trelegyElliptaDose: document.getElementById("trelegyElliptaDose").value,
        asmanexTwisthaler: document.getElementById("asmanexTwisthaler").checked,
        asmanexTwisthalerStrength: document.getElementById("asmanexTwisthalerStrength").value,
        asmanexTwisthalerFreq: document.getElementById("asmanexTwisthalerFreq").value,
        asmanexTwisthalerDose: document.getElementById("asmanexTwisthalerDose").value,
        zenhaleMDI: document.getElementById("zenhaleMDI").checked,
        zenhaleMDIStrength: document.getElementById("zenhaleMDIStrength").value,
        zenhaleMDIFreq: document.getElementById("zenhaleMDIFreq").value,
        zenhaleMDIDose: document.getElementById("zenhaleMDIDose").value,
        aermonyRespi: document.getElementById("aermonyRespi").checked,
        aermonyRespiStrength: document.getElementById("aermonyRespiStrength").value,
        aermonyRespiDose: document.getElementById("aermonyRespiDose").value,
        aermonyRespiFreq: document.getElementById("aermonyRespiFreq").value,
        atecturaBreezhaler: document.getElementById("atecturaBreezhaler").checked,
        atecturaBreezhalerStrength: document.getElementById("atecturaBreezhalerStrength").value,
        //aermonyRespiDose: document.getElementById("aermonyRespiDose").value,
        atecturaBreezhalerFreq: document.getElementById("atecturaBreezhalerFreq").value,
        enerzairBreehaler: document.getElementById("enerzairBreehaler").checked,
        enerzairBreehalerStrength: document.getElementById("enerzairBreehalerStrength").value,
        //enerzairBreehalerDose: document.getElementById("enerzairBreehalerDose").value,
        enerzairBreehalerFreq: document.getElementById("enerzairBreehalerFreq").value,
        showFollowUpBanner: false,
        showFirstBanner: true
    },
    watch: {
        // whenever question changes, this function will run
        dob: function (newDob) {
            calcAge(newDob)
        },
        qvar: function (v) {            
            if (!v) {
                app.qvarStrength = "";
                app.qvarDose = "";
                app.qvarFreq = "";
            }
        },
        pulmicortTurbuhaler: function (v) {
            if (!v) {
                app.pulmicortTurbuhalerStrength = "";
                app.pulmicortTurbuhalerDose = "";
                app.pulmicortTurbuhalerFreq = "";
            }
        },
        symbicortTurbuhaler: function (v) {
            if (!v) {
                app.symbicortTurbuhalerStrength = "";
                app.symbicortTurbuhalerDose = "";
                app.symbicortTurbuhalerFreq = "";
            }
        },
        alvesco: function (v) {
            if (!v) {
                app.alvescoStrength = "";
                app.alvescoDose = "";
                app.alvescoFreq = "";
            }
        },
        floventMDI: function (v) {
            if (!v) {
                app.floventMDIStrength = "";
                app.floventMDIDose = "";
                app.floventMDIFreq = "";
            }
        },
        floventDiskus: function (v) {
            if (!v) {
                app.floventDiskusStrength = "";
                app.floventDiskusDose = "";
                app.floventDiskusFreq = "";
            }
        },
        advairDiskus: function (v) {
            if (!v) {
                app.advairDiskusStrength = "";
                app.advairDiskusDose = "";
                app.advairDiskusFreq = "";
            }
        },
        advairPMDI: function (v) {
            if (!v) {
                app.advairPMDIStrength = "";
                app.advairPMDIDose = "";
                app.advairPMDIFreq = "";
            }
        },
        wixelaInhub: function (v) {
            if (!v) {
                app.wixelaInhubStrength = "";
                app.wixelaInhubDose = "";
                app.wixelaInhubFreq = "";
            }
        },
        arnuityEllipta: function (v) {
            if (!v) {
                app.arnuityElliptaStrength = "";
                app.arnuityElliptaFreq = "";
                app.arnuityElliptaDose = "";
            }
        },
        breoEllipta: function (v) {
            if (!v) {
                app.breoElliptaStrength = "";
                app.breoElliptaFreq = "";
                app.breoElliptaDose = "";
            }
        },
        trelegyEllipta: function (v) {
            if (!v) {
                app.trelegyElliptaStrength = "";
                app.trelegyElliptaFreq = "";
                app.trelegyElliptaDose = "";
            }
        },
        asmanexTwisthaler: function (v) {
            if (!v) {
                app.asmanexTwisthalerStrength = "";
                app.asmanexTwisthalerFreq = "";
                app.asmanexTwisthalerDose = "";
            }
        },
        zenhaleMDI: function (v) {
            if (!v) {
                app.zenhaleMDIStrength = "";
                app.zenhaleMDIFreq = "";
                app.zenhaleMDIDose = "";
            }
        },
        atecturaBreezhaler: function (v) {
            if (!v) {
                app.atecturaBreezhalerStrength = "";
                app.atecturaBreezhalerFreq = "";
                //app.atecturaBreezhalerDose = "";
            }
        },
        aermonyRespi: function (v) {
            if (!v) {
                app.aermonyRespiStrength = "";
                app.aermonyRespiFreq = "";
                app.aermonyRespiDose = "";
            }
        },
        enerzairBreehaler: function (v) {
            if (!v) {
                app.enerzairBreehalerStrength = "";
                app.enerzairBreehalerFreq = "";
                //app.enerzairBreehalerDose = "";
            }
        }
    }
});

let _checkboxList = document.querySelectorAll("input[type='checkbox']");
_checkboxList = [].slice.call(_checkboxList);
//value pulled from oscar but need to loop through to check the boxes
_checkboxList.forEach(function (element) {
    if (element.value == "true") {
        element.checked = true;
    }
});

// if follow up assessment
if (app.EMR_eAPIID) {
    app.showFirstBanner = false;
    app.showFollowUpBanner = true;
}

//overwrite visit id even if previously assessed
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
app.EMR_eAPIID = uuidv4();


beforeSubmit = function () {
    
    _checkboxList.forEach(function (element) {
        if (element.checked) {
            element.value = "true";
        }
    });

    var asthmaLifePayload = {
        "EMR_PatientID": app.EMR_PatientID,
        "ProviderName": app.ProviderName,
        "ProviderEMRIdentifier": app.ProviderIdentifier, // "Oscar User No"
        "PatientDOB": (app.dob ? new Date(app.dob) : null),
        "PatientGender": (app.PatientGender == "M" || "F" ? app.PatientGender : "U"), //set to "U" if not "M" or "F"
        //"API_ID": EMR INSTANCE
        "EMR_eAPIID": app.EMR_eAPIID,        
        "VisitDate": (app.encounterDate ? new Date(app.encounterDate) : null),
        "Dx_Confirmed_by_PFTs": (document.getElementById("diagnosisConfirmed").checked ? true : false),
        "Monitored_Spirometry_Last12mos": document.getElementById("Monitored_Spirometry_Last12mos").checked,
        "isUsing_Inhaled_ICS": document.getElementById("isUsing_Inhaled_ICS").checked,
        "selfReported_ICS_last12mos": parseInt(document.getElementById("selfReported_ICS_last12mos").value),
        "selfReported_B2_last4wks": parseInt(document.getElementById("needReliever").value),
        "SelfReported_b2free_last4wks": parseInt(document.getElementById("SelfReported_b2free_last4wks").value),
        "Demonstrated_Correct_Technique": document.getElementById("Demonstrated_Correct_Technique").checked,
        // "Asthma_SmptomControlAx_Last6mos": Defaulted on server
        "Asthma_wellControlled_last4wks": app.asthmaControlledBool,
        "Symptom_Free_Days_Last4wks": 7 - parseInt(document.getElementById("daytimeSymptoms").value),
        "Absences_SchoolWork_Last12mos": parseInt(document.getElementById("Absences_SchoolWork_Last12mos").value),
        "Patient_MoreThanOne_Exacerbation_Last12mos": (~~parseInt(document.getElementById("asthmaExacerbationLastYear").value) > 1 ? true : false),  
        "Number_EDVisits_Last12mos": parseInt(document.getElementById("Number_EDVisits_Last12mos").value),
        "Number_UrgentCareVisits_Last12mos": parseInt(document.getElementById("hospitalizedLastYear").value),
        "Number_PrimaryCareVisits_Last12mos": ~~parseInt(document.getElementById("routinePrimaryVisits").value) + ~~parseInt(document.getElementById("urgentPrimaryVisits").value),
        // "hasRoutineHCP": Always yes
        "hasReceivedWrittenActionPlan": (document.getElementById("writtenPlanProvidedYes").checked || document.getElementById("writtenPlanRevisedYes").checked || document.getElementById("reviewedNotChangedYes").checked ? true : false),
        "ReferredToCAE": document.getElementById("ReferredToCAE").checked,
        "NonSmoker": !document.getElementById("currentSmoker").checked,
        "Smoking_Advised": (document.getElementById("cessationAskYes").checked || document.getElementById("cessationAdviseYes").checked || document.getElementById("cessationArrangeYes").checked ? true : false),
        "IsSevere" : document.getElementById("IsSevere").value
    }

    //console.log(JSON.stringify(asthmaLifePayload));

    $("#initialSubmitButton").val("Saving...");
    $("#initialSubmitButton").prop('disabled', true);

    $.ajax({
        type: 'POST',
        url: API_URL,
        data: JSON.stringify(asthmaLifePayload),
        success: function() {                    
            $("#initialSubmitButton").val("Save & Close");
            $("#initialSubmitButton").prop('disabled', false);
            $("#PAAF").submit();                    
        },                
        error: function() {
            $("#initialSubmitButton").val("Save & Close");
            $("#initialSubmitButton").prop('disabled', false);
            $("#PAAF").submit();
        },
        fail: function() {                    
            $("#initialSubmitButton").val("Save & Close");
            $("#initialSubmitButton").prop('disabled', false);
            $("#PAAF").submit();
        },
        contentType: "application/json",
        dataType: 'JSON'
        });

       
}



resetEncounterDate = function () {
    var d = new Date();
    app.encounterDate = (d.getFullYear() + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0" + d.getDate()).slice(-2));
    
}

// check if new form based on existing encounter date data
if (!app.encounterDate) {
    resetEncounterDate();
}

calcAge = function (_dob) {
    var dob = new Date(_dob);

    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user  
    var age = Math.abs(year - 1970);

    if (age > 5) {
        app.youngPatient = false;
        app.ableSpirometry = true;
    } else {
        app.youngPatient = true;
        app.ableSpirometry = false;
    }
}

calcSmokingYears = function () {
    // use cigarettes per day before using cigs per month to calc 
    if (app.cigarettesDay && app.yearsSmoked) {
        var _cigDay = parseInt(app.cigarettesDay);
        var _yearsSmoked = parseInt(app.yearsSmoked);
        if (typeof _cigDay == 'number' && typeof _yearsSmoked == 'number') {
            app.packYears = (_cigDay * _yearsSmoked) / 20;
        } else {
            app.packYears = "-";
        }
    } else if (app.cigarettesMonth && app.yearsSmoked) {
        var _cigMonth = parseInt(app.cigarettesMonth);
        var _yearsSmoked = parseInt(app.yearsSmoked);
        if (typeof _cigMonth == 'number' && typeof _yearsSmoked == 'number') {
            app.packYears = ((_cigMonth / 30) * _yearsSmoked) / 20;
        } else {
            app.packYears = "-";
        }
    } else {
        app.packYears = "-";
    }
}

calcIsControlled = function () {  
    let exacerbationsSinceLast;
    let FEVPersonalBest;
    let PEVDiurnalVariation; 

    
    if($('input[name=exacerbationsSinceLast]:checked').val())
    {
        exacerbationsSinceLast = $('input[name=exacerbationsSinceLast]:checked').val().toUpperCase();
    }

    if($('input[name=FEVPersonalBest]:checked').val())
    {
        FEVPersonalBest = $('input[name=FEVPersonalBest]:checked').val().toUpperCase();
    }

    if($('input[name=PEVDiurnalVariation]:checked').val())
    {
        PEVDiurnalVariation = $('input[name=PEVDiurnalVariation]:checked').val().toUpperCase();
    }

    if (document.getElementById('activityIsLimited').checked ||
        parseInt(document.getElementById('needReliever').value) >= 3 ||
        parseInt(document.getElementById("daytimeSymptoms").value) >= 3 ||        
        document.getElementById("WorkSchoolAbsences").checked ||
        parseInt(document.getElementById("nighttimeSymptoms").value) > 0 ||      
        exacerbationsSinceLast == 'YES' ||
        FEVPersonalBest == 'NO' ||
        PEVDiurnalVariation == 'NO' ||
        // $('input[name=exacerbationsSinceLast]:checked').val()?.toUpperCase() == 'YES' ||
        // $('input[name=FEVPersonalBest]:checked').val()?.toUpperCase() == 'NO' ||
        // $('input[name=PEVDiurnalVariation]:checked').val()?.toUpperCase() == 'NO' ||
        parseInt(document.getElementById("sputumEosinophilsControl").value) >= 4) {
        app.asthmaControlled = "NO";
        app.asthmaControlledBool = false;
        document.getElementById("hdnAsthmaControlled").value = false;
        document.getElementById('asthmaControlledSpan').style.color = "red";
    } else if (document.getElementById('activityNotLimited').checked &&
        parseInt(document.getElementById('needReliever').value) <= 2 &&
        parseInt(document.getElementById("daytimeSymptoms").value) <= 2 &&
        document.getElementById("noWorkSchoolAbsences").checked &&        
        parseInt(document.getElementById("nighttimeSymptoms").value) < 1 &&
        parseInt(document.getElementById("sputumEosinophilsControl").value) < 4 &&  
        exacerbationsSinceLast == 'NO' ||
        FEVPersonalBest == 'YES' ||
        PEVDiurnalVariation == 'YES' ||  
        // $('input[name=exacerbationsSinceLast]:checked').val()?.toUpperCase() == 'NO' &&
        // $('input[name=FEVPersonalBest]:checked').val()?.toUpperCase() == 'YES' &&
        // $('input[name=PEVDiurnalVariation]:checked').val()?.toUpperCase() == 'YES' &&
        document.getElementById("noExacerbationsSinceLast").checked) {
        app.asthmaControlled = "Yes";
        app.asthmaControlledBool = true;
        document.getElementById("hdnAsthmaControlled").value = true;
        document.getElementById('asthmaControlledSpan').style.color = "black";
    } else {
        app.asthmaControlled = "-";
        app.asthmaControlledBool = null;
        document.getElementById("hdnAsthmaControlled").value = ''
        document.getElementById('asthmaControlledSpan').style.color = "black";
    }
    
}
resetConditionalSections = function () {
    smokingStatusChange();
    calcIsControlled();
    familyPhysicianVisitsChange();
    toggleDiagnosisFields();
    toggleSection('asthma-diagnosis-na', 'asthma-diagnosis-content');
    toggleSection('lungDisease','lungDiseaseContent');
    toggleSection('smokingNA', 'smokingContent');
    toggleSection('asthmaSeverityNA', 'severityContent');
    toggleSection('occupationalNA', 'occupationalContent');
    toggleSection('medicationNA', 'medicationContent');
    toggleSection('controlNA', 'controlContent');
    toggleSection('careNA', 'careContent');
    toggleSection('actionPlanNA', 'actionPlanContent');
    toggleSection('controlZoneNA', 'controlZoneContent');
    toggleSection('pulmonaryNA', 'pulmonaryContent');
    toggleSection('assessmentToolsNA', 'assessmentToolsContent');
    toggleSectionInline('otherEmployment','otherDutiesSpecify');
}

function startFollowUpAssessment() { 
    // Don't clear: asthma-diagnosis-content, lungDiseaseContent, smokingContent, occupational-section, medication-section
    resetEncounterDate();
    clearDivInputFields("severity-section");
    clearDivInputFields("asthma-control-section");
    clearDivInputFields("care-management-section");
    clearDivInputFields("asthma-action-plan-section");
    clearDivInputFields("asthma-control-zone-section");
    clearDivInputFields("assessment-tools-section");
    $(".asthma-diagnosis-na").checked(false);
    $(".lungDiseaseNA").checked(false);
    $(".smokingNA").checked(false);
    $(".asthmaSeverityNA").checked(false);
    $(".occupationalNA").checked(false);
    $(".medicationNA").checked(false);
    $(".controlNA").checked(false);
    $(".careNA").checked(false);
    $(".actionPlanNA").checked(false);
    $(".controlZoneNA").checked(false);
    $(".pulmonaryNA").checked(false);
    $(".assessmentToolsNA").checked(false);
    resetConditionalSections();
}

function clearDivInputFields(div) {
    $("#" + div + " :input").each(function() {
        if (this.type == "radio" || this.type == "checkbox") {
            this.checked = false;
        } else {
            this.value = "";
        }
    });
}

calcAge(app.dob);
calcIsControlled();
resetConditionalSections();
calcIsControlled();
calcSmokingYears();