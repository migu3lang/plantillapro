import { AssignmentReturnRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import clientsApi from '../../apis/Clients';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { render } from 'react-dom';
import Api from '../../apis/Api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));




export default function ClientsModules(props) {

  const [modules, setModules] = useState([]);

  const [globalCheckboxes,setCheckboxes]=useState([]);

  function Comparador(elemento, comparar) {
    return elemento != comparar;
  }

  const handleChange = (event) => {

    let auxCheck=globalCheckboxes;

    if (event.target.checked === true) {
      auxCheck.push(parseInt(event.target.value));
    } else if (event.target.checked === false) {
      const filter = auxCheck.filter(el => Comparador(el, event.target.value));
      auxCheck = filter;
    }
    setCheckboxes(auxCheck);

  };

  useEffect(() => {

    function obtener() {

      clientsApi.getModulos(props.location.state.id).then((response) => {
        let moduleAPi = [];
        let checkboxes=[]
        //mapa modulos de la aplicacion
        response.data.modulos.map((modulo) => {
          var data = {
            id : modulo.id,
            nombreModulo: modulo.nombreModulo,
            active: false
          }
          // mapa modulos activos
          response.data.modulosActivos.map((moduloActivo) => {
            checkboxes.push(moduloActivo.modulo_id);
            if(modulo.id == moduloActivo.modulo_id){
              data.active = true;
            }
          });
          moduleAPi.push(data);
        });
       
        setModules(moduleAPi);
        setCheckboxes(checkboxes);

      })

    }
    
    return obtener();

  }, []);

  function save(){
    
    clientsApi.saveModules(props.location.state.id,{modules:globalCheckboxes}).
    then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error.data);
    })
  }

  const elementos = (() => {
    var elements = [];
   
    modules.map((modulo) => {
      if (modulo.active) {
        elements.push(<FormControlLabel key={modulo.id}
          control={<Checkbox name={modulo.nombreModulo} value={modulo.id} defaultChecked={true}
            onChange={handleChange} />}
          label={modulo.nombreModulo}
        />)
      } else {
        elements.push(<FormControlLabel key={modulo.id}
          control={<Checkbox name={modulo.nombreModulo} value={modulo.id}
            onChange={handleChange} />}
          label={modulo.nombreModulo}
        />)
      }
    });
    
    return elements

  })

  const classes = useStyles();

  return (
    <form>
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>

          {modules.length > 0 ? elementos() : null}

        </FormGroup>

      </FormControl>

    </div>

    <button className="btn btn-primary" type="button" onClick={save}>Guardar</button>
    </form>
  );


}

