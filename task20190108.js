//交通費
$(".first_price_box").keyup(function() {
  var total_sum = 0;
  var pattern = $('.first_quantity_box option:selected');
  var optionText = $(".first_price_box")
  var total = $(".first_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum += parseInt(calculated_total_sum);
    $("#sum-box1").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 +get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
$(".first_quantity_box").change(function() {
  var total_sum = 0;
  var pattern = $('.first_quantity_box option:selected');
  var optionText = $(".first_price_box")
  var total = $(".first_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum +=  parseInt(calculated_total_sum);
    $("#sum-box1").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 +get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
//宿泊費
$(".second_price_box").keyup(function() {
  var total_sum = 0;
  var pattern = $('.second_quantity_box option:selected');
  var optionText = $(".second_price_box")
  var total = $(".second_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum += parseInt(calculated_total_sum);
    $("#sum-box2").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 +get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
$(".second_quantity_box").change(function() {
  var total_sum = 0;
  var pattern = $('.second_quantity_box option:selected');
  var optionText = $(".second_price_box")
  var total = $(".second_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum += parseInt(calculated_total_sum);
    $("#sum-box2").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 +get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
//その他
$(".third_price_box").keyup(function() {
  var total_sum = 0;
  var pattern = $('.third_quantity_box option:selected');
  var optionText = $(".third_price_box")
  var total = $(".third_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum += parseInt(calculated_total_sum);
    $("#sum-box3").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 + get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
$(".third_quantity_box").change(function() {
  var total_sum = 0;
  var pattern = $('.third_quantity_box option:selected');
  var optionText = $(".third_price_box")
  var total = $(".third_total_box")
  var length = $(".first_price_box").length;
  for (var i = 0; i < length; i++) {
    var route = pattern[i].value;
    var price = optionText[i].value;
    var total_box = total[i];

    $(total_box).val(price * route)

    var calculated_total_sum = total[i].value;
    total_sum += parseInt(calculated_total_sum);
    $("#sum-box3").val(total_sum);

    var get_total1 =  parseInt($("#sum-box1").val());
    var get_total2 =  parseInt($("#sum-box2").val());
    var get_total3 =  parseInt($("#sum-box3").val());
    var get_grand = get_total1 + get_total2 + get_total3;
    $("#grandTotal").val(get_grand);
  }
});
