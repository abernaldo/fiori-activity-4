sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], 

/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 * @returns 
 */
(Controller, MessageToast, MessageBox) => {
    "use strict";

    return Controller.extend("com.training.exer1bernaldo.controller.MainView", {
        onInit() {
        },
    
        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");

            this.fnDisplayMsg(sMsg);

        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");

            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            var oCCLabel     = this.getView().byId("idLblCC");
            var oCCInput     = this.getView().byId("idInputCC");

            MessageToast.show(sSelectedKey);

            if (sSelectedKey === "GCash"){
                //show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }
            else if (sSelectedKey === "Credit Card") {
                //show the cc details field            
                oCCLabel.setVisible(true);
                oCCInput.setVisible(true);
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);                    
            }
             else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCCLabel.setVisible(false);
                oCCInput.setVisible(false);
            }
        },

        onPressCheckout: function(){
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFnameValue = oInputFName.getValue();
            var oInputLnameValue = oInputLName.getValue();

            let oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            //Check if both first name and last name are blank
            if (oInputFnameValue === "" && oInputLnameValue === ""){
                 MessageBox.error(oBundle.getText("validateNameMsg"));
            } else {

                 } 
        },

    });
});