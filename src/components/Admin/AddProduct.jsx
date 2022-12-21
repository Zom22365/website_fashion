import axios from "axios"
import React,{ Component,useEffect,useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import noimage from '~/assets/imgs/noimage.jpg';
import '~/css/AddCategory.css'
import Sidebar from "./Sidebar";
const CATEGORY_API_BASE_URL = "http://localhost:9000/admin/category"
const PRODUCT_API_BASE_URL = "http://localhost:9000/admin/product"

const Addproduct = () => {

  const [categories,setCategories] = useState([])
  const [product,setProduct] = useState({})
  let navigative = useNavigate()
  const [image, setImage] = useState(noimage)
  const [status, setStatus] = useState(undefined)
  const [cateSelect, setCateSelect] = useState([])

  useEffect(() => {
    axios.get(CATEGORY_API_BASE_URL).then(res => {
        setCategories(res.data);
    })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
      console.log(product)
    const formData = new FormData();
    formData.append("productName",product.productName)
    formData.append("imgProductFile",product.imgProductFile)
    formData.append("moTa",product.moTa)
    formData.append("price",product.price)
    // formData.append("stockQuantity",product.stockQuantity)
    formData.append("categoryId",product.categoryId)
    axios.post(PRODUCT_API_BASE_URL,
      formData, 
      {headers: {
        "Content-Type": "multipart/form-data",
      },})
      .then(() => {
        setStatus({ type: 'success' })
        navigative("/admin/product")
        alert("Lưu thành công")
      })
      .catch((error)=>{
        setStatus({ type: 'error', error })
        alert("Không thành công")
      })
  }


  const handleChange =(event)=>{
    setProduct({
      ...product,
      [event.target.name]: event.target.value})
  }

  const handleSelect =(event)=>{
    let array =[]
    categories.map((item,index)=>{
      if(item.objName===event.target.value){
        array.push(item)
      }
    })
    setCateSelect(array)
    document.getElementById("categoryName").value=""
  }
   

  const imagesFileAsURl=(fileSelected)=>{
    if (fileSelected.target.files && fileSelected.target.files.length > 0) {
      setImage(URL.createObjectURL(fileSelected.target.files[0]));
    }
    setProduct({
      ...product,
      [fileSelected.target.name]: fileSelected.target.files[0]})
  }

  return (
    <>
 
    <div className='pageCate'>
      <div className="BtnListCate">
          <h1 className='titlePageCate' >Thêm sản phẩm</h1>
          <Link to={`/admin/product`}>
            <button className='btnListCate'>
            Danh sách sản phẩm
            </button>
          </Link>
      </div>
      <form className="formUploadImg" onSubmit={handleSubmit}>
        <div className="formGroup">
          <div style={{width:"35%"}}>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="productName">Tên sản phẩm:</label>
              <input type="text" className="form-control" id="productName" name="productName" onChange={handleChange}/>
            </div>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="objProduct">Giới tính:</label>
              <select  className="form-control" id="objName" name="objName" onChange={ handleSelect }>
                <option value=""> --Lựa chọn-- </option>
                <option value="Nữ">Nữ</option>
                <option value="Nam">Nam</option>
              </select>
              </div>

              <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="categoryName">Danh mục:</label>
              <select  className="form-control" id="categoryName" name="categoryId" onChange={handleChange}>
              <option value=""> --Lựa chọn-- </option>
               {
                cateSelect.map((item,index)=>{
                  return(
                    <option value={item.categoryId}>{item.categoryName}</option>
                  )
                })
               }
              </select>
              </div>

              <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="productName">Giá sản phẩm:</label>
              <input type="text" className="form-control" id="price" name="price" onChange={handleChange}/>
             </div>

             {/* <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="productName">Sản phẩm có sẵn:</label>
              <input type="number" className="form-control" id="stockQuantity" name="stockQuantity" onChange={handleChange}/>
             </div> */}

             <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="productName">Mô tả:</label>
              <textarea className="form-control" id="moTa" name="moTa" onChange={handleChange}></textarea>
             </div>
          </div>
          <div style={{width:"45%"}} className="uploadImg">
            <div className="cateImage">
            <img id="categoryImg" src={image} alt="" />
            </div>
            <div>
              <label style={{marginBottom:"5px"}} htmlFor="imgProductFile">Ảnh sản phẩm:</label>
              <input type="file" className="form-control" onChange={imagesFileAsURl} id="imgProductFile" name="imgProductFile"  />
            </div>
            <button className='btnUpload' type="submit">Thêm mới</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Addproduct