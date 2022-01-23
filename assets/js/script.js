
$(document).ready(function(){

    $("a").click(function(){
        var enlace = this.hash

        $("html, body").animate(
            {
                scrollTop: $(enlace).offset().top
            },
            800
        )
    })

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})