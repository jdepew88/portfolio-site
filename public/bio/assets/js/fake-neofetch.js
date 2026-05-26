(function () {
    function injectNeofetchStyles() {
      if (document.getElementById("fake-neofetch-styles")) return;

      const style = document.createElement("style");
      style.id = "fake-neofetch-styles";
      style.textContent = `
        .neofetch-output {
          white-space: pre;
          font-family: inherit;
          line-height: 1.1;
        }

        .nf-blue { color: #3990D8; }
        .nf-cyan { color: #3890B0; }
        .nf-text { color: #C8C8C8; }
        .nf-bright { color: #F0F0F0; }
        .nf-magenta { color: #B00098; }
        .nf-gray { color: #C8C8C8; }
        .nf-dim { color: #707070; }

        .nf-swatch-blue { background: #0030D8; color: #0030D8; }
        .nf-swatch-green { background: #10A008; color: #10A008; }
        .nf-swatch-cyan { background: #3890D8; color: #3890D8; }
        .nf-swatch-red { background: #C00818; color: #C00818; }
        .nf-swatch-purple { background: #881098; color: #881098; }
        .nf-swatch-yellow { background: #C09800; color: #C09800; }
        .nf-swatch-white { background: #C8C8C8; color: #C8C8C8; }

        .nf-swatch-bright-black { background: #707070; color: #707070; }
        .nf-swatch-bright-blue { background: #3978F8; color: #3978F8; }
        .nf-swatch-bright-green { background: #10C008; color: #10C008; }
        .nf-swatch-bright-cyan { background: #60D0D0; color: #60D0D0; }
        .nf-swatch-bright-red { background: #D84858; color: #D84858; }
        .nf-swatch-bright-purple { background: #B000B8; color: #B000B8; }
        .nf-swatch-bright-yellow { background: #F8F0A0; color: #F8F0A0; }
        .nf-swatch-bright-white { background: #F0F0F0; color: #F0F0F0; }
      `;
      document.head.appendChild(style);
    }

    function logoLeft(indented) {
      const block = "llllllllllllllll   llllllllllllllll";
      return indented ? `  ${block}` : block;
    }

    function logoLine(indented, right = "") {
      const left = logoLeft(indented);
      if (!right) {
        return `<span class="nf-blue">${left}</span>`;
      }
      return `<span class="nf-blue">${left}</span>${right}`;
    }

    function swatch(className) {
      return `<span class="${className}">████</span>`;
    }

    function swatchRow(classNames) {
      return classNames.map(swatch).join("");
    }

    function run() {
      injectNeofetchStyles();

      const infoPad = "            ";
      const infoCol = logoLeft(true).length + infoPad.length;
      const gpuPad = " ".repeat(infoCol);
      const bar = "////////////////////";

      const output = [
        logoLine(true),
        logoLine(true, `${infoPad}<span class="nf-cyan">Joe@JOEY-DESKTOP</span>`),
        logoLine(true, `${infoPad}<span class="nf-cyan">----------------</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">OS:</span> <span class="nf-text">Windows 11</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">Build:</span> <span class="nf-text">25H2 (26220)</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">Uptime:</span> <span class="nf-text">3 days, 4 hours, 47 minutes</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">Resolution:</span> <span class="nf-text">2560x1440 @165Hz</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">Terminal:</span> <span class="nf-text">Administrator: Windows PowerShell</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">CPU:</span> <span class="nf-text">AMD Ryzen 7 7800X3D 8-Core Processor</span>`),
        `${gpuPad}<span class="nf-blue">GPU:</span> <span class="nf-text">NVIDIA GeForce RTX 4080 SUPER</span>`,
        logoLine(true, `${infoPad}<span class="nf-blue">Memory:</span> <span class="nf-text">21435 MB / 31893 MB (67% in use)</span>`),
        logoLine(true, `${infoPad}<span class="nf-blue">Disk:</span> <span class="nf-text">C:\\ 952.89 GB (8.88 GB free)</span>`),
        logoLine(true),
        logoLine(true, `${infoPad}<span class="nf-blue">Mem%:</span>  <span class="nf-text">-=[ </span><span class="nf-magenta">${bar}</span><span class="nf-text"> ]=-</span>`),
        logoLine(true),
        logoLine(true, `${infoPad}<span class="nf-blue">Disk%:</span> <span class="nf-text">-=[ </span><span class="nf-magenta">${bar}</span><span class="nf-text"> ]=-</span>`),
        logoLine(true),
        logoLine(
          true,
          `${infoPad}${swatchRow([
            "nf-swatch-blue",
            "nf-swatch-green",
            "nf-swatch-cyan",
            "nf-swatch-red",
            "nf-swatch-purple",
            "nf-swatch-yellow",
            "nf-swatch-white"
          ])}`
        ),
        logoLine(
          true,
          `${infoPad}${swatchRow([
            "nf-swatch-bright-black",
            "nf-swatch-bright-blue",
            "nf-swatch-bright-green",
            "nf-swatch-bright-cyan",
            "nf-swatch-bright-red",
            "nf-swatch-bright-purple",
            "nf-swatch-bright-yellow",
            "nf-swatch-bright-white"
          ])}`
        ),
        logoLine(true)
      ].join("\n");

      return {
        html: true,
        content: `<div class="neofetch-output">${output}</div>`
      };
    }

    window.FakeNeofetch = {
      run
    };
  })();
