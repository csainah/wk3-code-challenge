$function (){
var callback = function(event){
    event.preventDefault ();
    var input =$('input[type=text][name=item'),
    value =input.val(),
    required =($ (event.target).attr('id')==='addRequired')
    item =$('<li><input type="checkbox" name= "item"> ' + value +' ? <a href ="#">remove</a> </li>),
    List=(required)? $('ul').first (): $('ul').last ();
    input.val ("");
    input.focus ();
    if (value==="")return;
    if (!required) {
        item.find ('input').attr('checked',true);
    }
    $ ('#addExist, #addRequired').click(callback);
    $ ('ul').on('click,'li a',fuction(event){
        $(event.target).parent('li').remove();
    });
    $('ul'.on('click','input[type=checkbox]',function(event){
        var listItem =$(event.target).parent('li'),
        list =(event.target.checked) ? $('ul'.last): $ ('ul').first ();
        listItem.appendTo(list)
    }));

}