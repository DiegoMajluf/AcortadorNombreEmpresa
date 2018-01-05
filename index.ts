export function acortar(nom: string, maxLen?: number): string {
    let reg = /^(soc.*|sac|saci|serv.*|imp.*|exp.*|ind.*|hijo.*|spa|limita.*|ltda|sa|eirl|inv.*|com.*|ing.*|cia|de|la|del|las|los)$/g
    let arr = nom.replace(/\./g, '')
        .split(' ')
        .filter(s => s.length > 1)
        .map(s => s.toLocaleLowerCase())
        .filter(s => !reg.test(s))
        .map(s => s.charAt(0).toUpperCase() + s.substr(1)) //capitalizar


    //.map(s => s.substr(0, 5)) //máximo 5 carcateres por palabra
    // .slice(0, 2) //a lo más tres nombres

    return arr.join(' ').substr(0, maxLen)
}