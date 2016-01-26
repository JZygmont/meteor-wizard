Template.step2.events({
    'click .next' : function () {
        transitionForm('step3', false);
    },
    'click .back' : function () {
        transitionForm('step1', true);
    }
});
