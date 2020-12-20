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

  //   if(modulesActive.length>0)
  //   {

  //     while(i < modules.length ){
      
  //     if(modules[i].id == modulesActive[j].modulo_id){
          
  //         element.push( <FormControlLabel key={i}
  //           control={<Checkbox  name="varo"  defaultChecked={true}  />}
  //           label={modules[i].nombreModulo}
  //         />)
  //         j++
  //         i++
  //         }else{

  //           element.push( <FormControlLabel key={i}
  //             control={<Checkbox  name="varo"   />}
  //             label={modules[i].nombreModulo}
  //           />)
  //           i++
            
  //         }

                      
  //     }

  // }

    
    return element

  })




  const classes = useStyles();


  return (
    <div className={classes.root}>
      {console.log(globalCheckboxes)}
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
  );


}

// var a=[1,2,3,4,5]

// var b=[1,2]

// var salida=[]

// for(i=0; i<a.length ; i++)
// {
//     for(j=0; j<b.length ; j++)
//     {
//         if(a[i]==b[j])
//         {
//             salida.push('check');
//             i++
//         }

//     }

//     salida.push('no check');

// }

// console.log(salida)
