import axios from 'axios';
import React,{ Component,useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import noimage from '~/assets/imgs/noimage.jpg';
import '~/css/AddCategory.css'
import Sidebar from './Sidebar';

const PRODUCT_API_BASE_URL = "http://localhost:9000/admin/product"
const CATEGORY_API_BASE_URL = "http://localhost:9000/admin/category"

const DeleteProduct = () => {

    const [categories,setCategories] = useState([])
    const [product,setProduct] = useState({})
    let {id} = useParams();
    let navigative = useNavigate()
    const [image, setImage] = useState("")
    const [status, setStatus] = useState(undefined)
    const[obj, setObj] = useState("")
    const[cateName, setCateName] = useState("")


    const deleteProduct = (event) => {
      event.preventDefault();
        
      axios.delete(`${PRODUCT_API_BASE_URL}/${id}`,)
        .then(() => {
          setStatus({ type: 'success' })
          alert("Xóa thành công")
          navigative("/admin/product")
        })
        .catch((error)=>{
          setStatus({ type: 'error', error })
          alert("Không thành công")
        })
    }

    useEffect (()=>{
      let temp
        axios.get(`${PRODUCT_API_BASE_URL}/${id}`).then(res => {
            setProduct(res.data)
            temp = res.data.categoryId;

        })

        axios.get(CATEGORY_API_BASE_URL).then(res => {
            setCategories(res.data)
            res.data.map((item)=>{
              if(item.categoryId===temp){
                document.getElementById("objName").value=item.objName
                document.getElementById("categoryName").value=item.categoryId
                setObj(item.objName)
                setCateName(item.categoryName)
              }
          })

      })
    
    },[obj,setObj,cateName,setCateName])

    return (
      <>
   
      <div className='pageCate'>
        <div className="BtnListCate">
            <h1 className='titlePageCate' >Xóa sản phẩm</h1>
            <Link to={`/admin/product`}>
              <button className='btnListCate'>
              Danh sách sản phẩm
              </button>
            </Link>
        </div>
        <form className="formUploadImg">
          <div className="formGroup">
            <div style={{width:"35%"}}>
              <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="productName">Tên sản phẩm:</label>
                <input type="text" className="form-control" id="productName" name="productName"  value={product.productName}/>
              </div>
              <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="objProduct">Giới tính:</label>
                <input type="text" className="form-control" id="objName" name="objName" value={obj}/>
                </div>
  
                <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="categoryName">Danh mục:</label>
                <input type="text" className="form-control" id="categoryName"  name="categoryId" value={cateName}/>
               
                </div>
  
                <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="productName">Giá sản phẩm:</label>
                <input type="text" className="form-control" id="price" name="price" value={product.price}/>
               </div>
  
               {/* <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="productName">Sản phẩm có sẵn:</label>
                <input type="number" className="form-control" id="stockQuantity" name="stockQuantity"value={product.stockQuantity}/>
               </div> */}
  
               <div class="form-group">
                <label style={{marginBottom:"5px"}} htmlFor="productName">Mô tả:</label>
                <textarea className="form-control" id="moTa" name="moTa" value={product.moTa}></textarea>
               </div>
            </div>
            <div style={{width:"45%"}} className="uploadImg">
              <div className="cateImage">
              <img id="categoryImg" src={`${PRODUCT_API_BASE_URL}/images/${product.productImg}`}/>
              </div>
              <div>
                <label style={{marginBottom:"5px"}} htmlFor="imgProductFile">Ảnh sản phẩm:</label>
                <input type="file" className="form-control" id="imgProductFile" name="imgProductFile"  />
              </div>
              <button className='btnUpload' type="submit" onClick={deleteProduct}>Xác nhận xóa</button>
            </div>
          </div>
        </form>
      </div>
      </>
    )
}

export default DeleteProduct 