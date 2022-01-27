class Departamento {
	nombreDelDpto: string;
	constructor(nombreDepartamento: string) {
		this.nombreDelDpto = nombreDepartamento;
	}
	getName() {
		return this.nombreDelDpto;
	}
}

class Piso {
    nombre: string;
	departamentos: Departamento[] = []
	constructor(nombrePiso: string) {
		this.nombre = nombrePiso;
	}

	pushDepartamento(nuevoDepartamento: Departamento) {
		this.departamentos.push(nuevoDepartamento);
	}
	getDepartamentos() {
		return this.departamentos;
	}
}

class Edificio {
	arrayDePiso: Piso[];

	constructor(arrayDePiso: Piso[]) {
		this.arrayDePiso = arrayDePiso;
	}

	addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
		const pisoBuscado = this.arrayDePiso.find((x) => {
			x.nombre == nombreDePiso ? x.pushDepartamento(departamento):0}
        )}
	
	getDepartamentosByPiso(nombreDePiso: string):Departamento[] {
        const rta = this.arrayDePiso.find((x) => x.nombre == nombreDePiso)
        return rta.getDepartamentos()
    }
    
        
}




// no modificar este test
function testClaseEdificio() {
	const unPiso = new Piso("planta baja");
	const otroPiso = new Piso("primer piso");
	const unEdificio = new Edificio([unPiso, otroPiso]);
	const deptoUno = new Departamento("depto uno");
	const deptoDos = new Departamento("depto dos");
	const deptoTres = new Departamento("depto tres");
	unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
	unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
	unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

	const deptos = unEdificio.getDepartamentosByPiso("planta baja");
	const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

	if (
		Array.isArray(deptosEmpty) &&
		deptosEmpty.length == 0 &&
		deptos.length == 3 &&
		deptos[2].getName() == "depto tres"
	) {
		console.log("testClaseBandaApartment passed");
	} else {
		throw "testClaseBandaApartment not passed";
	}
}

function main() {
	testClaseEdificio();
}
main();
