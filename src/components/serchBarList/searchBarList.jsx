import styles from "./searchBarList.module.css";
export const SearchBarList = ({ results }) => {
  console.log(results);
  return (
    <div className={styles.searchList}>
      {results.length > 0 ? (<div className={styles.container}>
        {results.map((program, id) => (
          <p className={styles.p} key={id} onClick={()=>{
            
            if(program.type === "Cursos_Universidades"){
              window.location.href = `/curso/${program.id}`
            }
            if(program.type === "Cursos_Comunidad"){
              window.location.href = `/curso/${program.id}`
            }
            if(program.type === "Carreras"){
              window.location.href = `/carrera/${program.id}`
            }
                  //Un if para cada tipo y que lo envia a la pagina adecuada con su id para 
                  // que dentro del componente sacar el id como  lo hice en este ejemplo:
          }}>
            {program.name}
          </p>
        ))}
      </div>) : null}
      
    </div>
  );
};
