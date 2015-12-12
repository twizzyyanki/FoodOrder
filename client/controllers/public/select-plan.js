Template.selectItem.helpers({
    items: function(){
        var getItems = Meteor.settings.public.items;
        if (getItems) {
            return getItems;
        }
    }
});

Template.selectItem.rendered = function(){
    var firstMenuItem = $('.select-item a:first-child');
    firstMenuItem.addClass('active');
    firstMenuItem.find('input').prop("checked", true);
}

Template.selectItem.events({
    'click .list-group-item': function(e){
        var parent = $(e.target).closest('.list-group-item');
        parent.addClass("active");
        $('.list-group-item').not(parent).removeClass("active");
        parent.find('input[type="radio"]').prop("checked", true);
    }
});