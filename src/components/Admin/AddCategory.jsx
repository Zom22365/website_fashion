import axios from "axios"
import React,{ Component,useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import noimage from '~/assets/imgs/noimage.jpg';
import Sidebar from "./Sidebar";
import '~/css/AddCategory.css'
const CATEGORY_API_BASE_URL = "http://localhost:9000/admin/category"

const AddCategory = () => {

  
  const [category,setCategory] = useState({
    categoryName:'',
    categoryImgFile:'',
    objName:''
  })
  let navigative = useNavigate()
  const [image, setImage] = useState(noimage)
  const [status, setStatus] = useState(undefined)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(category)
    const formData = new FormData();
    formData.append("categoryName",category.categoryName)
    formData.append("categoryImgFile",category.categoryImgFile)
    formData.append("objName",category.objName)
    axios.post(CATEGORY_API_BASE_URL,
      formData, 
      {headers: {
        "Content-Type": "multipart/form-data",
      },})
      .then(() => {
        setStatus({ type: 'success' })
        alert("Lưu thành công")
        document.getElementById("categoryName").value=""
        document.getElementById("objName").value="--lựa chọn--"
        setImage(noimage)
        document.getElementById("categoryImgFile").value=""
        navigative("/admin/category")
      })
      .catch((error)=>{
        setStatus({ type: 'error', error })
        alert("Không thành công")
      })
  }

  const handleChange =(event)=>{
    setCategory({
      ...category,
      [event.target.name]: event.target.value})
  }
   

  const imagesFileAsURl=(fileSelected)=>{
    if (fileSelected.target.files && fileSelected.target.files.length > 0) {
      setImage(URL.createObjectURL(fileSelected.target.files[0]));
    }
    setCategory({
      ...category,
      [fileSelected.target.name]: fileSelected.target.files[0]})
  }

  return (
    <div className='pageCate'>
      <div className="BtnListCate">
          <h1 className='titlePageCate' >Thêm danh mục sản phẩm</h1>
          <Link to={`/admin/category`}>
            <button className='btnListCate'>
            Danh sách danh mục
            </button>
          </Link>
      </div>
      <form className="formUploadImg" onSubmit={handleSubmit}>
        <div className="formGroup">
          <div style={{width:"35%"}}>
            <div className="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="categoryName">Tên danh mục:</label>
              <input type="text" className="form-control" id="categoryName" name="categoryName" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="objProduct">Giới tính:</label>
              <select  className="form-control" id="objName" name="objName" onChange={handleChange}>
                <option value=""> --Lựa chọn-- </option>
                <option value="Nữ">Nữ</option>
                <option value="Nam">Nam</option>
              </select>
              </div>
          </div>
          <div style={{width:"45%"}} className="uploadImg">
            <div className="cateImage">
            <img id="categoryImg" src={image} alt="" />
            </div>
            <div>
              <label style={{marginBottom:"5px"}} htmlFor="categoryImgFile">Ảnh danh mục sản phẩm:</label>
              <input type="file" className="form-control" onChange={imagesFileAsURl} id="categoryImgFile" name="categoryImgFile"  />
            </div>
            <button className='btnUpload' type="submit">Thêm mới</button>
          </div>
        </div>
      </form>
    </div>
   
  )
}

export default AddCategory