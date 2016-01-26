# meteor-wizard tutorial
This is an example of how to make and manage a wizard in Meteor.

In order for this to work, you need to have a container template which renders the individual cards using **Template.dynamic**.

**Template.dynamic** can accept a helper's returned value, which in our case is the last item in a list of "breadcrumbs". Whenever we update the breadcrumbs session variable using the functions **addBreadcrumb** and **removeLastCrumb**, the helper will run again and return the current wizard template to render.
