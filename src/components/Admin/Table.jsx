import React from 'react'
import '~/css/Table.css'

const Table = () => {

    const dataOrder =[
        {product:"Áo phông nữ",
        idOrder: "080730008",
        date: "3 August 2022",
        state:"Hoàn thành" },

        {product:"Áo phông nam",
        idOrder: "080730008",
        date: "3 August 2022",
        state:"Hoàn thành" },

        {product:"Áo phông trẻ em",
        idOrder: "080730008",
        date: "3 August 2022",
        state:"Hoàn thành" },

        {product:"Áo phông họa tiết",
        idOrder: "080730008",
        date: "3 August 2022",
        state:"Hoàn thành" },

        {product:"Áo phông đơn giản",
        idOrder: "080730008",
        date: "3 August 2022",
        state:"Hoàn thành" },

    ]

  return (
    <div className='list'>
        <div className="Table">
            <table className='recentOrder table'>
                <thead>
                    <tr className='itemOrder'>
                        <th className='cellOrder'>Sản phẩm</th>
                        <th className='cellOrder'>Mã đơn</th>
                        <th className='cellOrder'>Ngày đặt</th>
                        <th className='cellOrder'>Tình trạng</th>
                        <th className='cellOrder'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataOrder.map((item,index)=>{
                            return(
                                <tr className='itemOrder'>
                                    <td className='cellOrder'>{item.product}</td>
                                    <td className='cellOrder'>{item.idOrder}</td>
                                    <td className='cellOrder'>{item.date}</td>
                                    <td className='cellOrder'>{item.state}</td>
                                    <td className='cellOrder'><a href="" className='detailProOrder'>Chi tiết</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table