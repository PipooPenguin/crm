import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Ladipage = () => {
  const [user, setuser] = useState({
    "Giới tính": "",
    "Họ tên": "",
    "Tỉnh thành": "",
    "email": "",
    "số điện thoại": "",
  });
  const handleChange = (event) => {
    setuser((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));    
    console.log(user)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const url = ''
      const res = await axios.post(url, user);
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <div className="container" style={{ margin: "10px", marginLeft: "25%" }}>
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Đăng ký để nhận thông tin</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <div className="form-group row">
                <div className="col-md-12">
                  <label for="c_fname" className="text-black">
                    Họ tên <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_fname"
                    name="Họ tên"
                    placeholder="Họ và tên"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label for="c_address" className="text-black">
                    Địa chỉ <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_address"
                    name="c_address"
                    placeholder="Tỉnh thành"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group row mb-5">
                <div className="col-md-6">
                  <label for="c_email_address" className="text-black">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_email_address"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label for="c_phone" className="text-black">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_phone"
                    name="c_phone"
                    placeholder="Số điện thoại"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label for="c_phone" className="text-black">
                    Giới tính <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_phone"
                    name="Giới tính"
                    placeholder="Giới tính"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-black btn-lg py-3 btn-block"
              onClick={() => {
                console.log("sent");
              }}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    );
}

export default Ladipage
