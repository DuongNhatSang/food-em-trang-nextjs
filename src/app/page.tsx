import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container-fluid">
        <div className="header">
          <h1>Tín Bán Tré =))))</h1>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 text-center mt-5">Menu</div>
            <div className="col-3"></div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <div className="card">
                <div className="card-img-container">
                  <Image
                    src="/images/1_n.jpg"
                    alt="Tré trộn"
                    className="card-img-top"
                    fill // Đặt kích thước ảnh bằng với container
                  />
                </div>
                <div className="card-body">
                  <p className="card-text text-primary">Tré trộn</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-img-container">
                  <Image
                    src="/images/2_n.jpg"
                    alt="Bánh Chưng"
                    className="card-img-top"
                    fill // Đặt kích thước ảnh bằng với container
                  />
                </div>
                <div className="card-body">
                  <p className="card-text text-primary" style={{ textAlign: "center" }}>
                    Bánh Chưng
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-img-container">
                  <Image
                    src="/images/3_n.jpg"
                    alt="Chả Nướng"
                    className="card-img-top"
                    fill // Đặt kích thước ảnh bằng với container
                  />
                </div>
                <div className="card-body">
                  <p className="card-text text-primary" style={{ textAlign: "center" }}>
                    Chả Nướng
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-img-container">
                  <Image
                    src="/images/4_n.jpg"
                    alt="Bánh đầu bò"
                    className="card-img-top"
                    fill // Đặt kích thước ảnh bằng với container
                  />
                </div>
                <div className="card-body">
                  <p className="card-text text-primary" style={{ textAlign: "center" }}>
                    Bánh đầu bò =)))
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <h3 className="text-center">Chọn món ăn</h3>
              <div className="form-container">
                <form>
                  <div className="form-group row">
                    <label htmlFor="tre-tron" className="col-sm-4 col-form-label">
                      Tré trộn
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="tre-tron"
                        min="0"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="banh-chung" className="col-sm-4 col-form-label">
                      Bánh Chưng
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="banh-chung"
                        min="0"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="cha-nuong" className="col-sm-4 col-form-label">
                      Chả Nướng
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="cha-nuong"
                        min="0"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="banh-dau-bo" className="col-sm-4 col-form-label">
                      Bánh đầu bò
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        className="form-control"
                        id="banh-dau-bo"
                        min="0"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-4 col-form-label">
                      Tên
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="address" className="col-sm-4 col-form-label">
                      Địa chỉ
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 col-form-label">
                      Số điện thoại
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
