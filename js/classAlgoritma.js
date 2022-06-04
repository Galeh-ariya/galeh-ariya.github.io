// Hide seuluruh item
$('.close1').on('click', function(){
    $('.list').toggle();
});

// hide peritem
$('.f').hide();

// watch
function hideShow($id, $class) {
    $($id).on('click', function(){
        $($class).toggle();
    });
}

hideShow('#b1', '.b1');
hideShow('#b2', '.b2');
hideShow('#b3', '.b3');
hideShow('#b4', '.b4');
