$("#pick-bw").slider({
    range: "min",
    animate: true,
    value: 1,
    min: 1,
    max: 100,
    step: 1,
    slide: function(event, ui) {
        update(1, ui.value); //changed
    }
});
$("#pick-size").slider({
    range: "min",
    animate: true,
    value: 2,
    min: 1,
    max: 1024,
    step: 1,
    slide: function(event, ui) {
        update(2, ui.value); //changed
    }
});

//Added, set initial value.
$("#amountBw").val(1);
$("#amount-label-bw").text(0);
$("#amountSize").val(1);
$("#amount-label-size").text(0);

update();


//changed. now with parameter
function update(slider, val) {
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $amountBw = slider == 1 ? val : $("#amountBw").val();
    var $amountSize = slider == 2 ? val : $("#amountSize").val();

    $("#amountBw").val($amountBw);
    $("#amountSize").val($amountSize);


    var costBw = ($amountBw * 204800),
        costSize = ($amountSize * 10000);
    $total = costBw + costSize;

    function formatNumber(v, s) {
        console.log(v)
        if (!v || v < 1) return 0;
        s = '';
        while (v > 0) {
            if ((s.length + 1) % 4 == 0)
                s = '.' + s;
            s = v % 10 + s;
            v = Math.floor(v / 10);
        }
        return s;
    }

    var lb = formatNumber($amountBw) + " TB";
    $("#amount-label-bw").text(formatNumber(costBw) + ' đ');
    //$('#pick-bw a')[0].id = "draggableBw";
    $('#pick-bw a').html('<label><i class="icon fmm-caret-down"></i>' + '<span class="labelSize">' + lb + '</span>');

    var lb1 = formatNumber($amountSize) + " GB";
    $("#amount-label-size").text(formatNumber(costSize) + ' đ');
    $("#total-price").text(formatNumber($total) + ' đ');
    //$('#pick-size a')[0].id = "draggableSize";
    $('#pick-size a').html('<label><i class="icon fmm-caret-down"></i>' + '<span  class="labelSize">' + lb1 + '</span>' + '</label>');
}