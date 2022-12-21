import axios from 'axios';
import React,{ Component,useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import noimage from '~/assets/imgs/noimage.jpg';
import Sidebar from './Sidebar';
import '~/css/AddCategory.css'

const CATEGORY_API_BASE_URL = "http://localhost:9000/admin/category"

const DeleteCategory = () => {

    const [category,setCategory] = useState({})

    let {id} = useParams();
    let navigative = useNavigate()
    const [image, setImage] = useState("")
    const [status, setStatus] = useState(undefined)


    const deleteCategory = (event) => {
      event.preventDefault();
        
      axios.delete(`${CATEGORY_API_BASE_URL}/${id}`,)
        .then(() => {
          setStatus({ type: 'success' })
          alert("Xóa thành công")
          navigative("/admin/category")
        })
        .catch((error)=>{
          setStatus({ type: 'error', error })
          alert("Không thành công")
        })
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
          <h1 className='titlePageCate' >Xóa danh mục sản phẩm</h1>
          <Link to={`/admin/category`}>
            <button className='btnListCate'>
            Danh sách danh mục
            </button>
          </Link>
      </div>
      <form className="formUploadImg">
        <div className="formGroup">
          <div style={{width:"35%"}}>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="categoryName">Tên danh mục:</label>
              <input type="text" className="form-control" id="categoryName" name="categoryName" value={category.categoryName}/>
            </div>
            <div class="form-group">
              <label style={{marginBottom:"5px"}} htmlFor="objProduct">Giới tính:</label>
              <select  className="form-control" value={category.objName} id="objName" name="objName">
                <option value="">{category.objName} </option>
              </select>
              </div>
          </div>
          <div style={{width:"45%"}} className="uploadImg">
            <div className="cateImage">
            <img id="categoryImg" src={`${CATEGORY_API_BASE_URL}/images/${category.categoryImg}`} alt="" />
            </div>
            <div>
              <label style={{marginBottom:"5px"}} htmlFor="categoryImgFile">Ảnh danh mục sản phẩm:</label>
              <input type="file" className="form-control" id="categoryImgFile" name="categoryImgFile"/>
            </div>
            <button className='btnUpload' type="submit" onClick={deleteCategory}>Xác nhận xóa</button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default DeleteCategory