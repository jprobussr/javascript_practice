const returnRandomBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
}

console.log(returnRandomBase());

const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandomBase());
    }

    return newStrand;
};

console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,

        mutate() {
            const bases = ['A', 'T', 'C', 'G'];
            const randomIndex = Math.floor(Math.random() * this.dna.length);
            const currentBase = this.dna[randomIndex];

            const newBases = bases.filter(base => base !== currentBase);
            const newBase = newBases[Math.floor(Math.random() * newBases.length)];
            this.dna[randomIndex] = newBase;
            return this.dna;
        },

        compareDNA(otherPAequor) {
            let commonCount = 0;
            this.dna.forEach((base, index) => {
                if (base === otherPAequor.dna[index]) {
                    commonCount++;
                }
            });

            const percentage = ((commonCount / this.dna.length) * 100).toFixed(2);

            console.log(`Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} and ${percentage}% DNA in common.`);
        },
    };
};

const pAequor1 = pAequorFactory(1, ['A', 'C', 'T', 'G', 'T', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);
const pAequor2 = pAequorFactory(2, ['A', 'C', 'T', 'G', 'A', 'A', 'T', 'G', 'A', 'C', 'T', 'G', 'A', 'C', 'T']);

pAequor1.compareDNA(pAequor2);
