if (Meteor.isClient) {

    Session.setDefault('breadcrumbs', ['step1']);

    transitionForm = function(newTemplate, isBacking) {
        $('.container').fadeOut(function () {
            if(isBacking) {
                removeLastCrumb();
            } else {
                addBreadcrumb(newTemplate);
            }
            $('.container').fadeIn();
        });
    }

    function addBreadcrumb(crumb) {
        let bc = Session.get('breadcrumbs');
        if($.inArray(crumb, bc) == -1) {
            bc.push(crumb);
            Session.set('breadcrumbs', bc);
        }
        return bc;
    }

    function removeLastCrumb() {
        let bc = Session.get('breadcrumbs');
        bc.pop();
        Session.set('breadcrumbs', bc);
    }
}
