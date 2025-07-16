
document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(MotionPathPlugin);

    const buttons = [  /* кпопки на карте */
        document.getElementById("btn1"),
        document.getElementById("btn2"),
        document.getElementById("btn3"),
        document.getElementById("btn4"),
        document.getElementById("btn5"),
    ];

    const path = document.getElementById("myPath");
  /*   точка которая двигается по карте */
    gsap.to("#dot", {
        duration: 100,
        repeat: -1,
        ease: "linear",
        motionPath: {
            path: "#myPath",
            align: "#myPath",
            autoRotate: false,
            alignOrigin: [0.5, 0.5],
        },
        onUpdate() {
            const dot = document.getElementById("dot");
            const dotBBox = dot.getBoundingClientRect();

            buttons.forEach(btn => {
                    console.log(buttons)
                if (!btn) return;

                const rect = btn.querySelector("rect");
                const icon = btn.querySelector(".icon");
                const text = btn.querySelector(".text");
                const bagraud = btn.querySelector(".bagraud");
                const btnBBox = btn.getBoundingClientRect();

                const intersects =
                    dotBBox.left < btnBBox.right &&
                    dotBBox.right > btnBBox.left &&
                    dotBBox.top < btnBBox.bottom &&
                    dotBBox.bottom > btnBBox.top;

                if (intersects) {
                    if (rect) rect.setAttribute("fill", "#1C2F43");
                    if (bagraud) bagraud.setAttribute("fill", "#1C2F43"); 

                    if (icon) icon.setAttribute("fill", "#fff");
                    if (text) text.setAttribute("fill", "#fff");
                } else {
                    if (rect) rect.setAttribute("fill", "#F6F7F9");
                    if (bagraud) bagraud.setAttribute("fill", "#F6F7F9");
                    if (icon) icon.setAttribute("fill", "#6B6B6B");
                    if (text) text.setAttribute("fill", "#6B6B6B");
                }
            });
        },
    });


});

