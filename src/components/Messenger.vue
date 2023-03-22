<template>
    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "101326096255818");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: "v16.0",
    });
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
</script>

<style lang="scss" scoped></style>
