document.body.style.overflow = "hidden";

        var loader = document.getElementById("preloader");

        window.addEventListener("load", function () {
           loader.style.display = 'none';
            document.body.style.overflow = "auto";

            console.log(document.getElementById("preloader"));
        })