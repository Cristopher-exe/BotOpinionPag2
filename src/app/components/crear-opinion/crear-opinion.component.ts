import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Opiniones } from 'src/app/models/Opiniones';
import { OpinionesService } from 'src/app/services/opiniones.service';

@Component({
  selector: 'app-crear-opinion',
  templateUrl: './crear-opinion.component.html',
  styleUrls: ['./crear-opinion.component.css']
})
export class CrearOpinionComponent implements OnInit {
  form: FormGroup;
  loading = false;
  titulo = 'Agregar Opinion';
  id: string | undefined;

  constructor(private fb: FormBuilder,
            private _opinionesService: OpinionesService,
            private toastr: ToastrService) { 
    this.form = this.fb.group({
      opinion: ['',Validators.required],
      tipOpinion: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this._opinionesService.getOpinionEdit().subscribe(data => {
    this.id = data.id;
    this.titulo = 'Editar Opiniones';
    this.form.patchValue({
      opinion: data.opinion,
      tipOpinion: data.tipOpinion,
    })
  })
  }

  guardarOpinion(){
    
    if(this.id === undefined){
      //creamos una nueva tarjeta
      this.agregarOpinion();
    }else {
      //editamos una nueva tarjeta
      this.editarOpinion(this.id);     
    }  
  }

  editarOpinion(id: string){
    const OPINION: Opiniones = {
      opinion: this.form.value.opinion,
      tipOpinion: this.form.value.tipOpinion
    }
    this.loading = true;
    this._opinionesService.editarOpinion(id,OPINION).then(() => {
      this.loading = false;
      this.titulo = 'Agregar Opinion';
      this.form.reset;
      this.id = undefined;
      this.toastr.info('La opinión fue actualizada con exito','Registro Actualizado')
    },error => {
      console.log(error);
    })
  }

  agregarOpinion(){
    const OPINION: Opiniones = {
      opinion: this.form.value.opinion,
      tipOpinion: this.form.value.tipOpinion
    }
    this.loading = true;
    this._opinionesService.guardarOpinion(OPINION).then(() => {
      this.loading = false;
      console.log('Opinion Registrada')
      this.toastr.success('¡La opinión fue registrada con éxito!','Opinion Registrada')
      this.form.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error','Error');
      console.log(error);
    })
  }
  
}
