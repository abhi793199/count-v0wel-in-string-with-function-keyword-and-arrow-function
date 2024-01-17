function vowel()
{
    let c=0;
    let n=prompt("Enter any word i'll count how many vowels in it ");
    for (let i of n) {
        if(i=='a'|| i=="e" || i=="i" || i=="o" ||i=="u")
        {
            c++;
            console.log(`${i} is a vowel`);
        }
    }
    alert(`In ${n} numbers of vowel is ${c}`);
}

vowel();