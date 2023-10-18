import React, { Component } from 'react';

export default class TablaMultiplicar extends Component {
  // NECESITAMOS UNA REFERENCIA PARA EL INPUT DE LA CAJA
  cajaNumero = React.createRef();

  mostrarTablaMultiplicar = (e) => {
    e.preventDefault();
    var numero = parseInt(this.cajaNumero.current.value);
    var aux = [];
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      var operacion = numero + " * " + i;
      // ALMACENAMOS LOS DATOS EN EL ARRAY CON FORMATO HTML
      aux.push(
        <tr key={i}>
          <td>{operacion}</td>
          <td>{resultado}</td>
        </tr>
      );
    }
    // POR ÚLTIMO, CAMBIAMOS EL STATE DE filas
    this.setState({
      filas: aux
    });
  };

  // NECESITAMOS UN state CON LAS FILAS DE LA TABLA
  // CON FORMATO HTML
  state = {
    filas: []
  };

  render() {
    return (
      <div>
        <h1>TablaMultiplicar Component</h1>
        <form onSubmit={this.mostrarTablaMultiplicar}>
          <label>Introduzca un número</label>
          <input type="number" ref={this.cajaNumero} />
          <button>Tabla multiplicar</button>
        </form>
        <hr />
        <table border="1">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </table>
      </div>
    );
  }
}
