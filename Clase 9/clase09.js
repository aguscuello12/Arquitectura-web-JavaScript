function validarNombre(v) {
  if (v.length <= 6)     return 'Debe tener más de 6 letras.';
  if (!/\s/.test(v))     return 'Debe tener al menos un espacio.';
  return '';
}

function validarEmail(v) {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v))
    return 'Formato de email inválido.';
  return '';
}

function validarPassword(v) {
  if (v.length < 8)          return 'Mínimo 8 caracteres.';
  if (!/[a-zA-Z]/.test(v))   return 'Debe contener letras.';
  if (!/[0-9]/.test(v))      return 'Debe contener números.';
  return '';
}

function validarRepetir(v) {
  if (v !== document.getElementById('password').value)
    return 'Ambas contraseñas deben ser iguales.';
  return '';
}

function validarEdad(v) {
  if (!/^\d+$/.test(v) || parseInt(v) < 18)
    return 'Debe ser un número entero mayor o igual a 18.';
  return '';
}

function validarTelefono(v) {
  if (!/^\d{7,}$/.test(v))
    return 'Mínimo 7 dígitos, sin espacios, guiones ni paréntesis.';
  return '';
}

function validarDireccion(v) {
  if (v.length < 5)          return 'Mínimo 5 caracteres.';
  if (!/\s/.test(v))         return 'Debe contener un espacio.';
  if (!/[a-zA-Z]/.test(v))   return 'Debe contener letras.';
  if (!/[0-9]/.test(v))      return 'Debe contener números.';
  return '';
}

function validarCiudad(v) {
  if (v.length < 3) return 'Mínimo 3 caracteres.';
  return '';
}

function validarCP(v) {
  if (v.length < 3) return 'Mínimo 3 caracteres.';
  return '';
}

function validarDNI(v) {
  if (!/^\d{7,8}$/.test(v)) return 'Debe tener 7 u 8 dígitos.';
  return '';
}



const campos = [
  { id: 'nombre',    fn: validarNombre    },
  { id: 'email',     fn: validarEmail     },
  { id: 'password',  fn: validarPassword  },
  { id: 'repetir',   fn: validarRepetir   },
  { id: 'edad',      fn: validarEdad      },
  { id: 'telefono',  fn: validarTelefono  },
  { id: 'direccion', fn: validarDireccion },
  { id: 'ciudad',    fn: validarCiudad    },
  { id: 'cp',        fn: validarCP        },
  { id: 'dni',       fn: validarDNI       },
];



function aplicarEstado(id, msg) {
  const input    = document.getElementById(id);
  const errorDiv = document.getElementById('error-' + id);
  const campoDiv = document.getElementById('campo-' + id);

  errorDiv.textContent = msg;

  if (msg) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    campoDiv.classList.add('tiene-error');
  } else {
    input.classList.remove('is-invalid');
    if (input.value.trim() !== '') {
      input.classList.add('is-valid');
    }
    campoDiv.classList.remove('tiene-error');
  }
}

function limpiarEstado(id) {
  const input    = document.getElementById(id);
  const errorDiv = document.getElementById('error-' + id);
  const campoDiv = document.getElementById('campo-' + id);

  input.classList.remove('is-invalid', 'is-valid');
  errorDiv.textContent = '';
  campoDiv.classList.remove('tiene-error');
}



campos.forEach(function({ id, fn }) {
  const input = document.getElementById(id);

  input.addEventListener('blur', function() {
    aplicarEstado(id, fn(input.value.trim()));
  });

  input.addEventListener('focus', function() {
    limpiarEstado(id);
  });
});



const inputNombre = document.getElementById('nombre');
const tituloHola  = document.getElementById('titulo-hola');

function actualizarHola() {
  setTimeout(function() {
    const val = inputNombre.value.trim();
    tituloHola.textContent = val ? 'HOLA ' + val.toUpperCase() : 'HOLA';
  }, 0);
}

inputNombre.addEventListener('keydown', actualizarHola);
inputNombre.addEventListener('focus',   actualizarHola);



document.getElementById('form-suscripcion').addEventListener('submit', function(e) {
  e.preventDefault();

  let errores = [];

  campos.forEach(function({ id, fn }) {
    const input = document.getElementById(id);
    const msg   = fn(input.value.trim());
    aplicarEstado(id, msg);
    if (msg) {
      const label = document.querySelector('label[for="' + id + '"]').textContent;
      errores.push('• ' + label + ': ' + msg);
    }
  });

  if (errores.length > 0) {
    alert('Se encontraron los siguientes errores:\n\n' + errores.join('\n'));
  } else {
    const datos = campos.map(function({ id }) {
      const label = document.querySelector('label[for="' + id + '"]').textContent;
      const val   = document.getElementById(id).value.trim();
      return label + ': ' + val;
    }).join('\n');

    alert('✅ ¡Suscripción exitosa!\n\n' + datos);
  }
});