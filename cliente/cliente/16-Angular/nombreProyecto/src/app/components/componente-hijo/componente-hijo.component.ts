import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {
  /* @Input() contadorHijo: number = 0; 
  @Input() mensajeDesdePadre: string = ""; */
  
  @Output() mensajeDelHijo = new EventEmitter<string>();
  @Output() incrementarContador = new EventEmitter<void>();
  @Output() decrementarContador = new EventEmitter<void>();

  emitirIncrementar() {
    this.incrementarContador.emit();
  }

  emitirDecrementar() {
    this.decrementarContador.emit();
  }

  mensaje: string='';

  //con output se envia el mensaje al padre y input se recibe del padre

  enviarMensajeAlPadre(){
    this.mensajeDelHijo.emit(this.mensaje);
  }
  /* Este es el mensaje que envia el padre al hijo */
  /* @Input() recibeHijo: String=""; */
  
}