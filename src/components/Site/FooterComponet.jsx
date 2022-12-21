import React from 'react'

const FooterComponet = () => {
  return (
    <footer className='footer'>
        <div className='row'>
            <div className='col-info col-12 col-md-12 col-xl-6'>
                <h4 className='title-footer'>Thông tin công ty</h4>
                <ul className='info'>
                    <li className='info-detail'>Trụ sở chính: Xóm 1, X.Đông Thành, H.Xuân Trường, T.Nam Định</li>
                    <li className='info-detail'>Địa chỉ liên hệ: Xóm 14, X.Xuân Kiên, H.Xuân Trường, T.Nam Định</li>
                    <li className='info-detail'>Số điện thoại: xxxxxxxxx</li>
                    <li className='info-detail'>Địa chỉ email:xxxx@hima.com</li>
                </ul>
            </div>
            <div className='col-info col-12 col-md-4 col-xl-2'>
                <h4 className='title-footer'>Thương hiệu</h4>
                <ul  className='info'>
                    <li className='info-detail'>Giới thiệu</li>
                    <li className='info-detail'>Liên hệ</li>
                </ul>
            </div>
            <div className='col-info col-12 col-md-4 col-xl-2'>
                <h4 className='title-footer'>Hỗ trợ</h4>
                <ul  className='info'>
                    <li className='info-detail'>Kiểm tra đơn hàng</li>
                </ul>
            </div>
            <div className='col-info col-12 col-md-4 col-xl-2'>
                <h4 className='title-footer'>Theo dõi</h4>
                <div  className='info'>
                    <li  className='info-detail'>
                        <i class="fa-brands fa-facebook"></i>
                    </li>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterComponet