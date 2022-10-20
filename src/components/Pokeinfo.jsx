import React from "react";

const Pokeinfo=({data})=>{
    console.log(data)
    return(
        <>
        {
            (!data)?"":(
                <>
                       <h1> {data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="abilities">
                            {
                                data.abilities.map(poke=>{
                                    return(
                                        <>
                                          <div className="group">
                                            <h2>{poke.ability.name}</h2>
                                          </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="type">
                            {
                                data.types.map(poke=>{
                                    return(
                                        <>
                                          <div className="group-type">
                                            <h2>type: {poke.type.name}</h2>
                                          </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="type"><h2>weight: {data.weight} lbs</h2></div>
                        <div className="base-stat">
                            <h2>stats:</h2>
                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                             
                                             <h3>{poke.stat.name} :{poke.base_stat}</h3>

                                        </>
                                    )
                                })
                            }
   
                        </div>
                </>
            )
        }
 
        </>
    )
}

export default Pokeinfo