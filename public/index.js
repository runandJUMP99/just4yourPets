function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

$(".backdrop").on("click", function() {
    $(".mobile-nav").removeClass("open");
    closeModal();
});


$("toggle-button").on("click", function() {
    $(".backdrop").style.display = "block";
    setTimeout(function() {
        $(".backdrop").addClass('open');
    }, 10);
    $(".mobile-nav").addClass("open");
});

ctaButton.addEventListener("animationstart", function() {
    console.log("Animation Started", event);
});

ctaButton.addEventListener("animationend", function() {
    console.log("Animation Ended", event);
});

ctaButton.addEventListener("animationiteration", function() {
    console.log("Animation Iteration", event);
});