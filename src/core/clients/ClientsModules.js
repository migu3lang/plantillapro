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
  const [modulesActive, setModuleActive] = useState([]);

  const [globalCheckboxes,setCheckboxes]=useState([]);

  const [state, setState] = React.useState([]);

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
    
    console.log(globalCheckboxes);
    

  };

  useEffect(() => {

    function obtener() {

      clientsApi.getModulos(props.location.state.id).then((response) => {
        let moduleAPi = response.data.modulos;
        let moduleActivosApi = response.data.modulosActivos;
        setModules(moduleAPi);
        setModuleActive(moduleActivosApi);
        
        let checkboxes=[]
        moduleActivosApi.map((data) => {
          
          checkboxes.push(data.modulo_id);
        })
        setCheckboxes(checkboxes);


      })

    }
    //console.log('boxes',globalCheckboxes)
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
    var element = [];
    
    if(modulesActive.length>0)
     {
        for(var i=0; i<modules.length ; i++)
        {
            for(var j=0; j<modulesActive.length ; j++){

              if(modules[i].id == modulesActive[j].modulo_id){

                element.push( <FormControlLabel key={modules[i].id}
                             control={<Checkbox  name={modules[i].nombreModulo}  value={modules[i].id} defaultChecked={true}
                             onChange={handleChange}  />}
                            label={modules[i].nombreModulo}
                           />)

              }else{

                element.push( <FormControlLabel key={modules[i].id}
                             control={<Checkbox  name={modules[i].nombreModulo}  value={modules[i].id}
                             onChange={handleChange}   />}
                              label={modules[i].nombreModulo}
                            />)

              }

            }
        }

      }  

    
    return element

  })




  const classes = useStyles();


  return (
    <form>
    <div className={classes.root}>
    
    
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>

          {modules.length > 0 ? elementos() : null}

          {/* {modules.length > 0 ? 
            modules.map((data)=>{
              return (<h1>hola</h1>)
            }) : null
          } */}

        </FormGroup>

      </FormControl>

    </div>

    <button className="btn btn-primary" type="button" onClick={save}>Guardar</button>
    </form>
  );


}

