export const minDamage = 1;
export const normalDamage = 1;
export const criticalHitModifier = 2;

export const minOr = (number) => {
    if(number < minDamage) {
        number = minDamage
    }
    return number;
}
