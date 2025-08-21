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
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment
            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "com.training.exer1bernaldo.fragment.ProductDialog"
                });
            }
            this.oDialog.then(function(oDialog){
                oDialog.open();
            });
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

            // Comment out for now
            // let oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if both first name and last name are blank
            if (oInputFnameValue === "" && oInputLnameValue === ""){
               //  MessageBox.error(oBundle.getText("validateNameMsg"));

               oInputFName.setValueState("Error");
               oInputLName.setValueState("Error");
            } else {
               oInputFName.setValueState("None");
               oInputFName.setValueState("None");

                    //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", {
                        firstName: oInputFnameValue
                    });
            } 
        },

        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        }

    });
});