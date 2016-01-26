Template.wizard.helpers({
    currentStep: function () {
        let bc = Session.get('breadcrumbs');
        return bc.pop();
    }
})
