# Binding

# 1 Mediante una variable string, le asignamos una clase dada o un 'none' 
    <div [class]="clase_toggle"
    <button (click)="clase_toggle='clase1'">Activar clase1</button>
    <button (click)="clase_toggle='none'">Desactivar</button>

# 2   Usar el 'disabled' para un botton, activar/desactivar propiedades
    <button [disabled]="isDisabled">boton inutil</button>
    <button (click)="isDisabled=!isDisabled">cambiar a disabled</button>

# 3  Binding a css class
    <div [class.clase1]="claseBinding">Lorem ipsum dolor sit amet, consectetur adipisicing e.</div>
    <button (click)="claseBinding=!claseBinding">cambiar</button>

# 4 Hay varias formas de asignar multiples clases a un elemento

    <p>con un string -> [class] =" clase1 clase2"</p>
    <div [class]="multiplesClasesString">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo assumenda dolor unde, animi totam</div>
    <button (click)="multiplesClasesString='clase1 clase2'">asignar multiples clases con un string</button>

# 5  Multiples clases con un objeto:</p>
    <div [class]="{clase1:true, clase2:false}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet m eius.</div>

# 6 Multiples clases con un objeto dinamicamente</p>
    <div [class]="{clase1:var1, clase2:var2}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore voluprunt debitis rerum aspernatur soluta magnam!</div>
    <button (click)="var1=!var1">cambiar clase1</button>
    <button (click)="var2=!var2">cambiar clase2</button>