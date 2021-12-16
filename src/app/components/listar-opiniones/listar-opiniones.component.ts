import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Opiniones } from 'src/app/models/Opiniones';
import { OpinionesService } from 'src/app/services/opiniones.service';

@Component({
  selector: 'app-listar-opiniones',
  templateUrl: './listar-opiniones.component.html',
  styleUrls: ['./listar-opiniones.component.css']
})
export class ListarOpinionesComponent implements OnInit {
  listOpiniones: Opiniones[] = [];
  constructor(private _opinionesService: OpinionesService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerOpiniones();
  }

    obtenerOpiniones(){
      this._opinionesService.optenerOpiniones().subscribe(doc =>{
        this.listOpiniones = [];
        doc.forEach((element: any) => {
          this.listOpiniones.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          });
        });
        console.log(this.listOpiniones);
      })
    }

    eliminarOpinion(id: any){
      this._opinionesService.eliminarOpinion(id).then(()=>{
      this.toastr.error('La opinion fue eliminada con exito','Opinion Eliminada')
      },error => {
        this.toastr.error('Opps.. Ocurrio un error','Error')
        console.log(error);
      })
    }
    
    editarOpinion(Opinion: Opiniones){
      this._opinionesService.addOpinionEdit(Opinion);
    }
}
