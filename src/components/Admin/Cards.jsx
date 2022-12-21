import React from 'react'
import Card from './Card';
import '~/css/Cards.css'



const Cards = () => {

    const CardData = [
        {
            icon:'icon fa-solid fa-box',
            title:'Tổng đơn',
            color:{
                background:" #c484f3",
                boxShadow: "0px 10px 20px 0px #e0c6f5",
            }
        },

        {
            icon:'icon fa-solid fa-box-open',
            title:'Đơn hoàn thành',
            color:{
                background:"#FC929D",
                boxShadow: "0px 10px 20px 0px #FDC0C7",
            }
        },

        {
            icon:'icon fa-solid fa-dollar-sign',
            title:'Doanh thu',
            color:{
                background:"#ffc96c",
                boxShadow: "0px 10px 20px 0px #F9D59B",
            }
        },
    ];

  return (
    <div className="Cards">
        {
            CardData.map((card,index)=>{
                return(
                    <div className="partentContainer col-12 col-sm-12 col-md-6 col-xl-4">
                        <Card
                            title ={card.title}
                            color={card.color}
                            png = {card.icon}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cards