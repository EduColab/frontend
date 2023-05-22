import styles from "./searchBarList.module.css";
export const SearchBarList = ({ results, setRecurso }) => {
  console.log(results);
  return (
    <div className={styles.searchList}>
      {results.length > 0 ? (<div className={styles.container}>
        {results.map((program, id) => (
          <p className={styles.p} key={id} onClick={()=>{
            setRecurso(program)
            if(program.type === "Cursos_Universidades"){
              window.location.href = `/cursosUniversidad/${program.id}`
            }
                  
          }}>
            {program.name}
          </p>
        ))}
      </div>) : null}
      
    </div>
  );
};
