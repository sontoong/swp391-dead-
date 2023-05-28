import React from 'react'
import styles from './FoodInfo.module.css'
import { Food } from '../../Share/Map'

const FoodInfo = () => {
return (
                <div>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <h1 className={styles.BestSeller}> Best Seller</h1>
                    </div>
                        <div className={styles.FoodInformation}>
                            {Food.map((option) => (
                                <div className={styles.FoodInfo} key={option.title}>
                                    <a href="" style={{marginRight: "2rem"}}><img src={option.img}/></a>
                                    <div className={styles.Info} sx={{}}>
                                        <h1>{option.title}</h1>
                                        <p>{option.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
  )
}

export default FoodInfo