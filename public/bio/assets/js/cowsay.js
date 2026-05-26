(function () {
  const animals = {
    cow: String.raw`
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
`,

    tux: String.raw`
        \   .--.
         \ |o_o |
           |:_/ |
          //   \ \
         (|     | )
        /'\_   _/` + "\\" + String.raw`
        \___)=(___/
`,

    dragon: String.raw`
        \                    / \  //\
         \    |\___/|      /   \//  \\
              /0  0  \__  /    //  | \ \
             /     /  \/_/    //   |  \  \
             @_^_@'/   \/_   //    |   \   \
             //_^_/     \/_ //     |    \    \
          ( //) |        \///      |     \     \
        ( / /) _|_ /   )  //       |      \     _\
      ( // /) '/,_ _ _/  ( ; -.    |    _ _\.-~        .-~~~^-.
`,

    moose: String.raw`
        \   \_\_    _/_/
         \      \__/
                (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
`,

    ghost: String.raw`
        \     .-.
         \   (o o)
              | O \
               \   \
                '~~~'
`
  };

  const animalNames = Object.keys(animals);

  function wrapText(text, width) {
    const maxWidth = width || 42;
    const words = text.trim().split(/\s+/);
    const lines = [];
    let line = "";

    for (const word of words) {
      if ((line + " " + word).trim().length > maxWidth) {
        if (line) lines.push(line);
        line = word;
      } else {
        line = (line + " " + word).trim();
      }
    }

    if (line) lines.push(line);
    return lines.length ? lines : ["moo."];
  }

  function bubble(message) {
    const lines = wrapText(message);
    const max = Math.max.apply(null, lines.map(function(line) { return line.length; }));
    const top = " " + "_".repeat(max + 2);
    const bottom = " " + "-".repeat(max + 2);

    if (lines.length === 1) {
      return [top, "< " + lines[0].padEnd(max, " ") + " >", bottom].join("\n");
    }

    return [
      top
    ].concat(lines.map(function(line, index) {
      const padded = line.padEnd(max, " ");
      if (index === 0) return "/ " + padded + " \\";
      if (index === lines.length - 1) return "\\ " + padded + " /";
      return "| " + padded + " |";
    })).concat([bottom]).join("\n");
  }

  function listAnimals() {
    return animalNames.join("\n");
  }

  function help() {
    return [
      "cowsay - terminal livestock with opinions",
      "",
      "Usage:",
      "  cowsay [message]",
      "  cowsay [message] -dragon",
      "  cowsay -dragon [message]",
      "  cowsay -f [animal] [message]",
      "  cowsay -l",
      "",
      "Animals:",
      "  cow",
      "  tux",
      "  dragon",
      "  moose",
      "  ghost",
      "",
      "Examples:",
      "  cowsay I got you -dragon",
      "  cowsay -tux sudo ship it",
      "  cowsay vibecheck passed",
      "  cowsay -ghost legacy wordpress detected"
    ].join("\n");
  }

  function extractAnimalFlag(args) {
    for (let i = args.length - 1; i >= 0; i -= 1) {
      const token = String(args[i] || "").toLowerCase();
      if (token.charAt(0) !== "-" || token.length < 2) continue;
      const name = token.slice(1);
      if (animalNames.indexOf(name) !== -1) {
        args.splice(i, 1);
        return name;
      }
    }
    return null;
  }

  function say(rawArgs) {
    const args = Array.isArray(rawArgs)
      ? rawArgs.slice()
      : String(rawArgs || "").trim().split(/\s+/).filter(Boolean);

    if (
      args.indexOf("-help") !== -1 ||
      args.indexOf("-h") !== -1 ||
      args.indexOf("--help") !== -1
    ) {
      return help();
    }

    if (args.indexOf("-l") !== -1 || args.indexOf("--list") !== -1) {
      return listAnimals();
    }

    let animal = "cow";
    const fIndex = args.findIndex(function(arg) {
      return arg === "-f" || arg === "--file";
    });

    if (fIndex !== -1) {
      animal = args[fIndex + 1];
      if (!animal) {
        return "Missing animal name.\nTry: cowsay -l";
      }
      args.splice(fIndex, 2);
    } else {
      const flagged = extractAnimalFlag(args);
      if (flagged) animal = flagged;
    }

    if (!animals[animal]) {
      return "Unknown animal: " + animal + "\nTry: cowsay -l";
    }

    const message = args.join(" ") || "moo.";
    return bubble(message) + "\n" + animals[animal];
  }

  window.CowSay = {
    help: help,
    say: say,
    listAnimals: listAnimals
  };
})();
