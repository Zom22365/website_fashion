import axios from 'axios';
import React,{ Component,useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import noimage from '~/assets/imgs/noimage.jpg';
import Sidebar from './Sidebar';
import '~/css/AddCategory.css'

const CATEGORY_API_BASE_URL = "http://localhost:9000/admin/category"

const EditCategory = () => {

    const [category,setCategory] = useState({})

    let {id} = useParams();
    let navigative = useNavigate()
    const [image, setImage] = useState("")
    const [status, setStatus] = useState(undefined)
    const handleSubmit = (event) => {
      event.preventDefault();
      //  console.log(category)
      const formData = new FormData();
      formData.append("categoryName",category.categoryName)
      formData.append("categoryImgFile",category.categoryImgFile)
      formData.append("objName",category.objName)
        
      axios.put(`${CATEGORY_API_BASE_URL}/${id}`,
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

    useEffect (()=>{
        axios.get(`${CATEGORY_API_BASE_URL}/${id}`).then(res => {
            setCategory(res.data)
            console.log(res.data)
        })
    },[])

  return (
    <>
   
    <div className='pageCate'>
      <div className="BtnListCate">
          <h1 className='titlePageCate' >Sửa danh mục sản phẩm</h1>
          <Link to={`/admin/category`}>
            <button className='btnListCate'>
            Danh sách danh mục
            </button>
          </Link>
      </div>
      <form className="formUploadImg" onSubmit={handleSubmit}>
        <div className="formGroup">
          <div style={{width:"35%"}}>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="categoryName">Tên danh mục:</label>
              <input type="text" className="form-control" id="categoryName" name="categoryName" onChange={handleChange} value={category.categoryName}/>
            </div>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="objProduct">Giới tính:</label>
              <select  className="form-control" value={category.objName} id="objName" name="objName" onChange={handleChange}>
                <option value=""> --Lựa chọn-- </option>
                <option value="Nữ">Nữ</option>
                <option value="Nam">Nam</option>
              </select>
              </div>
          </div>
          <div style={{width:"45%"}} className="uploadImg">
            <div className="cateImage">
            <img id="categoryImg" src={image===""?`${CATEGORY_API_BASE_URL}/images/${category.categoryImg}`: image} alt="" />
            </div>
            <div>
              <label style={{marginBottom:"5px"}} htmlFor="categoryImgFile">Ảnh danh mục sản phẩm:</label>
              <input type="file" className="form-control" onChange={imagesFileAsURl} id="categoryImgFile" name="categoryImgFile"/>
            </div>
            <button className='btnUpload' type="submit">Cập nhật</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditCategory