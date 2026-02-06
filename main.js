    document.addEventListener("DOMContentLoaded", () => {
        const noBtn = document.getElementById("noBtn");

        if (!noBtn) return;

        noBtn.addEventListener("mouseenter", () => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform =
            `translate(${x}px, ${y}px) rotate(10deg)`;
        });

        noBtn.addEventListener("touchstart", () => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 200 - 100;
        noBtn.style.transform =
            `translate(${x}px, ${y}px) rotate(10deg)`;
        });
    });
        document.addEventListener("DOMContentLoaded", () => {
        const yesBtn = document.getElementById("yesBtn");
        const text = document.getElementById("romanticText");
        const hearts = document.getElementById("hearts");

        yesBtn.addEventListener("click", () => {
            text.classList.remove("opacity-0");
            text.classList.add("opacity-100");

            const count = 28;

            for (let i = 0; i < count; i++) {
            const heart = document.createElement("span");
            heart.innerHTML = "❤";

            heart.style.position = "absolute";
            heart.style.left = "50%";
            heart.style.top = "55%";
            heart.style.fontSize = 46 + Math.random() * 26 + "px";
            heart.style.color = "#fb7188";
            heart.style.opacity = "0.85";
            heart.style.transform = "translate(-50%, -50%)";

            hearts.appendChild(heart);

            const x = (Math.random() - 0.5) * 520;
            const y = (Math.random() - 0.5) * 540 - 40;

            requestAnimationFrame(() => {
                heart.style.transition =
                "transform 3s ease-out, opacity 2.4s ease-out";
                heart.style.transform =
                `translate(${x}px, ${y}px) scale(1.25)`;
                heart.style.opacity = "0";
            });

            setTimeout(() => heart.remove(), 2400);
            }
        });
        });