/* ---------------------------
  localstorageへの登録
----------------------------- */



/* ---------------------------
  ページ読み込み時、localstorage取得
----------------------------- */


/* ---------------------------
  plusボタン
----------------------------- */
const li =
'<li>' +
  '<input type="checkbox">' +
  '<textarea></textarea>' +
'</li>';
$("#js-plus").on("click", function(){
  $("#js-list").append(li);
})

/* ---------------------------
  focus時のスタイル変更
----------------------------- */
$("textarea").focusin(function() {
  $(this).parent("li").addClass("is_focus");
});
$("textarea").focusout(function() {
  $(this).parent("li").removeClass("is_focus");
});

/* ---------------------------
  jQuery UI ソート機能実行
----------------------------- */
$(function() {
  $( "#js-list" ).sortable();
});

/* ---------------------------
  ゴミ箱機能
----------------------------- */
$(function() {
  $( "#js-garbage" ).droppable({
    accept: "li",
    drop: function( event, ui ) {
      let delete_item = ui.draggable[0];
      delete_item.remove();
    },
    tolerance: "touch"
  });
});
