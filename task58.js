const canConstruct  = (ransomNote, magazine) => {
    const map = {}

    for(let i = 0; i < magazine.length; i++) {
        const el = magazine[i];

        if (!map[el]) {
            map[el] = 0;
        }
        map[el]++;

    }


    for (let i = 0; i < ransomNote.length; i++) {
        const el  = ransomNote[i]
        if (!map[el]) {
            return false;
        }

        map[el]--;
    }


    return map
}

console.log(canConstruct("a", "aab"))
