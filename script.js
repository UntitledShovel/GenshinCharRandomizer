const char = document.getElementById("char");
const btn = document.getElementById("btn");

btn.addEventListener("click", clicky);

function clicky() {
    const char = document.getElementById("char");
    const btn = document.getElementById("btn");
    const elements = ["Anemo", "Geo", "Hydro", "Pyro", "Cryo", "Dendro", "Electro"];
    const weapons = ["Sword", "Polearm", "Bow", "Catalyst", "Claymore"];
    const whois = ["pyrotechnician", "grandmaster", "archon", "fisherman", "salesman", "authour", "kid", "adult", "teenager", "boss", "worker", "illustrator"];
    const andis = ["overworked", "underworked", "selfish", "kind", "caring", "angry", "happy", "suffering", "depressed", "thriving"];
    const andhas = ["bachelor degree", "child", "younger sibling", "boss", "no parents", "dead friend"];
    const vowels = ["a", "e", "i", "o", "u"];
    const scales = ["HP%", "ATK%", "ER%", "EM", "DEF%", "Base HP", "Base ATK", "Base ER", "Base DEF", "Healing Bonus"];
    element = elements[Math.floor(Math.random() * elements.length)];
    weapon = weapons[Math.floor(Math.random() * weapons.length)];
    whois_choice = whois[Math.floor(Math.random() * whois.length)];
    scale = scales[Math.floor(Math.random() * scales.length)];
    andis_choice = andis[Math.floor(Math.random() * andis.length)];
    andhas_choice = andhas[Math.floor(Math.random() * andhas.length)];
    final = "";
    a_or_an_one = "";
    a_or_an_two = "";
    if (vowels.includes(whois_choice[0])) {
        a_or_an_one = "an";
    } else {
        a_or_an_one = "a";
    }

    if (vowels.includes(element[0])) {
        a_or_an_two = "an";
    } else {
        a_or_an_two = "a";
    }

    final = `This character is ${a_or_an_two} ${element} ${weapon} user, who is ${a_or_an_one} ${whois_choice}, and is ${andis_choice}. They also have a ${andhas_choice}. They scale with ${scale}.`
    char.innerHTML = String(final);
}



