import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proprietario } from '../interface/proprietario';
//import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
//import { Imovel } from '../interface/imovel';
import { ImovelService } from '../services/imovel.service';
import { ProprietarioService } from '../services/proprietario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  title = 'RAP Imóveis';

  imoveis: any;
  proprietario: any;
  

  constructor(
    //private breakpointObserver: BreakpointObserver,
    private imovelService: ImovelService,
    private proprietarioService: ProprietarioService
    ) {}
    
    ngOnInit(): void{
      this.getImoveis()
    }

    getImoveis(): void {
      this.imovelService.getImoveis()
      .subscribe(imoveis => this.imoveis = imoveis);           
    }

    getProprietarioId(imovelId: number){

       /*this.proprietarioService.getProprietario(imovelId)
        .subscribe((data:any) => {
        console.log(data);
        //this.proprietario= data.data;
      }); */      
       // .pipe(map(p => this.proprietario = p.p));
      return this.proprietario;
    }

    /** Based on the screen size, switch from standard to one column per row */
  /*cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'Text1' },
          { title: 'Card 2', cols: 1, rows: 1, content: 'Text2'},
          { title: 'Card 3', cols: 1, rows: 1, content: 'Text3' },
          { title: 'Card 4', cols: 1, rows: 1, content: 'Text4' }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1, content: 'Text1' },
        { title: 'Card 2', cols: 1, rows: 1, content: 'Text2' },
        { title: 'Card 3', cols: 1, rows: 1, content: 'Text3' },
        { title: 'Card 4', cols: 1, rows: 1, content: 'Text4' }
      ];
    })
  );*/
}
