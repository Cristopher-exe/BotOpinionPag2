export class Opiniones{
    id?: string;
    opinion: string;
    tipOpinion: string;

    constructor(opinion: string,tipOpinion: string){
        this.opinion = opinion;
        this.tipOpinion = tipOpinion;
    }
}

