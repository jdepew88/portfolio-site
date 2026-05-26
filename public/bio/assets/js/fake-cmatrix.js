// fake-cmatrix.js
// Browser-friendly Matrix rain effect for a fake portfolio terminal.

(function () {
    let matrixInterval = null;
    let matrixCanvas = null;
    let matrixCtx = null;
    let keyHandler = null;
  
    function stopCmatrix(printLine) {
      if (matrixInterval) {
        clearInterval(matrixInterval);
        matrixInterval = null;
      }
  
      if (keyHandler) {
        document.removeEventListener("keydown", keyHandler);
        keyHandler = null;
      }
  
      if (matrixCanvas) {
        matrixCanvas.remove();
        matrixCanvas = null;
        matrixCtx = null;
      }
  
      if (typeof printLine === "function") {
        printLine("^C");
        printLine("cmatrix terminated.");
      }
    }
  
    function startCmatrix(printLine) {
      if (matrixInterval) {
        stopCmatrix();
      }
  
      matrixCanvas = document.createElement("canvas");
      matrixCanvas.id = "fake-cmatrix-canvas";
  
      Object.assign(matrixCanvas.style, {
        position: "fixed",
        inset: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "9999",
        background: "black",
        pointerEvents: "none",
      });
  
      document.body.appendChild(matrixCanvas);
  
      matrixCtx = matrixCanvas.getContext("2d");
  
      function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
      }
  
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
  
      const chars =
        "アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const fontSize = 16;
      let columns = Math.floor(matrixCanvas.width / fontSize);
      let drops = Array(columns).fill(1);
  
      matrixInterval = setInterval(() => {
        if (!matrixCanvas || !matrixCtx) return;
  
        columns = Math.floor(matrixCanvas.width / fontSize);
        while (drops.length < columns) drops.push(1);
        while (drops.length > columns) drops.pop();
  
        matrixCtx.fillStyle = "rgba(0, 0, 0, 0.08)";
        matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  
        matrixCtx.fillStyle = "#00ff66";
        matrixCtx.font = `${fontSize}px monospace`;
  
        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          matrixCtx.fillText(char, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
  
          drops[i]++;
        }
      }, 33);
  
      keyHandler = function (event) {
        if (event.key === "Escape" || event.ctrlKey || event.key.length === 1) {
          event.preventDefault();
          window.removeEventListener("resize", resizeCanvas);
          stopCmatrix(printLine);
        }
      };
  
      document.addEventListener("keydown", keyHandler);
    }
  
    window.fakeCmatrix = {
      start: startCmatrix,
      stop: stopCmatrix,
    };
  })();