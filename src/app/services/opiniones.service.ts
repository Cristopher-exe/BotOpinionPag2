import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Opiniones } from '../models/Opiniones';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private opinion$ = new Subject<any>();
  
  constructor(private firestore: AngularFirestore,private afauth: AngularFireAuth) { }

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

  async register(email: string, password: string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login",err)
      return null;
    }
  }

  async login(email: string, password: string){
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login",err)
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google",err)
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logOut(){
    this.afauth.signOut();
  }
}
