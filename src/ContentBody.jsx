import React from 'react'
import styles from  './ContentBody.module.css'
import learn from './assets/learn.jpg'
import money from './assets/money.jpg'
import fastest from './assets/js fastest.webp'
import design from './assets/ist design.webp'
import logIn from './assets/log in.webp'
import second from './assets/house 2.webp'
import house from './assets/house 1.jpeg'
const data = [
    {
      imagePathName: learn,
      title: "Item 1",
      description: "Description of Item 1",
      amount: 10.99,
      id: 1
    },
    {
      imagePathName: money,
      title: "Item 2",
      description: "Description of Item 2",
      amount: 20.49,
      id: 2
    },
    {
      imagePathName:second ,
      title: "Item 3",
      description: "Description of Item 3",
      amount: 15.75,
      id: 3
    },
    {
      imagePathName: fastest,
      title: "Item 4",
      description: "Description of Item 4",
      amount: 8.95,
      id: 4
    },
    {
      imagePathName: logIn,
      title: "Item 5",
      description: "Description of Item 5",
      amount: 12.99,
      id: 5
    },
    {
      imagePathName: logIn,
      title: "Item 6",
      description: "Description of Item 6",
      amount: 18.25,
      id: 6
    },
    {
      imagePathName: fastest,
      title: "Item 7",
      description: "Description of Item 7",
      amount: 24.99,
      id: 7
    },
    {
      imagePathName:house,
      title: "Item 8",
      description: "Description of Item 8",
      amount: 9.99,
      id: 8
    }
  ];
  

  

const ContentBody = () => {
  return (
    <div className={styles.max}>
      
           {
            data.map(item=> (
                <div key={item.id} className={styles.items}>
                    <img src={item.imagePathName} alt="" />
                    <div className={styles.text}>
                    <p>{item.title}</p>
                    <p className={styles.second }>{item.description}</p>
                    <p> {item.amount} </p>
                    </div>
                </div>
            ))
           }
    </div>
  )
}

export default ContentBody
