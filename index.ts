export function acortar(nom: string, maxLen: number = 15, maxWords: number = 3): string {
    let reg = /^(soc.*|sac|saci|serv.*|impo.*|expo.*|ind.*|hijo.*|spa|represent.*|limita.*|ltda|sa|eirl|inv.*|com.*|ing.*|cia|de|la|del|las|los)$/
    return nom.replace(/\./g, '')
        .split(' ')
        .filter(s => s.length > 1)
        .map(s => s.toLocaleLowerCase())
        .filter(s => !reg.test(s))
        .map(s => s.charAt(0).toUpperCase() + s.substr(1)) //capitalizar
        .slice(0, maxWords)
        .join(' ').substr(0, maxLen)


}
