import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Opiniones } from '../models/Opiniones';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private opinion$ = new Subject<any>();

  constructor(private firestore: AngularFirestore) { }

  guardarOpinion(opinion: Opiniones): Promise<any>{
    return this.firestore.collection('Opiniones').add(opinion);
  }

  optenerOpiniones(): Observable<any>{
    return this.firestore.collection('Opiniones').snapshotChanges();
  }

  eliminarOpinion(id: string): Promise<any>{
    return this.firestore.collection('Opiniones').doc(id).delete();
  }

  addOpinionEdit(opinion: Opiniones){
    this.opinion$.next(opinion);
  }

  getOpinionEdit(): Observable<Opiniones>{
    return this.opinion$.asObservable();
  }

  editarOpinion(id: string, opinion:any): Promise<any>{
    return this.firestore.collection('Opiniones').doc(id).update(opinion);
  }
}
